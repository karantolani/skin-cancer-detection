import HomeChild from "../../components/HomeChild.jsx";
import SampleImage from "../../components/SampleImage.jsx";
import sampleImage1 from "../../assets/sample_img1.jpg";
import sampleImage2 from "../../assets/sample_img2.jpg";
import sampleImage3 from "../../assets/sample_img3.jpg";
import sampleImage4 from "../../assets/sample_img4.jpg";
import photoImg from "../../assets/photo.svg";
import Button from "../../components/Button.jsx";
import SelectedImage from "../../components/SelectedImage.jsx";
import {useRef, useState} from "react";
import axios from "axios";
import {API_BASE_URL, LOGIN_ROUTE, TAKE_TEST_ROUTE} from "../../constants.js";
import {useLoaderData, useNavigate} from "react-router-dom";
import EmptyState from "./EmptyState.jsx";
import unauthorizedImg from "../../assets/unauthorized.svg";
import LoadingScreen from "../../components/LoadingScreen.jsx";
import Heading1 from "../../components/headings/Heading1.jsx";

const allowedFileTypes = ["image/png", "image/jpeg"];

function TakeATest() {
    const user = useLoaderData();
    const navigate = useNavigate();

    const [file, setFile] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const handleFileDrop = (ev) => {
        ev.preventDefault();

        for (let file of ev.dataTransfer.files) {
            if (allowedFileTypes.includes(file.type))
                return setFile(file);
        }

        alert("File type not supported");
    }

    const handleGetResultsClick = (ev) => {
        setLoading(true);

        axios.post(API_BASE_URL + TAKE_TEST_ROUTE, {
            file
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        }).then(response => {

            if (response.status >= 200 && response.status < 300) {
                navigate("/test-results");
            }
            else
                navigate("/");

            setLoading(false);
        }).catch(error => {

            setLoading(false);
        })
    }

    const handleDragOver = (ev) => ev.preventDefault();

    const handleBrowseClick = () => fileRef.current.click();

    const handleFileChange = (ev) => setFile(ev.target.files[0]);

    const fileRef = useRef();

    if (!user) {
        return (
            <EmptyState imgSrc={unauthorizedImg} heading="Unauthorized!" body="You cannot access this page. Please login to access this page."/>
        )
    }

    return (
        <HomeChild>
            {loading && <LoadingScreen />}
            <div className="w-full grid grid-cols-2 justify-center content-center gap-y-8 gap-x-6">
                <Heading1 text="Take a test!" className="col-span-full"/>
                <p className="col-span-full text-center text-xl">
                    Upload a clear image of your skin concern for a potential risk assessment. Early Detection is key!
                </p>
                <div onDrop={handleFileDrop} onDragOver={handleDragOver} onClick={handleBrowseClick}
                     className="col-span-full lg:col-span-1 border border-black border-dashed rounded flex py-4 flex-col items-center justify-center cursor-pointer gap-4 transition hover:bg-[rgb(0,0,0,.1)]">
                    <img src={photoImg} className="w-8 h-8"/>
                    <p>
                        Drag and drop file here or <span className="underline">Choose File</span>
                    </p>
                    <span className="text-gray-600">
                        Supported formats: JPEG, PNG
                    </span>
                </div>
                <input type="file" ref={fileRef} name="skinImage" onChange={handleFileChange} accept="image/png, image/jpeg" className="hidden"/>
                <div className="col-span-full lg:col-span-1 grid grid-cols-2 p-3 auto-rows-max gap-4">
                    <h2 className="font-semibold text-2xl col-span-full">Sample Images</h2>
                    <SampleImage imgSrc={sampleImage1}/>
                    <SampleImage imgSrc={sampleImage2}/>
                    <SampleImage imgSrc={sampleImage3}/>
                    <SampleImage imgSrc={sampleImage4}/>
                </div>
                {file && <SelectedImage file={file} onRemoveImg={() => setFile(undefined)}/>}

                <Button text="Get Results" className="col-span-full text-xl" disabled={!file} onClick={handleGetResultsClick}/>
            </div>
        </HomeChild>
    )
}

export default TakeATest;