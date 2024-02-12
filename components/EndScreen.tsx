import { motion } from "framer-motion"
import BlurImage from "./BlurImage"

const EndScreen = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <BlurImage priority
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" src={'/bear-kisses.gif'} width={320} height={320} alt="gif" />
            <div className="text-center my-3 font-bold text-2xl">Yayyy!!!</div>
        </motion.div>
    )
}

export default EndScreen