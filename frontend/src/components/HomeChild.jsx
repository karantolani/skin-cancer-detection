function HomeChild({children, className}) {
    return (
        <div className={`px-16 lg:px-64 py-6 grow ${className}`}>
            {children}
        </div>
    )
}

export default HomeChild;