import { Route, Routes } from "react-router-dom";
import Navbar1 from "./Navbar";
import Dashboard from "./Dashboard";
import '../Styles/LandingPage.css'

const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <div id="navbar">
            <Navbar1/>
            </div>
            <div className="components">
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
            </div>
        </div>
     );
}
 
export default LandingPage;