import { useState } from 'react'

const Timer = () => {
    const defaultTime = {
        minute: 2,
        second: 0
    }

    const [time, setTime] = useState(defaultTime)
    const [pomoInterval, setPomoInterval] = useState(null)

    const changeTime = () => {
        setTime(lastUpdatedTime => {
            const { minute, second } = lastUpdatedTime

            if (minute === 0) {
                stopTimer()
            }

            if (second > 0) {
                return ({
                    minute: minute,
                    second: second - 1
                })
            }

            if (second === 0 && minute > 0) {
                return ({
                    minute: minute - 1,
                    second: 59
                })
            }
        })
    }

    const startTimer = () => {
        if (!pomoInterval) {
            setPomoInterval(setInterval(changeTime, 1000))
        }
    }

    const stopTimer = () => {
        clearInterval(pomoInterval)
        setPomoInterval(null)
    }

    const resetTimer = () => {
        setTime(defaultTime)
        stopTimer()
    }

    const { minute, second } = time

    return <div>
        {/* Buttons */}
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>

        {/* Timer */}
        <p>{minute}:{second}</p>

        {/* Text */}
        <p>Pomodoro App</p>
    </div>
}

export default Timer