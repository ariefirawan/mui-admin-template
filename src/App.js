import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductList from './pages/ProduckList/ProductList';
import NewProduct from './pages/NewProduct/NewProduct';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
import UserList from './pages/UserList/UserList';

import './App.css';

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productlist" component={ProductList} />
          <Route path="/product/:id" component={Product} />
          <Route path="/newproduct" component={NewProduct} />
          <Route exact path="/userlist">
            <UserList />
          </Route>
          <Route path="/user/:id" component={User} />
          <Route path="/newuser" component={NewUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
