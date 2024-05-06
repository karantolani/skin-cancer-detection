import ErrorImg from "../assets/error.svg?react";

function FormError({msg, className}) {
    return (
        <div className={`rounded border border-red-600 bg-red-100 text-red-600 px-3 py-2 flex gap-3 items-center ${className}`}>
            <ErrorImg className="stroke-red-600"/>
            <span>{msg}</span>
        </div>
    )
}

export default FormError;