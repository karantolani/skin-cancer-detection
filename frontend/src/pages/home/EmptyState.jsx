import HomeChild from "../../components/HomeChild.jsx";

function EmptyState({imgSrc, heading, body}) {
    return (
        <HomeChild className="flex flex-col justify-center items-center gap-8">
            <img src={imgSrc} className="w-52 h-52 lg:w-72 lg:h-72"/>
            <h1 className="text-5xl font-bold">{heading}</h1>
            <p className="text-xl text-center">{body}</p>
        </HomeChild>
    )
}

export default EmptyState;