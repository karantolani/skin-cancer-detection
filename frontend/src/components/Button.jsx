function Button({text, filled = true, className, onClick, disabled = false}) {
    return (
        <button onClick={onClick} disabled={disabled} className={`font-semibold ${filled ? "bg-black text-white": "bg-transparent border border-black" }  px-6 py-2  rounded transition disabled:opacity-70 enabled:hover:opacity-80 ${className}`}>
            {text}
        </button>
    )
}

export default Button;