import React from "react";
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


import './index.css';
import Admin from "../Auto/Admin";
import AdminUsers from "../Users/AdminUsers"
import CustomerPage from "../Сustomer/CustomerPage"
import AdminOrders from "../Orders/AdminOrders/index"

const Header = () => {
    return(
        <header>
            <h1>
                Информационная система автосалона
            </h1>

            <HashRouter>
                <div>
                    <nav className="navigation">
                        <Link to="/">Автомобили</Link>
                        <Link to="/users">Пользователи</Link>
                        <Link to="/orders">Заказы</Link>
                        <Link to="/customer">Страница покупателя</Link>
                    </nav>
                    <Switch>
                        <Route path="/customer">
                            <CustomerPage />
                        </Route>
                        <Route path="/orders">
                            <AdminOrders />
                        </Route>
                        <Route path="/users">
                            <AdminUsers />
                        </Route>
                        <Route exact path="/">
                            <Admin/>
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
        </header>
    )
}


export function About() {
    return <h2>About</h2>;
}
export default Header;
