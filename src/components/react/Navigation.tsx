import React, { useEffect, useRef, useState } from "react"

export default function Navigation() {
    const [hidden, setHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    const [curSec, setCurSec] = useState<string | null>(null)
    const sectionIds = ["welcome", "skillset", "stack", "projects", "guides"]

    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const curScrollY = window.scrollY
            const ele = menuRef.current

            // Check if we should hide menu or not.
            if (ele && curScrollY > ele.offsetHeight && curScrollY > lastScrollY)
                setHidden(true)
            else
                setHidden(false)

            // Check if we're inside specific sections.
            for (const id of sectionIds) {
                const sec = document.getElementById(id)
    
                if (!sec)
                    continue
    
                const rec = sec.getBoundingClientRect()
                const start = rec.top + curScrollY
                const end = start + rec.height

                if (curScrollY >= start - 100 && curScrollY < end - 100) {
                    setCurSec(id)

                    break
                }
            }

            setLastScrollY(curScrollY)

        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollY])

    return (
        <div ref={menuRef} className={`fixed z-50 w-full animate-up-down-fast ${hidden ? "hidden" : ""}`}>
            <div className="flex justify-center">
                <div className="rounded py-1 px-2 xs:py-4 xs:px-8 border bg-secondary-1 border-secondary-2 mt-2">
                    <div className="flex gap-2 xs:gap-6">
                        <Item
                            title="Skillset"
                            sec="skillset"
                            curSec={curSec}
                        />
                        <Item
                            title="Stack"
                            sec="stack"
                            curSec={curSec}
                        />
                        <Item
                            title="Projects"
                            sec="projects"
                            curSec={curSec}
                        />
                        <Item
                            title="Guides"
                            sec="guides"
                            curSec={curSec}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Item({
    title,
    sec,
    curSec
} : {
    title: string
    sec: string
    curSec: string | null
}) {
    const gotoSection = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault()

        const sec = document.getElementById(id)

        if (sec) {
            window.scrollTo({
                top: sec.offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (
        <a
            href="#"
            onClick={gotoSection(sec)}
            className={`text-sm xs:text-base ${curSec === sec ? "font-bold text-white duration-150" : ""}`}
        >{title}</a>
    )
}