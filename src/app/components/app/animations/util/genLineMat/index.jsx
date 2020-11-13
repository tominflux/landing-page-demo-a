import * as THREE from 'three'
import * as FATLINE from 'three-fatline'

const genLineMat = (dimensions, width=6) => new FATLINE.LineMaterial({ 
    color: "rgb(44, 44, 66)",
    linewidth: width,
    resolution: new THREE.Vector2(
        dimensions.w, dimensions.h
    )
})

export default genLineMat