import { motion } from "framer-motion"
import Image from "next/image"

const OurJourney = ({ onChangeScreen }: { onChangeScreen: () => void }) => {
    const images = [
        '/journey-1.jpeg',
        '/journey-2.jpeg',
        '/journey-3.jpeg',
        '/journey-4.jpeg',
        '/video.mp4',
        '/journey-5.jpeg',
        '/journey-6.jpeg',
        '/journey-7.jpeg',
        '/journey-8.jpeg',
    ]

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className="w-[90vw] md:w-[70vw] m-4" >
            <div className="border-2 border-black/70 rounded-lg bg-white">
                <div className="text-center text-xl mt-2 mb-6 font-semibold">our journey</div>
                <div className="flex flex-col items-center">
                    <Image src={'/avatar.jpeg'} alt='avatar' style={{ objectFit: 'cover', aspectRatio: 1 }} width={150} height={150} className="text-center border-4 border-offset-2 border-slate-100 rounded-full overflow-hidden" />
                    <div className="mt-2 mb-1 font-semibold">@hhjniee_</div>
                </div>
                <div className="w-full border-t-2 border-b-2 divide-x-2 divide-black/70 py-1 border-t-black/70 border-b-black/70 grid grid-cols-3">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-semibold">9</div>
                        <div>Posts</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-semibold">2509</div>
                        <div>Following</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-semibold">1</div>
                        <div>Followers</div>
                    </div>
                </div>
                <div className="p-4 gap-3 grid grid-cols-3">
                    {images.map((image, index) => {
                        return index === 4 ?
                            <video autoPlay autoFocus loop key={index} width={250} height={250} style={{
                                objectFit: 'cover',
                                width: '100%'
                            }} className="rounded-lg" muted controls={false}>
                                <source src={image} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            : (
                                <Image
                                    priority
                                    placeholder="blur"
                                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                    key={index}
                                    alt="image"
                                    className="rounded-lg"
                                    src={image}
                                    style={{
                                        width: '100%',
                                        height: [3, 5].includes(index) ? '100%' : 'auto',
                                        objectFit: 'cover',
                                        aspectRatio: 1
                                    }}
                                    width={250}
                                    height={250}
                                />
                            )
                    }
                    )}
                </div>
            </div>
            <div className="w-full text-center my-4">

                <button onClick={onChangeScreen} className="group p-1 border-2 border-rose-400 rounded-full bg-white hover:bg-rose-400 active:bg-rose-500 transition-colors duration-300">
                    <svg width={'36'} height={'36'} className="group-hover:fill-white transition-colors duration-300" viewBox="-10.92 -10.92 112.84 112.84" id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fb7185" stroke="#fb7185" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" strokeWidth="0.00091"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.728"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path d="M5.1,72c0.9,0.5,2,0.7,3.2,0.5c10.2-1.7,20.3-3.5,30.4-5.3c0.7,5.2,1.3,10.4,1.9,15.6c0.4,3.6,5.1,6.7,8,3.3 C61,71.9,74.9,59.3,88.8,46.5c2.4-2.3,1.7-6.4-1-8.1C72.7,29.7,58.6,19.7,47,6.6C44,3.3,38.9,6.1,38.7,10c-0.3,6.2-0.7,12.3-1,18.5 c-5.2-0.4-10.5-0.7-15.7-1.1c-6-0.4-13-1.9-18.7,0.3c-1.6,0.6-2.1,2.8-0.5,3.8c5.3,3.2,12.4,3,18.4,3.7c6.9,0.8,13.8,1.5,20.7,2.3 c2.5,0.3,4.1-2.2,4.4-4.3c0.4-4,0.8-8,1.2-12.1c8.8,8.6,18.8,16,29.3,22.6c-9.7,8.9-19.2,18.2-28,28c-0.4-3.3-0.8-6.6-1.1-10 c-0.4-3.3-2.7-5.1-6-4.6c-10.2,1.7-20.4,3.4-30.6,5.1c-0.6-5.6-2-11.1-2.8-16.7c-0.6-4.5-7-2.8-7.4,1c-0.8,7.1,0.2,13.9,0.8,21 C1.7,70,3.3,71.5,5.1,72z"></path> </g> </g></svg>
                </button>
            </div>
        </motion.div>
    )
}

export default OurJourney