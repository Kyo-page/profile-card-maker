// 色の設定を一元管理
// 新しい色を追加する場合は、このCARD_COLORS配列に追加するだけでOK
export const CARD_COLORS = ["amber", "lime", "teal"] as const;

export type CardColor = (typeof CARD_COLORS)[number];

// PreviewCard用の背景色
export const previewBgColors: Record<CardColor, string> = {
  amber: "bg-amber-300",
  lime: "bg-lime-300",
  teal: "bg-teal-300",
};

// CardEditor用のラジオボタンスタイル
export const radioStyles: Record<CardColor, string> = {
  amber: "radio bg-amber-100 border-amber-300 checked:bg-amber-200 checked:text-amber-600 checked:border-amber-600",
  lime: "radio bg-lime-100 border-lime-300 checked:bg-lime-200 checked:text-lime-600 checked:border-lime-600",
  teal: "radio bg-teal-100 border-teal-300 checked:bg-teal-200 checked:text-teal-600 checked:border-teal-600",
};
