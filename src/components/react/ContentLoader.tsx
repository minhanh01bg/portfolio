import { useEffect, useState } from "react";

export default function ContentLoader() {
    const [availableSecs, setAvailableSecs] = useState(["skillset", "stack", "projects", "guides"])
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {    
        const handleScroll = () => {
            if (availableSecs.length < 1)
                return;

            const w = window.innerWidth

            if (w < 640)
                return;

            const curScrollY = window.scrollY

            for (const id of availableSecs) {
                const sec = document.getElementById(id)
    
                if (!sec)
                    continue
    
                const rec = sec.getBoundingClientRect()
                const start = rec.top + curScrollY
    
                if (curScrollY >= start - window.innerHeight) {
                    sec.classList.remove("sm:content-hidden")
                    sec.classList.remove("sm:min-h-screen")
    
                    setAvailableSecs(availableSecs.filter(v => v !== id))
                }
            }

            setScrollY(curScrollY)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrollY])
}