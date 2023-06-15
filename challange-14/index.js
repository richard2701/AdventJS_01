export default function missingReindeer(ids) {
    // ¡No olvides compartir tu solución en redes!
    if (ids.length === 1 && ids[0] === 0 ) return 1

    const orderArray = ids.sort()

    for(let i = 0; i <= orderArray.length; i++) {
        if (!orderArray.includes(i)) return i
    }
}
console.log(missingReindeer([0]))


