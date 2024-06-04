import {useRoutes, BrowserRouter} from 'react-router-dom';
import {ShoppingCartProvider} from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Register from '../Register';
import {Navbar} from '../../Components/Navbar';
import '../../App.css'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/shopi', element: <Home />},
    {path: '/shopi/clothes', element: <Home />},
    {path: '/shopi/electronics', element: <Home />},
    {path: '/shopi/furniture', element: <Home />},
    {path: '/shopi/toys', element: <Home />},
    {path: '/shopi/others', element: <Home />},
    {path: '/shopi/my-account', element: <MyAccount />},
    {path: '/shopi/my-order', element: <MyOrder />},
    {path: '/shopi/my-orders', element: <MyOrders />},
    {path: '/shopi/my-orders/last', element: <MyOrder />},
    {path: '/shopi/my-orders/:id', element: <MyOrder />},
    {path: '/shopi/*', element: <NotFound />},
    {path: '/shopi/sign-in', element: <SignIn />},
    {path: '/shopi/register', element: <Register />},

  ]);

  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
