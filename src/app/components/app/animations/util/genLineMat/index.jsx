import * as THREE from 'three'
import * as FATLINE from 'three-fatline'

const genLineMat = (dimensions) => new FATLINE.LineMaterial({ 
    color: "rgb(44, 44, 66)",
    linewidth: 6,
    resolution: new THREE.Vector2(
        dimensions.w, dimensions.h
    )
})

export default genLineMat