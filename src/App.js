import './App.css';

import Header from './components/Header/index'
import Body from './components/Body/index'
import GlobalStyle from "./styles/globals"

function App() {
  return (
    <div>
      <Header/>
      <Body />
      <GlobalStyle />      
    </div>
  );
}

export default App;
