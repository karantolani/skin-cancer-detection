import Page from "../components/Page.jsx";
import signUpImg from "../assets/signup-bg.jpg";
import ribbonImg from "../assets/ribbon-health.svg";
import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";
import {Form, Link, Navigate, useLoaderData, useNavigate} from "react-router-dom";
import LogoAndName from "../components/LogoAndName.jsx";
import {useState} from "react";
import axios from "axios";
import {API_BASE_URL, SIGNUP_ROUTE} from "../constants.js";
import LoadingScreen from "../components/LoadingScreen.jsx";
import FormError from "../components/FormError.jsx";
import {validateEmail} from "../utils.js";



function SignUp() {
    const navigate = useNavigate();
    const user = useLoaderData();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const signUpBtnClick = () => {
        setLoading(true);

        axios.post(API_BASE_URL + SIGNUP_ROUTE, {
            name, email, password
        }, {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            withCredentials: true
        }).then(response => {


            if (response.status >= 200 && response.status < 300) {
                navigate("/");
            } else
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
            <img src={signUpImg} className="hidden lg:block min-h-0 h-full w-full object-cover"/>
            <div className="col-span-full lg:col-span-1 flex flex-col gap-3 items-center justify-center px-16 lg:px-20">
                <LogoAndName />
                <h1 className="font-bold text-4xl text-center lg:text-5xl mt-5">Create an account</h1>
                <p className="text-xl">Join now to take tests</p>

                {error && <FormError msg={error} className="mt-5 self-stretch"/>}

                <span className="self-start font-semibold">Full Name</span>
                <TextInput placeholder="e.g. John Doe" maxLength={40} value={name} onChange={e => setName(e.target.value)}/>

                <span className="self-start mt-2 font-semibold">Email</span>
                <TextInput placeholder="e.g. john@doe.com" type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" maxLength={30} value={email} onChange={e => setEmail(e.target.value)}/>

                <span className="self-start mt-2 font-semibold">Password</span>
                <TextInput type="password" minLength={4} maxLength={15} value={password} onChange={e => setPassword(e.target.value)}/>

                <Button text="Signup" className="self-stretch mt-2 py-2" onClick={signUpBtnClick} disabled={name.trim().length === 0 || !validateEmail(email) || password.trim().length < 4}/>
                <p className="mt-2">
                   Already have a account? <Link to="/login" className="font-semibold underline">Login</Link>
                </p>
            </div>
        </Page>
    )
}

export default SignUp;