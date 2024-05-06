import Page from "../components/Page.jsx";
import loginImg from "../assets/login-bg.jpg";
import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";
import {Link, Navigate, useLoaderData, useNavigate} from "react-router-dom";
import LogoAndName from "../components/LogoAndName.jsx";
import {useState} from "react";
import LoadingScreen from "../components/LoadingScreen.jsx";
import FormError from "../components/FormError.jsx";
import {validateEmail} from "../utils.js";
import axios from "axios";
import {API_BASE_URL, LOGIN_ROUTE, SIGNUP_ROUTE} from "../constants.js";

function Login() {
    const navigate = useNavigate();
    const user = useLoaderData();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const handleLoginBtnClick = () => {
        setLoading(true);

        axios.post(API_BASE_URL + LOGIN_ROUTE, {
            email, password
        }, {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            withCredentials: true
        }).then(response => {

            if (response.status >= 200 && response.status < 300)
                navigate("/");
            else
                setError(response.data.error);

            setLoading(false);
        }).catch(error => {
            setError(error.response ? error.response.data.error: "Something went wrong");
            setLoading(false);
        })
    }

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <Page className="grid grid-cols-2 auto-rows-[100vh]">
            {loading && <LoadingScreen />}
            <img src={loginImg} className="hidden lg:block min-h-0 max-h-full w-full object-cover"/>
            <div className="col-span-full lg:col-span-1 flex flex-col gap-3 items-center justify-center px-16 lg:px-20">
                <LogoAndName />
                <h1 className="font-bold text-4xl lg:text-5xl mt-5 text-center">Welcome Back!</h1>
                <p className="text-xl">Login to access your tests.</p>

                {error && <FormError msg={error} className="mt-5 self-stretch"/>}

                <span className="self-start font-semibold">Email</span>
                <TextInput placeholder="e.g. john@doe.com" value={email} type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" maxLength={30} onChange={e => setEmail(e.target.value)}/>

                <span className="self-start mt-2 font-semibold">Password</span>
                <TextInput type="password" value={password} minLength={4} maxLength={15} onChange={e => setPassword(e.target.value)}/>

                <Link to="/forgotpassword" className="font-semibold self-end">Forgot Password?</Link>

                <Button text="Login"  className="self-stretch mt-2 py-2" disabled={!validateEmail(email) || password.trim().length < 4} onClick={handleLoginBtnClick}/>
                <p className="mt-2">
                    Don't have a account? <Link to="/signup" className="font-semibold underline">Sign Up</Link>
                </p>
            </div>
        </Page>
    )
}

export default Login;