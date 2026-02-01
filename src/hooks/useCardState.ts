import { useState, useCallback } from "react";
import type { CardColor, CardState, CardStateActions } from "../types";
import { DEFAULT_COLOR, DEFAULT_NAME } from "../constants/colors";

/**
 * カードの状態を管理するカスタムフック
 *
 * @param initialName - 初期名前（省略時はデフォルト値を使用）
 * @param initialColor - 初期色（省略時はデフォルト値を使用）
 * @returns カードの状態と更新関数
 */
export const useCardState = (
  initialName: string = DEFAULT_NAME,
  initialColor: CardColor = DEFAULT_COLOR
): CardState & CardStateActions => {
  const [name, setNameState] = useState(initialName);
  const [color, setColorState] = useState<CardColor>(initialColor);

  // useCallbackで関数をメモ化し、不要な再レンダリングを防止
  const setName = useCallback((newName: string) => {
    setNameState(newName);
  }, []);

  const setColor = useCallback((newColor: CardColor) => {
    setColorState(newColor);
  }, []);

  return {
    name,
    color,
    setName,
    setColor,
  };
};
