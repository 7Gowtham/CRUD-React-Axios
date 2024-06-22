import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Home from '../components/Home'
import TopBar from '../components/TopBar'
import View from '../components/View'
import {Navigate} from 'react-router-dom' 

const AppRouter = [
    {
        path:'/',
        element:<><TopBar /> <Home /> </>
    },
    {
        path: '/dashboard',
        element:<><TopBar /><Dashboard/></>
    },
    {
        path:'/create',
        element:<><TopBar /><Create/></>
    },
    {
        path:'/view/:id',
        element:<><TopBar /><View/></>
    },
    {
        path:'/*',
        element:<Navigate to='/' />
    }

]

export default AppRouter