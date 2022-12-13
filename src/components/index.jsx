import React from "react";
import RocketLaunch from "../assets/1.jpg"

export default function AddDevice() {
    return (
        <div className='grid h-screen w-full'>
            <div className=" bg-transparent flex flex-col justify-center" >
                <h2 className="dark:text-white font-sans text-center text-xl pt-10">Add device</h2>
                {/* <div className="text-center pt-5"> make a circle</div> */}
                <h5 className="dark:text-white  text-center text-sm font-light py-10">Please select a devices to add</h5>
                <div className="px-10">
                <img src={RocketLaunch} alt="RocketLaunch" />
                </div>

                <div className=" bg-transparent flex flex-col justify-center">
                    <form className="max-w-[400px] w-full mx-auto bg-transparent  p-8 px-0 rounded-lg ">
                        <div className="flex flex-col text-white-400 py-2">
                            <label>Device name</label>
                            < input className="bg-gray-800 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" placeholder="DSLR camera" />
                        </div>
                        <div className="flex flex-col text-white-400 py-2">
                            <label>Device video</label>
                            < input className="bg-gray-800 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" placeholder="USB-HDMI-Camera" />
                        </div>
                        <div className="flex flex-col text-white-400 py-2">
                            <label>Audio device</label>
                            < input className="bg-gray-800 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" placeholder="Logitech microphone" />
                        </div>
                        {/* <div> draw a Line</div> */}
                        <div className=" flex flex-row justify-center space-x-5 ml-10 mr-10">
                        <button className="rounded-lg w-full my-5 py-2 bg-sky-600">Add device</button>
                        <button className="rounded-lg w-full my-5 py-2 bg-sky-600">Cancel</button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
} 