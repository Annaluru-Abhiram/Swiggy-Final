import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router';
import App from './App.jsx';
import RestaurantContainer from './components/RestaurantContainer.jsx';
import SwiggyCorporate from './components/SwiggyCorporate.jsx';
import SearchBar from "./components/SearchBar.jsx";
import Help from "./components/Help.jsx";
import Offers from "./components/Offers.jsx";
import Error from "./components/Error.jsx";
import SignIn from './components/SignIn.jsx';
import Cart from "./components/Cart.jsx";
import RestaurantMenuInfo from './components/RestaurantMenuInfo.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<RestaurantContainer/>,
                errorElement:<Error/>
            },
            {
                path:"/swiggycorporate",
                element:<SwiggyCorporate/>,
                errorElement:<Error/>
            },
            {
                path:"/search",
                element:<SearchBar/>,
                errorElement:<Error/>
            },
            {
                path:"/offers",
                element:<Offers/>,
                errorElement:<Error/>
            },
            {
                path:"/help",
                element:<Help/>,
                errorElement:<Error/>
            },
            {
                path:"/signin",
                element:<SignIn/>,
                errorElement:<Error/>
            },
            {
                path:"/cart",
                element:<Cart/>,
                errorElement:<Error/>
            },
            {
                path:"/restaurantmenu/:id",
                element:<RestaurantMenuInfo/>,
                errorElement:<Error/>
            }
        ]
    }
]);

root.render(<RouterProvider router={appRouter}/>);