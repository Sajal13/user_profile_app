import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 
} from 'react-router-dom';
import './global.css';
import App from './App';
import { store } from './lib/store/Store';
import { Provider } from 'react-redux';
import { fetchUsers } from './lib/store/User/UserSlice';

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={ <App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

