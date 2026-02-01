import { PreviewCard } from "./components/PreviewCard";
import { CardEditor } from "./components/CardEditor";
import { useCardState } from "./hooks/useCardState";

/**
 * アプリケーションのルートコンポーネント
 *
 * カードのプレビューと編集機能を提供する
 */
function App() {
  const { name, color, setName, setColor } = useCardState();

  return (
    <main className="p-4 max-w-md mx-auto">
      <PreviewCard name={name} color={color} />
      <CardEditor
        name={name}
        setName={setName}
        color={color}
        setColor={setColor}
      />
    </main>
  );
}

export default App;
