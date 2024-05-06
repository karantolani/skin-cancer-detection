
function PrecautionItem({heading, moreInfo, img}) {
    return (
        <div className="flex items-center flex-col gap-2">
            <img src={img}/>
            <h4 className="text-center font-semibold text-2xl">{heading}</h4>
            <p className="text-center">{moreInfo}</p>
        </div>
    )
}

export default PrecautionItem;