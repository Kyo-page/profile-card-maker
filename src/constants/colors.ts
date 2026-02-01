import type { CardColor } from "../types";

/**
 * カード色の設定情報
 * 各色に対応するTailwind CSSクラスを定義
 */
export interface ColorConfig {
  /** 色の識別子 */
  id: CardColor;
  /** プレビューカードの背景色クラス */
  bgClass: string;
  /** ラジオボタンのスタイルクラス */
  radioClass: string;
}

/**
 * 利用可能なカード色の設定一覧
 */
export const CARD_COLORS: readonly ColorConfig[] = [
  {
    id: "amber",
    bgClass: "bg-amber-300",
    radioClass:
      "radio bg-amber-100 border-amber-300 checked:bg-amber-200 checked:text-amber-600 checked:border-amber-600",
  },
  {
    id: "lime",
    bgClass: "bg-lime-300",
    radioClass:
      "radio bg-lime-100 border-lime-300 checked:bg-lime-200 checked:text-lime-600 checked:border-lime-600",
  },
  {
    id: "teal",
    bgClass: "bg-teal-300",
    radioClass:
      "radio bg-teal-100 border-teal-300 checked:bg-teal-200 checked:text-teal-600 checked:border-teal-600",
  },
] as const;

/**
 * 色IDから背景クラスを取得するためのマップ
 */
export const COLOR_BG_MAP: Record<CardColor, string> = CARD_COLORS.reduce(
  (acc, config) => {
    acc[config.id] = config.bgClass;
    return acc;
  },
  {} as Record<CardColor, string>
);

/**
 * デフォルトの色設定
 */
export const DEFAULT_COLOR: CardColor = "amber";

/**
 * デフォルトの名前
 */
export const DEFAULT_NAME = "John Smith";
