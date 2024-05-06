function TextInput(props) {
    return (
        <input {...props} className="self-stretch bg-transparent border border-black outline-none rounded py-2 px-3 invalid:border-red-500 invalid:text-red-600"/>
    )
}

export default TextInput;