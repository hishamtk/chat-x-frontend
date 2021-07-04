import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="flex bg-blue-200 flex-col justify-center space-y-8 items-center h-screen w-screen">
                <h1 className="text-4xl font-extrabold">404</h1>
                <p className="text-2xl font-bold">Page you are looking is not found</p>
                <Link to="/">go to Home screen</Link>
            </div>
        </>
    )
}

export default Error