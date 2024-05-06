import {getInitials} from "../utils.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL, LOGOUT_ROUTE} from "../constants.js";

function UserAvatar({user}) {
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const toggleDropDown = () => {
        setDropDownVisible(!dropDownVisible);
    }
    const logoutButtonClick = async () => {
        const response = await axios.get(API_BASE_URL + LOGOUT_ROUTE, {
            withCredentials: true
        });


        window.location.reload();
    }

    return (
        <div onClick={toggleDropDown} className="relative w-12 h-12 border border-black rounded-full flex items-center justify-center">
            <span className="cursor-pointer">{getInitials(user.name)}</span>
            { dropDownVisible &&
                <div className="absolute text-white-b-color top-full mt-6 px-6 py-4 right-0 bg-black z-10 rounded drop-shadow flex flex-col">
                    <h2 className="font-semibold text-base">{user.name}</h2>
                    <span className="text-sm mt-1">{user.email}</span>
                    <hr className="mt-4 border-white-b-color/50"/>
                    <p className="mt-4 text-base transition hover:text-red-400 cursor-pointer" onClick={logoutButtonClick}>Logout</p>
                </div>
            }
        </div>
    )
}

export default UserAvatar;