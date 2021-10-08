import logo from './logo.svg';
import './App.css';
import MainRouter from './Route/MainRouter';
import './CSS/globalstyle.css'

import  store  from './Redux/Store'
import { Provider } from 'react-redux'




function App() {

 
  return (
    <Provider store={store}>
      <MainRouter>

      </MainRouter>
    </Provider>
  );
}

export default App;
