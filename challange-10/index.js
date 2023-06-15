function getCoins(change) {
    const coins = [1, 2, 5, 10, 20, 50]; // Valores de las monedas disponibles
    const coinCount = [0, 0, 0, 0, 0, 0]; // Inicializamos un array con el contador de monedas a cero
    let remainingAmount = change;
    // Recorremos las monedas de mayor valor a menor
    for (let i = coins.length - 1; i >= 0; i--) {
        // Si el valor de la moneda actual es menor o igual al amount restante
        while (coins[i] <= remainingAmount) {
            remainingAmount -= coins[i]; // Restamos el valor de la moneda actual al amount restante
            coinCount[i]++; // Incrementamos el contador de la moneda actual
        }
        console.log(coins[i], remainingAmount)
    }

    return coinCount;
}




/* const result = [0, 0, 0, 0, 0, 0]
let coinsRest = [1, 2, 5, 10, 20, 50]
function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    const coins = [1, 2, 5, 10, 20, 50]
    let max = Math.max(...coinsRest)
    let rest = change
    const saveRest = []

    
    if ((rest / max) === 2) {
        rest = rest - max
        result[getIndexCoins(coins, max)] = result[getIndexCoins(coins, max)] + 1
        if (rest <= max) {
            result[getIndexCoins(coins, max)] = result[getIndexCoins(coins, max)] + 1
            rest = rest - max
        }
    } else {
        if (rest > max ) {
            rest = rest - max
            result[getIndexCoins(coins, max)] = result[getIndexCoins(coins, max)] + 1
            getCoins(rest)
            console.log(rest)
        } else if ((rest - max) === 0 ) {
            rest = rest - max
            result[getIndexCoins(coins, max)] = result[getIndexCoins(coins, max)] + 1
            getCoins(rest)
        } else if (rest === max ) {
            result[getIndexCoins(coins, max)] = result[getIndexCoins(coins, max)] + 1
        } else  {
            coinsRest.reverse().forEach(item =>  {
                if (rest >= item) {
                    rest = rest - item
                    result[getIndexCoins(coins, item)] = result[getIndexCoins(coins, item)] + 1
                }
            })
            
        }
        
    }

    return result
}

function getIndexCoins(coins, index) {
    const indexCo = coins.indexOf(index)
    return indexCo
}
 */
console.log(getCoins(138))



