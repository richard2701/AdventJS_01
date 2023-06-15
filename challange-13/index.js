/* function wrapGifts(gifts) {
    const giftsWrapped = []
    const wrappedLength = gifts[0].length + 2;
    gifts.forEach((gift, index) => {
        if (index === 0) {
            giftsWrapped.push('*'.repeat(wrappedLength))
        }
        giftsWrapped.push(`*${gift}*`)
        if ((index + 1) === gifts.length) {
            giftsWrapped.push('*'.repeat(wrappedLength))
        }
    })

    return giftsWrapped

} */
export default function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    const giftsWrapper = []
    const wrappedLength = gifts[0].length + 2
    const wrepperBorder = '*'.repeat(wrappedLength)
    giftsWrapper.push(wrepperBorder)
    for (const gift of gifts) {
        giftsWrapper.push(`*${gift}*`)
    }
    giftsWrapper.push(wrepperBorder)
  
    return giftsWrapper
  }

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))

