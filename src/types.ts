// 色の設定を一元管理
// 新しい色を追加する場合は、このCARD_COLORS配列に追加するだけでOK
export const CARD_COLORS = ["amber", "lime", "teal"] as const;

export type CardColor = (typeof CARD_COLORS)[number];

// 色名からスタイルを自動生成
const generatePreviewBgColor = (color: CardColor) => `bg-${color}-300`;

const generateRadioStyle = (color: CardColor) =>
  `radio bg-${color}-100 border-${color}-300 checked:bg-${color}-200 checked:text-${color}-600 checked:border-${color}-600`;

// PreviewCard用の背景色
export const previewBgColors = Object.fromEntries(
  CARD_COLORS.map((c) => [c, generatePreviewBgColor(c)])
) as Record<CardColor, string>;

// CardEditor用のラジオボタンスタイル
export const radioStyles = Object.fromEntries(
  CARD_COLORS.map((c) => [c, generateRadioStyle(c)])
) as Record<CardColor, string>;
