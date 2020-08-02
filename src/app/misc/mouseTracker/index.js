
let mousePosition = null
let mouseMoveHandle = null
const startMouseTracking = () => {
    mouseMoveHandle = (e) => {
        mousePosition = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", mouseMoveHandle)
}
export const getMousePosition = () => {
    if (mouseMoveHandle === null)
        startMouseTracking()
    return { ...mousePosition }
}
