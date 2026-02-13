export type CardColor = "amber" | "lime" | "teal" | "blue" | "pink" | "rose" | "gray";
export type SNS = {
    type: "X" | "GitHub" | "Instagram" | "Web";
    id: string;
};

export interface PreviewProps {
    color: CardColor;
    image: string;
    name: string;
    title: string;
    message: string;
    snsAccounts: SNS[];
}

export interface EditorProps extends PreviewProps {
    setColor: (value: CardColor) => void;
    setImage: (value: string) => void;
    setName: (value: string) => void;
    setTitle: (value: string) => void;
    setMessage: (value: string) => void;
    setSnsAccounts: (value: SNS[]) => void;
}
