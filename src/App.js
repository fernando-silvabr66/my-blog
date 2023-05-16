import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <h1>My blog</h1>
      <div className="page-body">
        //Welcome to my blog!
        <HomePage />
        <AboutPage />
        <ArticlesListPage />
        <ArticlePage />
      </div>
    </div>
  );
}

export default App;
