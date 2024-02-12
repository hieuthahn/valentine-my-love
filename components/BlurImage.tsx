import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

const BlurImage = (props: ImageProps) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <Image
            {...props}
            alt={props?.alt || 'image'}
            className={`transition-all duration-300 ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} ${props.className}`}
            onLoadingComplete={() => setIsLoading(false)}
        />
    )
}

export default BlurImage