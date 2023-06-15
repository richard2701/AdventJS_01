function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    const card = 250
    const discount = 0.75;
    let resp = []
    if (times === 0) {
        return false
    } else {
        for (let i = 1; i <= times; i++) {
            resp = [...resp, (12 * getFide(i, discount))]
        }
        const sumWithInitial = resp.reduce((accumulator, currentValue) => accumulator + currentValue);
        const init = 12 * times
        return card + sumWithInitial > init ? false : true;
    }
}
function getFide(ti, discount) {
    let result = 1;
    for (let i = 1; i <= ti; i++) {
        result *= discount;
    }
    console.log(result)
    return result;
}
console.log(shouldBuyFidelity(100))



