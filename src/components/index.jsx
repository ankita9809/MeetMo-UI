import React from "react";
import RocketLaunch from "../assets/1.jpg"

export default function AddDevice() {
    return (
        <div className='grid h-screen w-full'>
            <div className=" bg-transparent flex flex-col justify-center" >
                <h2 className="dark:text-white font-sans text-center text-xl pt-10">Add device</h2>
                {/* <div className="text-center pt-5"> make a circle</div> */}
                <div className="text-center pt-5">
                    <button className ="rounded-full h-24 w-24 bg-transparent 
                       text-white border-dashed border-2">
                        +
                    </button>
                </div>


                <h5 className="dark:text-white  text-center text-sm font-light py-10">Please select a device to add</h5>
                <div className="px-10">
                    <img src={RocketLaunch} alt="RocketLaunch" />
                </div>

                <div className=" bg-transparent flex flex-col justify-center">
                    <form className="max-w-[400px] w-full mx-auto bg-transparent  p-8 px-0 rounded-lg ">
                        <div className="flex flex-col text-white-400 py-2">
                            <label>Device name</label>
                            < input className=" mt-1 p-2 border-2 border-indigo-50 bg-transparent" placeholder="DSLR camera" />
                        </div>
                        <div className="flex flex-col text-white-400 py-2">
                            <label>Device video</label>
                            < input className=" mt-1 p-2 border-2 border-indigo-50 bg-transparent" placeholder="USB-HDMI-Camera" />
                        </div>
                        <div className="flex flex-col text-white-400 py-2">
                            <label>Audio device</label>
                            < input className=" mt-1 p-2 border-2 border-indigo-50 bg-transparent" placeholder="Logitech microphone" />
                        </div>

                        <div className="max-w w-full p-0.2 bg-white lg:w-1 h-1 mt-12">
                        </div>

                        <div className=" flex flex-row justify-center space-x-5 ml-10 mr-10">
                            <button className="w-full my-5 py-2 bg-sky-600 rounded-sm">Add device</button>
                            <button className="rounded-sm w-full my-5 py-2 border-2 border-indigo-50 bg-transparent">Cancel</button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
} 