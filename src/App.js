import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { render } from "react-dom";
import Header from './components/Header';
import Calculator from './components/Calculator';
import About from './pages/About';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Header />
        <Routes>
          <Route path="/math-magicians" element={<Calculator />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
