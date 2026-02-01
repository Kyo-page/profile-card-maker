import { useState } from "react";
import { PreviewCard } from "./components/PreviewCard";
import { CardEditor } from "./components/CardEditor";
import { CARD_COLORS } from "./types";
import type { CardColor } from "./types";

function App() {
    const [name, setName] = useState("John Smith");
    const [color, setColor] = useState<CardColor>(CARD_COLORS[0]);

    return (
        <>
            <PreviewCard name={name} color={color} />
            <CardEditor name={name} setName={setName} color={color} setColor={setColor} />
        </>
    );
}

export default App;
