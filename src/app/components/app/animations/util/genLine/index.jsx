import * as FATLINE from 'three-fatline'

const genLine = (geometry, material) => 
    new FATLINE.Line2(geometry, material)

export default genLine