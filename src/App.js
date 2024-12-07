import './App.css';
import { Body } from './components/Body';
import appStore from './utils/appStroe';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <Body></Body>
    </Provider>
  );
}

export default App;
