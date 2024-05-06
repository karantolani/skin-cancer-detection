function SampleImage({imgSrc}) {
    return (
        <img src={imgSrc} className="h-[128px] min-h-0 w-full object-cover rounded transition-transform duration-700 ease-in-out cursor-pointer hover:scale-150"/>
    )
}

export default SampleImage;