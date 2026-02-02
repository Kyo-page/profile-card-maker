import { useState } from "react";
import { PreviewCard } from "./components/PreviewCard";
import { CardEditor } from "./components/CardEditor";
import type { CardColor } from "./type";

function App() {
    const [name, setName] = useState("John Smith");
    const [color, setColor] = useState<CardColor>("amber");

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-xl font-bold text-center">自己紹介カードメーカー</h1>
                <div className="text-2xl font-bold text-center tracking-wider mb-6 text-secondary">...</div>
                <div className="flex gap-4">
                    <PreviewCard name={name} color={color} />
                    <CardEditor name={name} setName={setName} color={color} setColor={setColor} />
                </div>
            </div>
        </>
    );
}

export default App;
