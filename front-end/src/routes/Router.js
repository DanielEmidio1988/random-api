import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import HTTPCat from "../pages/HTTPCat/HTTPCat"
import RandomDog from "../pages/RandomDog/RandomDog"
import RegisterClient from "../pages/RegisterClient/RegisterClient";
import DetailsClient from "../pages/DetailsClient/DetailsClient";

function Router() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/main" element={<HomePage/>}/>
                    <Route path="/main/:page" element={<HomePage/>}/>
                    <Route path="/main/httpcat" element={<HTTPCat/>}/>
                    <Route path="/main/randomdog" element={<RandomDog/>}/>
                    <Route path="/main/cadastro_cliente" element={<RegisterClient/>}/>
                    <Route path="/main/cadastro_cliente/:id" element={<DetailsClient/>}/>
                </Routes>
            </BrowserRouter>   
        );
      }
      
      export default Router