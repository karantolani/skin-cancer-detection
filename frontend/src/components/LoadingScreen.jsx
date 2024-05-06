function LoadingScreen() {
    return (
        <div className="h-screen w-full fixed top-0 right-0 bg-black/50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                 className="icon icon-tabler icons-tabler-outline icon-tabler-loader-2 animate-spin stroke-black w-28 h-28">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3a9 9 0 1 0 9 9"/>
            </svg>
        </div>
    )
}

export default LoadingScreen;