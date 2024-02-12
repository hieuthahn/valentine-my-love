import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
dayjs.extend(relativeTime)

const CountingTime = ({ onChangeScreen }: { onChangeScreen: () => void }) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        setDays(dayjs().diff(dayjs('2023-09-25'), 'day'))
        setHours(dayjs().get('hour'))
        setMinutes(dayjs().get('minute'))
        setSeconds(dayjs().get('second'))

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0)
            setDays(dayjs().diff(dayjs('2023-09-25'), 'day'))
            setHours(dayjs().get('hour'))
            setMinutes(dayjs().get('minute'))
        }
    }, [seconds])

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className="m-4" >
            <div className="flex gap-4 items-center">
                <Image priority
                    placeholder="blur"
                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" src={'/avatar.jpeg'} alt='avatar' style={{ objectFit: 'cover', aspectRatio: 1 }} width={80} height={80} className="ring-2 ring-offset-2 ring-rose-400 rounded-full overflow-hidden" />
                <div className="md:text-lg bg-white px-6 py-1 border-2 border-black/80 rounded-full flex items-center gap-2 font-semibold">
                    How long we&apos;ve been together?
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                </div>
            </div>
            <div className="bg-white px-4 py-2 rounded-full flex items-center text-lg mt-14 gap-4 justify-center text-rose-400">
                <div className="flex flex-col gap-3 font-semibold items-center justify-center w-12">
                    <div className="text-2xl">{days}</div>
                </div>
                <div>:</div>
                <div className="flex flex-col gap-3 font-semibold items-center justify-center w-12">
                    <div className="text-5xl">{hours}</div>
                </div>
                <div>:</div>
                <div className="flex flex-col gap-3 font-semibold items-center justify-center w-12">
                    <div className="text-5xl">{minutes < 10 ? `0${minutes}` : minutes}</div>
                </div>
                <div>:</div>
                <div className="flex flex-col gap-3 font-semibold items-center justify-center w-12">
                    <div className="text-5xl">{seconds < 10 ? `0${seconds}` : seconds}</div>
                </div>
            </div>
            <div className="flex gap-[52px] text-rose-400 font-semibold mt-4 justify-center items-center">
                <div>Days</div>
                <div>Hrs</div>
                <div>Mins</div>
                <div>Secs</div>
            </div>
            <div className="flex flex-col justify-center items-center mt-12 gap-8">
                <button onClick={onChangeScreen} className="text-center w-fit bg-rose-400 hover:bg-rose-300 active:bg-rose-500 px-6 py-3 text-white font-semibold rounded-lg">our journey</button>
                <div className="flex gap-6 animate-bounce">
                    <svg width={'48'} height={'48'} fill="#FB7185" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FB7185"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>
                    <svg width={'48'} height={'48'} fill="#FB7185" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FB7185"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>
                    <svg width={'48'} height={'48'} fill="#FB7185" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FB7185"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>
                </div>
            </div>
        </motion.div>
    )
}

export default CountingTime