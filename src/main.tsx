import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "reset-css/reset.css";
import './index.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import JsonDecoder from "./pages/json";
import Base64Page from "./pages/base64";
import NotFound from "./pages/404";
import UrlEncode from './pages/url-encode';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route index element={<JsonDecoder/>}/>
                    <Route path={"/json"} element={<JsonDecoder/>}/>
                    <Route path={"/base64"} element={<Base64Page/>}/>
                    <Route path={"/urlEncode"} element={<UrlEncode/>}/>
                    <Route path={"*"} element={<NotFound/>} />
                </Route>
            </Routes>
        </Router>

    </React.StrictMode>
)
