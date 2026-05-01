import style from '../styles/Spinner.module.css';

const Spinner = () => {
  return (
    <div className={style.loading}>
      <div className={style.loadingSpinner}></div>
    </div>
  );
};

export default Spinner;
