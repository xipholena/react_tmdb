import { ToastContainer } from 'react-toastify';
import Header from './layout/header/Header.tsx';
import Movies from './feature/movies/components/Movies.tsx';
import './App.css';
import './layout/styles.css';

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
