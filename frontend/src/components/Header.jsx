import ribbonImg from "../assets/ribbon-health.svg";
import Nav from "./Nav.jsx";
import {useLoaderData} from "react-router-dom";
import LogoAndName from "./LogoAndName.jsx";

function Header() {
    const user = useLoaderData();

    return (
        <header className="flex h-20 border-b border-b-gray-300 px-8 items-center">
            <LogoAndName />
            <Nav user={user}/>
        </header>
    )
}

export default Header;