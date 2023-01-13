import React from "react"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./user_form/Form";


export const Routing = () => {
    return (
            <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Signup/>}/>
            </Routes>
            </BrowserRouter>

    );
}
 export default Routing;
