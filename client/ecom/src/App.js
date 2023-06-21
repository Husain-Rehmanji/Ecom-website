import './App.css';
import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import {Helmet} from 'react-helmet';
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

class App extends React.Component{
 /* constructor(props){
    super(props);
    this.state=(apiResponse => "");
  }
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
  }
  componentWillMount(){
    this.callAPI();

    <p>{this.state.apiResponse}</p>
  }*/

  
  
  render(){
    return (
      <div>
        
        <Helmet>
          <title>Shopsphere</title>
          <meta name='description' content='One stop website for all your fashion needs'/>
          <meta name='keywords' content='Clothes, Shopping, Fashion, Style' />
        </Helmet>
        <RouterProvider router={router} />
        
      </div>
    );
  }

}


export default App;
