import NavItem from "./NavItem.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import UserAvatar from "./UserAvatar.jsx";

function Nav({user}) {
    const navigate = useNavigate();

    const loginBtnClick = () => {
        navigate("/login");
    }

    const takeATestBtnClick = () => {
        navigate("/take-a-test");
    }

    return (
        <nav className="hidden ml-auto lg:flex gap-10 text-xl">
            <NavItem text="More about Skin Cancer" to="https://en.wikipedia.org/wiki/Skin_cancer" serverSideUrl={true}/>
            <NavItem text="Contact Us" to="/contact-us"/>
            <div className="flex gap-5 items-center">
                <Button text="Take a Test" onClick={takeATestBtnClick}/>
                {
                    user ? <UserAvatar user={user}/>
                        : <Button text="Login" filled={false} onClick={loginBtnClick}/>
                }
            </div>
        </nav>
    )
}

export default Nav;