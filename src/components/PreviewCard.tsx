import type { CardColor } from '../App';

type PreviewProps = {
  name: string;
  color: CardColor;
};

export const PreviewCard = ({ name, color }: PreviewProps) => {
  return (
    <>
      <div className={`card shadow-sm bg-${color}-300`}>
        <div className="card-body">
          <div className="text-center text-lg font-bold tracking-wide">
            {name}
          </div>
        </div>
      </div>
    </>
  );
};
