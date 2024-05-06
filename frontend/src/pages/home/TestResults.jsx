
import backBtnImg from "../../assets/back.svg";
import HomeChild from "../../components/HomeChild.jsx";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import EmptyState from "./EmptyState.jsx";
import {moreInfos, precautions} from "../../more_infos.js";
import unauthorizedImg from "../../assets/unauthorized.svg";
import PrecautionItem from "../../components/PrecautionItem.jsx";
import Button from "../../components/Button.jsx";
import {useState} from "react";
import axios from "axios";
import {API_BASE_URL, SHARE_RESULTS_ROUTE} from "../../constants.js";

function TestResults() {
    const data = useLoaderData();
    const navigate = useNavigate();
    const [shareBtnDisabled, setShareBtnDisabled] = useState(false);

    const backBtnClick = () => navigate(-1);

    const handleShareResultsClick = async () => {
        setShareBtnDisabled(true);
        try {
            const response = await axios.get(API_BASE_URL + SHARE_RESULTS_ROUTE, {
                withCredentials: true
            });

            if (response.status === 200) {
                const path = response.data.path;
                await navigator.clipboard.writeText(location.href + path);
                alert("Link copied on clipboard");
            }

        } catch{}
        setShareBtnDisabled(false);
    }

    if (!data) {
        return <EmptyState imgSrc={unauthorizedImg} heading="Unauthorized!" body="You cannot access this page. Please login to access this page."/>
    }

    if (!data.prediction) {
        return <EmptyState imgSrc={unauthorizedImg} heading="No Previous Test Found!" body="You have to take a test before seeing the results."/>
    }


    return (
        <HomeChild className="grid grid-cols-2 gap-y-6 auto-rows-max py-8 gap-x-6">
            <div className="flex gap-3 items-center cursor-pointer col-span-full" onClick={backBtnClick}>
                <img src={backBtnImg}/>
                <span>Back</span>
            </div>
            <h1 className="text-3xl font-bold">Test Results Summary</h1>
            <Button text="Share Results" filled={false} className="place-self-end" onClick={handleShareResultsClick} disabled={shareBtnDisabled}/>

            <img src={`data:${data.imageType};base64,${data.image}`}
                 className="h-80 max-h-80 mt-6 w-80 object-cover rounded col-span-full place-self-center"/>
            <div className="flex flex-col items-center gap-1">
                <span className="text-gray-600 flex items-center gap-2 text-xl">
                    <span>Prediction</span>
                </span>
                <h2 className="text-2xl lg:text-3xl text-center font-semibold capitalize">{data.prediction}</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className=" text-gray-600 flex items-center gap-3 text-xl">
                    <span>Confidence</span>
                </span>
                <h2 className="text-2xl lg:text-3xl font-semibold">{`${Math.round(parseFloat(data.predictionConfidence) * 100)}%`}</h2>
            </div>
            <h3 className="col-span-full text-2xl lg:text-3x mt-4 font-bold capitalize">More
                About {data.prediction}</h3>

            <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left col-span-full text-xl">
                {moreInfos[data.prediction]}
            </p>

            <h3 className="col-span-full text-2xl lg:text-3x mt-4 font-bold capitalize">
                Precautions
            </h3>

            <div className="col-span-full grid grid-cols-3 gap-x-6 gap-y-10">
                {
                    precautions.map(precaution => <PrecautionItem {...precaution}/>)
                }
            </div>
        </HomeChild>
    )
}

export default TestResults;