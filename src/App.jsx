import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import languages from './data/languages';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Learn Web development</h1>
      <div className="btn-group mb-4" role="group" aria-label="Basic example">
        {languages.map((lang) => (
          <button
            key={lang.id}
            type="button"
            className={`btn ${selectedLanguage.id === lang.id ? 'btn-warning' : 'btn-primary'}`}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang.title}
          </button>
        ))}
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{selectedLanguage.title}</h5>
          <p className="card-text">{selectedLanguage.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;