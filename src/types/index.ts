/**
 * カードに適用可能な色の型定義
 */
export type CardColor = "amber" | "lime" | "teal";

/**
 * カードの状態を表す型定義
 */
export interface CardState {
  name: string;
  color: CardColor;
}

/**
 * カード状態の更新関数の型定義
 */
export interface CardStateActions {
  setName: (name: string) => void;
  setColor: (color: CardColor) => void;
}
