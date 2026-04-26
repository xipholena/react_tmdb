import './App.css';
import './layout/styles.css';
import Header from './layout/header/Header.tsx';
import Search from './feature/search/components/Search.tsx';
import MoviesList from './feature/movies/components/MoviesList.tsx';

const App = () => {
  return (
    <main>
      <div className="container">
        <Header />
        <Search />
        <MoviesList />
      </div>
    </main>
  );
};

export default App;
