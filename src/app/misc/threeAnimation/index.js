import * as THREE from 'three'
import { startLoop, endLoop } from '../animationLoop'

export const createThreeAnimation = () => {
    const renderer = null
    const scene =  new THREE.Scene()
    const camera = new THREE.OrthographicCamera()
    camera.position.set(
        0, 0, 10
    )
    camera.lookAt(new THREE.Vector3(
        0, 0, 0
    ))
    const canvasDimensions = {
        w: 640, h: 480
    }
    let loopFn = null
    return {
        renderer,
        scene,
        camera, 
        canvasDimensions,
        loopFn
    }
}

const adjustAspectRatio = (threeAni) => {
    const canvasEl = threeAni.renderer.getContext().canvas
    const canvasParent = canvasEl.parentElement
    const newWidth = canvasParent.clientWidth
    const newHeight = canvasParent.clientHeight
    if (
        newWidth !== threeAni.canvasDimensions.w ||
        newHeight !== threeAni.canvasDimensions.h
    ) {
        threeAni.camera.aspect = newWidth / newHeight
        threeAni.renderer.setSize(
            newWidth, newHeight
        )
        threeAni.canvasDimensions.w = newWidth
        threeAni.canvasDimensions.h = newHeight
    }
    threeAni.camera.updateProjectionMatrix()
}

export const initThreeAnimation = (threeAni, canvasEl) => {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvasEl,
        alpha: true,
        antialias: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setClearColor( 
        0x000000, 0
    )
    //
    const newThreeAni = {
        ...threeAni,
        renderer
    }
    //
    adjustAspectRatio(newThreeAni)
    //
    return newThreeAni
}

const renderThreeAnimationFrame = (threeAni) => {
    threeAni.renderer.render(
        threeAni.scene, threeAni.camera
    )
    adjustAspectRatio(threeAni)
}

export const startThreeAnimation = (threeAni) => {
    const onLoop = () => renderThreeAnimationFrame(threeAni)
    const loopKey = threeAni
    threeAni.loopFn = onLoop
    startLoop(onLoop, loopKey)
}

export const stopThreeAnimation = (threeAni) => {
    const loopKey = threeAni
    endLoop(threeAni.loopFn, loopKey)
}