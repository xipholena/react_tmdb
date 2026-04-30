import SkeletonCard from './SkeletonCard.tsx';
import style from '../styles/SkeletonGrid.module.css';
interface Props {
  amount: number;
}
const SkeletonGrid = ({ amount }: Props) => {
  return (
    <div className={style.skeletonGrid}>
      {Array.from({ length: amount })
        .fill(true)
        .map((_item, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  );
};

export default SkeletonGrid;
