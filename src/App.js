import NavBar from './Components/Navbar/Navbar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';

import './App.css';

function App() {
  return (<>
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/'
          element={<ItemListContainer />}/>
        
        <Route path='/category/:categoryId'
          element={<ItemDetailContainer />}/>
        
      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App;
