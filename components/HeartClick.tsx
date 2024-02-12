import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { useState } from "react";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] })

const HeartClick = ({ onChangeScreen }: { onChangeScreen: () => void }) => {
    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Are you positive???",
        "Pookie please",
        "Just think about it",
        "If you say no, I'll be very sad",
        "I'll very very sad",
        "Think again",
        "Last chance!",
        "Surely not",
        "Give it another thought!",
        "This could be a mistake!",
        "Have a heart!",
        "Don't do this to me",
        "I'm gonna cry...",
        "You're breaking my heart :<"

    ]
    const [open, setOpen] = useState(false)
    const [noTextCount, setNoTextCount] = useState(0)

    const onYesClick = () => {
        setOpen(false)
        setNoTextCount(0)
        onChangeScreen && onChangeScreen()
    }

    const onNoClick = () => {
        setNoTextCount(noTextCount + 1)
    }

    return (
        <>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className={`bgoverlay flex justify-center items-center ${open && 'open'}`}>
                    <div className="relative">
                        <svg className="animate-open" width={'320'} height={'320'} fill="#ff4081" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff4081"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>
                        <svg className="absolute top-0 left-0 animate-explode " width={'320'} height={'320'} fill="#ff4081" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff4081"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>
                        <svg className="absolute top-0 left-0 animate-explodeSmall-3" width={'320'} height={'320'} fill="#ff4081" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff4081"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>
                        <svg className="absolute top-0 left-0 animate-explodeSmall-2" width={'320'} height={'320'} fill="#ff4081" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff4081"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>

                        <span onClick={() => setOpen(true)} className={'min-w-[195px] title font-bold text-5xl text-white cursor-pointer absolute -mt-6 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-nowrap'} style={{
                            textShadow: '2px 4px 3px rgba(0, 0, 0, 0.3)',
                            ...pacifico.style
                        }}>Click Me</span>
                    </div>
                    <div className="endtext text-white text-center" style={{
                        ...pacifico.style

                    }}>
                        <h1>I love you baby</h1>
                        <h2 className="mt-8">Be my valentine?</h2>
                        <div className={`flex flex-col gap-4 justify-center my-4`}>
                            <h3 onClick={onYesClick} className="cursor-pointer active:text-red-500">Yes</h3>
                            <h3 onClick={onNoClick} className={`cursor-pointer active:text-red-500 ${!phrases[noTextCount] && 'opacity-0'}`}>{phrases[noTextCount]}</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>

    )
}

export default HeartClick