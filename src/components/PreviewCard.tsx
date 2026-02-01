import type { CardColor } from "../types";
import { COLOR_BG_MAP } from "../constants/colors";

/**
 * PreviewCard コンポーネントのProps
 */
interface PreviewCardProps {
  /** 表示する名前 */
  name: string;
  /** カードの背景色 */
  color: CardColor;
}

/**
 * カードのプレビューを表示するコンポーネント
 *
 * 選択された色と名前でカードをレンダリングする
 */
export const PreviewCard = ({ name, color }: PreviewCardProps) => {
  const bgColorClass = COLOR_BG_MAP[color];

  return (
    <div className={`card shadow-sm ${bgColorClass}`}>
      <div className="card-body">
        <h2 className="text-center text-lg font-bold tracking-wide">{name}</h2>
      </div>
    </div>
  );
};
