import React from 'react';
import ReactDOM from 'react-dom/client';
import Preloader from './Preloader';
import Header from './Header';
import Contact from './Contact';
import Body from './Body';
function App() {
  return (
    <React.StrictMode>
      {/* <Preloader /> */}
      <Header />
      <Body />
      <Contact />
    </React.StrictMode>
  );
}

export default App;
