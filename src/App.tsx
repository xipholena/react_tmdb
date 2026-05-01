import { ToastContainer } from 'react-toastify';
import Header from './layout/header/Header.tsx';
import Movies from './feature/movies/components/Movies.tsx';
import './App.css';
import './layout/styles.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './layout/error/ErrorPage.tsx';

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <ToastContainer />
        <main>
          <div className="container">
            <Header />
            <Movies />п
          </div>
        </main>
      </ErrorBoundary>
    </>
  );
};

export default App;
