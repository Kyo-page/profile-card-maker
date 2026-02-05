import type { PreviewProps } from "../type";
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const bgColors = {
    amber: "bg-amber-300",
    lime: "bg-lime-300",
    teal: "bg-teal-300",
    blue: "bg-blue-300",
    pink: "bg-pink-300",
    rose: "bg-rose-300",
};

export const PreviewCard = ({ color, image, name, title, message, snsAccounts }: PreviewProps) => {
    return (
        <>
            <div className={`card w-full shadow-sm ${bgColors[color]}`}>
                <div className="card-body items-center gap-4">
                    <img src={image} className="rounded-full max-w-30" />
                    <div className="space-y-1">
                        <div className="text-center text-lg font-bold tracking-wide">{name}</div>
                        <div className="text-center text-black/50 font-bold tracking-wide">{title}</div>
                    </div>
                    <div className="bg-white w-full whitespace-pre-wrap rounded p-4 tracking-wide">{message}</div>
                    <div className="flex items-center gap-2">
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {snsAccounts.map((sns, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1 text-sm bg-black/60 mix-blend-multiply text-white py-1 px-2 rounded"
                                >
                                    {sns.type === "X" && <FaXTwitter />}
                                    {sns.type === "GitHub" && <FaGithub />}
                                    {sns.type === "Instagram" && <FaInstagram />}
                                    <span>{sns.id}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
