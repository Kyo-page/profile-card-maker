import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { FaFloppyDisk } from "react-icons/fa6";
import { PreviewCard } from "./components/PreviewCard";
import { CardEditor } from "./components/CardEditor";
import type { CardColor, SNS } from "./type";
import defaultImageUrl from "./img/default-avatar.jpg";

const cardBgHex: Record<CardColor, string> = {
    amber: "#fde68a",
    lime: "#d9f99d",
    teal: "#99f6e4",
    blue: "#bfdbfe",
    pink: "#fbcfe8",
    rose: "#fecdd3",
    gray: "#e5e7eb",
};

function App() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState<CardColor>("amber");
    const [image, setImage] = useState<string>(defaultImageUrl);
    const [name, setName] = useState("山田 太郎");
    const [title, setTitle] = useState("デザイナー");
    const [message, setMessage] = useState("よろしくお願いします！");
    const [snsAccounts, setSnsAccounts] = useState<SNS[]>([]);

    const cardData = { color, image, name, title, message, snsAccounts };
    const setters = { setColor, setImage, setName, setTitle, setMessage, setSnsAccounts };

    const handleSaveAsImage = async () => {
        const el = cardRef.current;
        if (!el) return;
        const originalBg = el.style.backgroundColor;
        try {
            el.style.backgroundColor = cardBgHex[color];
            await new Promise((r) => requestAnimationFrame(r));
            const dataUrl = await toPng(el, {
                pixelRatio: 2,
                backgroundColor: cardBgHex[color],
            });
            const link = document.createElement("a");
            link.download = `profile-card-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("画像の保存に失敗しました", err);
        } finally {
            el.style.backgroundColor = originalBg;
        }
    };

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-xl font-bold text-center">自己紹介カードメーカー</h1>
                <div className="text-2xl font-bold text-center tracking-wider mb-6 text-secondary">...</div>
                <div className="flex items-start gap-4">
                    <div className="flex items-end flex-col gap-2 w-1/2">
                        <PreviewCard ref={cardRef} {...cardData} />
                        <button
                            type="button"
                            className="btn btn-primary text-white gap-2 text-lg px-8 py-5"
                            onClick={handleSaveAsImage}
                        >
                            <FaFloppyDisk className="text-xl" />
                            保存
                        </button>
                    </div>
                    <CardEditor {...cardData} {...setters} />
                </div>
            </div>
        </>
    );
}

export default App;
