import ribbonImg from "../assets/ribbon-health.svg";
import {Link} from "react-router-dom";

function LogoAndName() {

    return (
        <Link to="/" className="font-semibold uppercase tracking-wide text-base lg:text-xl flex gap-2 items-center cursor-pointer">
            <img src={ribbonImg}/>
            <span>Skin Cancer Awareness</span>
        </Link>
    )
}

export default LogoAndName;