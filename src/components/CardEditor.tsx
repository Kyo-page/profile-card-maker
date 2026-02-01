import type { CardColor } from "../types";
import { CARD_COLORS } from "../constants/colors";

/**
 * CardEditor コンポーネントのProps
 */
interface CardEditorProps {
  /** 現在の名前 */
  name: string;
  /** 名前を更新する関数 */
  setName: (value: string) => void;
  /** 現在選択されている色 */
  color: CardColor;
  /** 色を更新する関数 */
  setColor: (value: CardColor) => void;
}

/**
 * 色選択用ラジオボタンコンポーネント
 */
interface ColorRadioButtonProps {
  /** 色の識別子 */
  colorId: CardColor;
  /** ラジオボタンのスタイルクラス */
  radioClass: string;
  /** 選択状態 */
  isSelected: boolean;
  /** 選択変更時のコールバック */
  onSelect: (color: CardColor) => void;
}

/**
 * 色選択用のラジオボタン
 */
const ColorRadioButton = ({
  colorId,
  radioClass,
  isSelected,
  onSelect,
}: ColorRadioButtonProps) => (
  <input
    type="radio"
    name="color-group"
    checked={isSelected}
    onChange={() => onSelect(colorId)}
    className={radioClass}
    aria-label={`${colorId} color`}
  />
);

/**
 * カード情報を編集するためのエディターコンポーネント
 *
 * 名前の入力と色の選択機能を提供する
 */
export const CardEditor = ({
  name,
  setName,
  color,
  setColor,
}: CardEditorProps) => {
  return (
    <div className="card bg-white shadow-sm mt-4">
      <div className="card-body">
        {/* 名前入力フィールド */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your name</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name input"
          />
        </fieldset>

        {/* 色選択フィールド */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Color</legend>
          <div className="flex gap-2" role="radiogroup" aria-label="Color selection">
            {CARD_COLORS.map((colorConfig) => (
              <ColorRadioButton
                key={colorConfig.id}
                colorId={colorConfig.id}
                radioClass={colorConfig.radioClass}
                isSelected={color === colorConfig.id}
                onSelect={setColor}
              />
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};
