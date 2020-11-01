import React from 'react'
import { endLoop, startLoop } from '../../misc/animationLoop'

const useIsInView = (ref) => {
    if (typeof window === "undefined") return true
    // State
    const [isInView, setInView] = React.useState(false)
    // Effects
    // - Check if current ref is in view.
    React.useEffect(() => {
        if (typeof window === "undefined") return null
        const onLoop = () => {
            if (!ref.current) return 
            const rect = ref.current.getBoundingClientRect()
            const currentlyInView = (
                rect.left < window.innerWidth &&
                rect.right > 0 &&
                rect.top < window.innerHeight &&
                rect.bottom > 0
            )
            if (currentlyInView !== isInView) {
                setInView(currentlyInView)
            }
        }
        startLoop(onLoop, onLoop, 12)
        return () => endLoop(onLoop, onLoop)
    }, [])
    // Return
    return isInView
}

export default useIsInView
