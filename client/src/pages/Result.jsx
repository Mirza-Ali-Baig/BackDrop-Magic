import {assets} from "../assets/assets.js";

export const Result = () => {
    return (
        <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
            <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
                <div className="flex flex-col sm:grid grid-cols-2 gap-8">
                    <div>
                        <p className="font-semibold text-gray-600 mb-2">Original</p>
                        <img className="rounded-md border" src={assets.image_w_bg} alt=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-600 mb-2">Background Removed</p>
                        <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
                            {/*<img src={assets.image_wo_bg} alt=""/>*/}
                            <div className="absolute right-1/2 bottom-1/2 transform translae-x-1/2 translate-y-1/2">
                                <div className="border-4 border-b-violet-600 rounded-full size-12 border-t-transparent animate-spin"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            {/*    !!!!!!!!!!!!!!!!!!!!!!! Buttons !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                <div className="flex justify-center sm:justify-end items-center flex-wrap mt-10 gap-4">
                    <button className='px-4 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full bg-white hover:scale-105 transition-all duration-75'>Try another Image</button>
                    <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full hover:scale-105 transition-all duration-75' href="">Download Image</a>
                </div>
                
            </div>
        </div>

    )
}