import photoImg from "../assets/photo.svg";
import closeImg from "../assets/close.svg";

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

function SelectedImage({file, onRemoveImg}) {
    return (
        <div className="border border-black rounded col-span-full h-16 px-4 py-2 grid grid-cols-[50px_1fr_50px] grid-rows-2 gap-x-4 gap-y-1 place-items-center">
            <img src={photoImg} className="w-10 h-10 row-span-full"/>
            <div className="place-self-start">
                {file.name}
            </div>
            <img src={closeImg} onClick={onRemoveImg} className="row-span-full col-start-3 w-5 h-5 cursor-pointer"/>
            <div className="place-self-start">
                {bytesToSize(file.size)}
            </div>

        </div>
    )
}

export default SelectedImage;