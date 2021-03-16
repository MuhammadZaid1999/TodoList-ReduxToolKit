import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import { store } from './store/store';
import TodoList from './components/TodoList';


function App() {
  return (
   
     <div>
   <Provider store={store}>
   <TodoList/>
   </Provider>
    </div>
  );
}

export default App;
