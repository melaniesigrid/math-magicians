import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/Home/" element={<Home />} />
          <Route path="/Quote/" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
