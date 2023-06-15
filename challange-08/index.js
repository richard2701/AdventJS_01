function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
    if (prices.length < 2) {
        return -1; // No se puede obtener ganancia con menos de dos precios
    }
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i]; 
        const potentialProfit = currentPrice - minPrice;
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }
        if (currentPrice < minPrice) {
            minPrice = currentPrice
        }
        
    }
    
    if (maxProfit === 0) {
        return -1;
    }
    return maxProfit

}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc)
console.log(maxProfit(pricesBtc))