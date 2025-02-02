import { createRef, useEffect, useRef, useState } from "react"

import "../../styles/Wheel.css"

type Item = {
    icon: string
    title: string
    expLevel: number
}

function getExpText(level: number): JSX.Element {
    if (level >= 6)
        return <span className="italic text-cyan-300">Very Experienced</span>
    else if (level >= 4)
        return <span className="italic text-cyan-400">Experienced</span>

    return <span className="text-cyan-500">Some Experience</span>
}

export default function StackWheel ({
    items,
    radius = 200
} : {
    items: Item[]
    radius?: number
}) {
    const [hovered, setHovered] = useState<number | null>(null)
    const [paused, setPaused] = useState(false)

    const [winWidth, setWinWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            setWinWidth(width)
        }

        if (winWidth == 0)
            setWinWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [winWidth])

    // If our screen width is too small, return a grid instead.
    if (winWidth > 0 && winWidth < 640) {
        return (
            <div className="grid grid-cols-2 gap-4">
                {items.map((v, k) => {
                    const experience = getExpText(v.expLevel)

                    return (
                        <div
                            key={`stack-${k}`}
                            className="p-4 bg-secondary-1 ring-1 ring-secondary-2 rounded shadow-md shadow-black"
                        >
                            <div className="flex flex-col gap-1 items-center">
                                <img
                                    src={v.icon}
                                    alt={v.title}
                                    className="w-10 h-10"
                                />
                                <h3 className="text-white text-xl font-extrabold">{v.title}</h3>
                                <p className="text-sm">{experience}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div
            className={`wheel ${paused ? "paused" : ""}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {items.map((v, k) => {
                const a = (360 / items.length) * k

                const experience = getExpText(v.expLevel)

                return (
                    <div
                        key={`wheel-${k}`}
                        className={`wheel-item ${hovered === k ? "active" : ""}`}
                        style={{
                            transform: `rotate(${a}deg) translate(${radius}px) rotate(${-a}deg)`
                        }}
                        onMouseEnter={() => setHovered(k)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div
                            className="wheel-content"
                            style={{
                                transform: `rotate(${a}deg) rotate(${-a}deg)`
                            }}
                        >
                            <img src={v.icon} alt={v.title} />

                            {hovered === k && (
                                <div>
                                    <h4>{v.title}</h4>
                                    {experience}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}