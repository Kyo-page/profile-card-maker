import { CARD_COLORS, radioStyles } from '../types';
import type { CardColor } from '../types';

type EditorProps = {
  name: string;
  setName: (value: string) => void;
  color: CardColor;
  setColor: (value: CardColor) => void;
};

export const CardEditor = ({ name, setName, color, setColor }: EditorProps) => {
  return (
    <>
      <div className="card bg-white shadow-sm mt-4">
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
              {CARD_COLORS.map((c) => (
                <input
                  key={c}
                  type="radio"
                  name="color-group"
                  checked={color === c}
                  onChange={() => setColor(c)}
                  className={radioStyles[c]}
                />
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};
