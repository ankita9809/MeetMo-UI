import React from "react";
import RocketLaunch from "../assets/1.jpg"

export default function AddDevice() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div>
                <h2>Add device</h2>
                <div> make a circle</div>
                <h5>Please select a devices to add</h5>
                <img src={RocketLaunch} alt="RocketLaunch" />


                <div>
                    <form action="">
                        <div>
                            <label>Device name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Device video</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Audio device</label>
                            <input type="text" />
                        </div>

                    </form>
                        <div> draw a Line</div>
                    <div>
                        <button>Add device</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 