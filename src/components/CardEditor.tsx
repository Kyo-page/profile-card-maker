import type { EditorProps } from "../type";

export const CardEditor = ({ name, setName, color, setColor }: EditorProps) => {
    return (
        <>
            <div className="card w-full bg-white shadow-sm">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your name</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Color</legend>
                        <div className="flex gap-2">
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
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );
};
