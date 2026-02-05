import { useState } from "react";
import { PreviewCard } from "./components/PreviewCard";
import { CardEditor } from "./components/CardEditor";
import type { CardColor, SNS } from "./type";
import defaultImageUrl from "./img/default-avatar.jpg";

function App() {
    const [color, setColor] = useState<CardColor>("amber");
    const [image, setImage] = useState<string>(defaultImageUrl);
    const [name, setName] = useState("山田 太郎");
    const [title, setTitle] = useState("デザイナー");
    const [message, setMessage] = useState("よろしくお願いします！");
    const [snsAccounts, setSnsAccounts] = useState<SNS[]>([]);

    const cardData = { color, image, name, title, message, snsAccounts };
    const setters = { setColor, setImage, setName, setTitle, setMessage, setSnsAccounts };

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-xl font-bold text-center">自己紹介カードメーカー</h1>
                <div className="text-2xl font-bold text-center tracking-wider mb-6 text-secondary">...</div>
                <div className="flex gap-4">
                    <PreviewCard {...cardData} />
                    <CardEditor {...cardData} {...setters} />
                </div>
            </div>
        </>
    );
}

export default App;
