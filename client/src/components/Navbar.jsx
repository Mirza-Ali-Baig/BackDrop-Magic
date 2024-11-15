import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";
import {useClerk, UserButton, useUser} from "@clerk/clerk-react";

export const Navbar = () => {
    const {openSignIn} = useClerk()
    const {isSignedIn, user} = useUser();
    return (
        <nav className='w-full bg-white/90 backdrop-blur-sm shadow-sm z-50'>
            <div
                className='flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-44 py-4 max-w-[1920px] mx-auto'>
                <div className='transition-transform hover:scale-105'>
                    <Link to={'/'}>
                        <img
                            className='w-28 sm:w-32 md:w-36 lg:w-44 h-auto'
                            src={assets.logo}
                            alt="Main Logo"
                        />
                    </Link>
                </div>
                {
                    isSignedIn
                        ?
                        <div>
                            <UserButton/>
                        </div>
                        :
                        (   <button onClick={() => openSignIn({})}
                                 className='bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5'>
                                <span>Get Started</span>
                                <img
                                    className='w-4 md:w-5 h-auto'
                                    src={assets.arrow_icon}
                                    alt="Arrow Icon"
                                />
                            </button>
                        )
                }

            </div>
        </nav>
    )
}
