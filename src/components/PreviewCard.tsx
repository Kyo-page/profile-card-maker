import type { PreviewProps } from "../type";

const bgColors = {
    amber: "bg-amber-300",
    lime: "bg-lime-300",
    teal: "bg-teal-300",
};

export const PreviewCard = ({ name, color }: PreviewProps) => {
    return (
        <>
            <div className={`card shadow-sm ${bgColors[color]}`}>
                <div className="card-body">
                    <div className="text-center text-lg font-bold tracking-wide">{name}</div>
                </div>
            </div>
        </>
    );
};
