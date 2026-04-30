import style from '../styles/SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className={style.skeletonCard}>
      <div className={style.skeletonPoster}></div>
      <div className={style.skeletonInfo}>
        <div className={`${style.skeletonLine} ${style.title}`}></div>
        <div className={`${style.skeletonLine} ${style.year}`}></div>
        <div className={`${style.skeletonLine} ${style.overview}`}></div>
        <div className={`${style.skeletonLine} ${style.overview}`}></div>
        <div className={`${style.skeletonLine} ${style.overview}`}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
