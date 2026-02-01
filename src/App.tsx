import { useState } from "react";
import { PreviewCard } from "./components/PreviewCard";
import { CardEditor } from "./components/CardEditor";

export type CardColor = "amber" | "lime" | "teal";

function App() {
    const [name, setName] = useState("John Smith");
    const [color, setColor] = useState<CardColor>("amber");

    return (
        <>
            <PreviewCard name={name} color={color} />
            <CardEditor name={name} setName={setName} color={color} setColor={setColor} />
        </>
    );
}

export default App;
