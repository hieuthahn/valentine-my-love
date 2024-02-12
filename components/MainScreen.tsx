'use client'

import { useEffect, useRef, useState } from "react"
import CountingTime from "./CountingTime"
import EndScreen from "./EndScreen"
import EnterPassCode from "./EnterPassCode"
import HeartClick from "./HeartClick"
import OurJourney from "./OurJourney"

type Screen = 'enter-pass-code' | 'counting-time' | 'our-journey' | 'heart-click' | 'end'

const MainScreen = () => {
    const [screen, setScreen] = useState<Screen>('enter-pass-code')
    const refAudio = useRef<any>(null)

    useEffect(() => {
        const playAudio = () => refAudio?.current?.paused && refAudio?.current?.play()
        const pauseAudio = () => !refAudio?.current?.paused && refAudio?.current?.pause()
        window.addEventListener('click', playAudio)
        return () => {
            window.removeEventListener('click', playAudio)
        }
    }, [])

    const renderScreen = {
        'enter-pass-code': <EnterPassCode onSuccess={() => {
            setScreen('counting-time')
        }} />,
        'counting-time': <CountingTime onChangeScreen={() => setScreen('our-journey')} />,
        'our-journey': <OurJourney onChangeScreen={() => setScreen('heart-click')} />,
        'heart-click': <HeartClick onChangeScreen={() => setScreen('end')} />,
        'end': <EndScreen />,
    }
    return (
        <div className="transition-all duration-500">
            {renderScreen[screen]}
            <audio ref={refAudio} id="player" autoPlay loop>
                <source src="/those-eyes-new-west.mp3" type="audio/mp3" />
            </audio>
        </div>
    )
}

export default MainScreen