import './App.css';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer'; 
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children:[
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: 'watch',
      element: <WatchPage/>
    },
    {
      path: 'results',
      element: <SearchResults/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
