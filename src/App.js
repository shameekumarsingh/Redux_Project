import './App.css';

import Votes from './components/Votes';
import {Provider} from 'react-redux';
import voteStore from './store/votes-store';
function App() {
  return (
    <div className="app">
   
   <Provider store={voteStore}>
   <Votes></Votes>
   </Provider>
   </div>
  );
}

export default App;
