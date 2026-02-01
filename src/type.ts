export type CardColor = "amber" | "lime" | "teal";

export type PreviewProps = {
    name: string;
    color: CardColor;
};

export type EditorProps = {
    name: string;
    setName: (value: string) => void;
    color: CardColor;
    setColor: (value: CardColor) => void;
};
