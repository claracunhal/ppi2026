import './App.css';
import Header from './components/Header';

function App() {
  return (
     <>
      <Header />
      <h1>Mural Digital do IFRN - Campus Macau</h1>

      {notices.map(notice) -> (
        <article>
          <p>{notice.category}</p>
        </article>
      )
    </>
  );
}

export default App;


