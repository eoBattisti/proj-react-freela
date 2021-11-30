import './App.css';

import Header from './components/Header/index';
import Body from './components/Body/index';
import Footer from './components/Footer/index';
import GlobalStyle from "./styles/globals";

function App() {
  return (
    <div>
      <Header/>
      <Body />
      <GlobalStyle />
      <Footer />
    </div>
  );
}

export default App;
