import { useRoutes , BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/index.jsx'
import Home from '../Home/Home.jsx'
import MyAccount from '../MyAccount/MyAccount.jsx'
import MyOrders from '../MyOrders/MyOrders.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import SignIn from '../SignIn/SignIn.jsx'
import MyOrder from '../MyOrder/MyOrder.jsx'
import './App.css'
import NavBar from '../../components/NavBar/NavBar.jsx'
import CheckoutSideMenu from '../../components/CheckoutSideMenu/CheckoutSideMenu.jsx';


function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/not-found', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])
  return routes
}


const App = () => {
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
       <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
