import style from '../styles/ProgressBar.module.css';
const ProgressBar = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.progressBarFill}></div>
    </div>
  );
};

export default ProgressBar;
