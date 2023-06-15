/* let s = 1
let count = 1
const maxNumber = 10
function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!
    // S es salto 
    const orderByLess = obstacles.sort()
    if (count <= maxNumber) {
        if (orderByLess.includes(count)) {
            s += 1
            count = 0
            getMinJump(obstacles)
        } else {
            count += s
            getMinJump(obstacles)
        }
    }
    return s
} */

export default function getMinJump(obstacles) {
    const maxNumber = Math.max(...obstacles)
    let count = 1
    let resp = 1
    while (count <= maxNumber) {
        if (obstacles.includes(count)) {
            resp += 1
            count = 0
        } else {
            count += resp
        }
    }

    return resp
}

const obstacles = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles))
