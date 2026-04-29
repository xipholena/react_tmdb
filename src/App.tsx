import { ToastContainer } from 'react-toastify';
import './App.css';
import './layout/styles.css';
import Header from './layout/header/Header.tsx';
import Movies from './feature/movies/components/Movies.tsx';

const App = () => {
  return (
    <>
      <ToastContainer />
      <main>
        <div className="container">
          <Header />
          <Movies />
        </div>
      </main>
    </>
  );
};

export default App;
