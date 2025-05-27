import { useRoutes , BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import MyAccount from '../MyAccount/MyAccount.jsx'
import MyOrders from '../MyOrders/MyOrders.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import SignIn from '../SignIn/SignIn.jsx'
import MyOrder from '../MyOrder/MyOrder.jsx'
import './App.css'
import NavBar from '../../components/NavBar/NavBar.jsx'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/not-found', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ]);
  return routes
}


const App = () => {
  
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  )
}

export default App
