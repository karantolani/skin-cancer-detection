function Heading1({text, className}) {
    return (
        <h1 className={`text-4xl text-center lg:text-5xl font-bold ${className}`}>{text}</h1>
    )
}

export default Heading1;