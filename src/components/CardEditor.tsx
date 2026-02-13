import type { EditorProps, SNS } from "../type";
import { type ChangeEvent } from "react";

export const CardEditor = ({
    color,
    setColor,
    setImage,
    name,
    setName,
    title,
    setTitle,
    message,
    setMessage,
    snsAccounts,
    setSnsAccounts,
}: EditorProps) => {
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <>
            <div className="card w-1/2 bg-white shadow-sm">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">カードの色</legend>
                        <div className="flex flex-wrap gap-2">
                            {/* Amber */}
                            <input
                                type="radio"
                                name="color-group"
                                checked={color === "amber"}
                                onChange={() => setColor("amber")}
                                className="radio bg-amber-100 border-amber-300 checked:bg-amber-200 checked:text-amber-600 checked:border-amber-600"
                            />

                            {/* Lime */}
                            <input
                                type="radio"
                                name="color-group"
                                checked={color === "lime"}
                                onChange={() => setColor("lime")}
                                className="radio bg-lime-100 border-lime-300 checked:bg-lime-200 checked:text-lime-600 checked:border-lime-600"
                            />

                            {/* Teal */}
                            <input
                                type="radio"
                                name="color-group"
                                checked={color === "teal"}
                                onChange={() => setColor("teal")}
                                className="radio bg-teal-100 border-teal-300 checked:bg-teal-200 checked:text-teal-600 checked:border-teal-600"
                            />

                            {/* Blue */}
                            <input
                                type="radio"
                                name="color-group"
                                checked={color === "blue"}
                                onChange={() => setColor("blue")}
                                className="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600"
                            />

                            {/* Pink */}
                            <input
                                type="radio"
                                name="color-group"
                                checked={color === "pink"}
                                onChange={() => setColor("pink")}
                                className="radio bg-pink-100 border-pink-300 checked:bg-pink-200 checked:text-pink-600 checked:border-pink-600"
                            />

                            {/* Rose */}
                            <input
                                type="radio"
                                name="color-group"
                                checked={color === "rose"}
                                onChange={() => setColor("rose")}
                                className="radio bg-rose-100 border-rose-300 checked:bg-rose-200 checked:text-rose-600 checked:border-rose-600"
                            />

                            {/* Gray */}
                            <input
                                type="radio"
                                name="color-group"
                                checked={color === "gray"}
                                onChange={() => setColor("gray")}
                                className="radio bg-gray-100 border-gray-300 checked:bg-gray-200 checked:text-gray-600 checked:border-gray-600"
                            />
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">アイコン画像</legend>
                        <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">名前</legend>
                        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">肩書き</legend>
                        <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">メッセージ</legend>
                        <textarea className="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">SNSアカウント</legend>
                        <div className="space-y-2">
                            {snsAccounts.map((sns, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <select
                                        className="select flex-1"
                                        value={sns.type}
                                        onChange={(e) => {
                                            const newAccounts = [...snsAccounts];
                                            newAccounts[index] = {
                                                ...newAccounts[index],
                                                type: e.target.value as SNS["type"],
                                            };
                                            setSnsAccounts(newAccounts);
                                        }}
                                    >
                                        <option value="X">X (Twitter)</option>
                                        <option value="GitHub">GitHub</option>
                                        <option value="Instagram">Instagram</option>
                                    </select>
                                    <input
                                        type="text"
                                        className="input flex-1"
                                        placeholder="アカウントID"
                                        value={sns.id}
                                        onChange={(e) => {
                                            const newAccounts = [...snsAccounts];
                                            newAccounts[index] = {
                                                ...newAccounts[index],
                                                id: e.target.value,
                                            };
                                            setSnsAccounts(newAccounts);
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-neutral-300"
                                        onClick={() => {
                                            const newAccounts = snsAccounts.filter((_, i) => i !== index);
                                            setSnsAccounts(newAccounts);
                                        }}
                                    >
                                        削除
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn btn-sm btn-secondary w-full"
                                onClick={() => {
                                    setSnsAccounts([...snsAccounts, { type: "X", id: "" }]);
                                }}
                            >
                                + SNSアカウントを追加
                            </button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );
};
