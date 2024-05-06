import HomeChild from "../../components/HomeChild.jsx";
import Button from "../../components/Button.jsx";
import Heading1 from "../../components/headings/Heading1.jsx";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <HomeChild className="flex flex-col gap-8 items-center justify-center text-center">
            <Heading1 text="Take your Skin Cancer Test Now!" />
            <p className="text-xl">
                Skin cancers are cancers that arise from the skin. They are due to the development of abnormal cells in the skin. <br /> Machine learning and neural networks can analyze images of moles and lesions to identify suspicious patterns, aiding in early detection.
            </p>
            <div className="flex justify-center gap-5 items-center">
                <Button text="Take a test" onClick={() => navigate("/take-a-test")}/>
                <Button text="How it works?" filled={false}/>
            </div>
        </HomeChild>
    )
}

export default Home;