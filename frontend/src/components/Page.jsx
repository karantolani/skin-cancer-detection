function Page({children, className}) {
    return (
        <div className={`min-h-screen w-full bg-white-b-color ${className}`}>
            {children}
        </div>
    )
}

export default Page;