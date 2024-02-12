import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const EnterPassCode = ({ onSuccess }: { onSuccess: () => void }) => {
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, '#']
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        value === '2509' ? Boolean(onSuccess) && onSuccess() : alert('Mã code không chính xác \nhint: ngày đầu tiên chúng ta chính thức yêu nhau...')
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className="m-4 p-4 grid gap-6 flex-wrap grid-cols-1 md:grid-cols-2 border-2 rounded-xl border-black/80">
            <Image priority
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" className="rounded-xl" src={'/cat-couple.jpeg'} width={320} height={320} alt={"cat-couple"} />
            <div className=" md:px-6 gap-6 flex flex-col items-center flex-1">
                <div className="bg-white  px-4 flex w-full py-2 rounded-xl border-2 border-black/80 items-center">
                    <div className="flex-1 font-semibold text-center text-2xl">
                        {value || 'enter passcode'}
                    </div>
                    {value && <button onClick={() => setValue('')} className="flex-shrink-0 w-4 h-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                        </svg>
                    </button>}
                </div>
                <div className="grid grid-cols-3 gap-4 flex-1 w-full">
                    {keys.map((item) => (
                        <button onClick={() => setValue((prev) => prev + item)} className="font-semibold text-xl hover:bg-rose-400 active:bg-rose-500 hover:text-white bg-white flex justify-center items-center border-2 border-black/80 rounded-xl" key={item}>
                            {item}
                        </button>
                    ))}
                </div>
                <button onClick={handleSubmit} className="font-semibold w-full text-xl py-2 px-4 bg-rose-300 active:bg-rose-500 rounded-xl text-white hover:bg-rose-300">Xác nhận</button>
            </div>
        </motion.div>
    )
}

export default EnterPassCode