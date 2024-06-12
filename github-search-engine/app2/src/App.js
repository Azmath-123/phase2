import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RepositoryList from './components/RepositoryList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RepositoryList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
