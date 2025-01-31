import { useState } from "react"

import "../../styles/Wheel.css"

type Item = {
    icon: string
    title: string
    expLevel: number
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

    return (
        <div
            className={`wheel ${paused ? "paused" : ""}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {items.map((v, k) => {
                const a = (360 / items.length) * k

                return (
                    <div
                        key={`wheel-${k}`}
                        className={`wheel-item ${hovered === k ? "active" : ""}`}
                        style={{
                            transform: `rotate(${a}deg) translate(${radius}px)`
                        }}
                        onMouseEnter={() => setHovered(k)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div
                            className="wheel-content"
                            style={{
                                transform: `rotate(30deg)`
                            }}
                        >
                            <img src={v.icon} alt={v.title} />

                            {hovered === k && (
                                <div>
                                    <h4>{v.title}</h4>
                                    <span>{v.expLevel}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}