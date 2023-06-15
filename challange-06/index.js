/*  function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    let sume = []

    for (let i = 0; i < numbers.length; i ++) {
        for (let j = 1; j < numbers.length; j++) {
            console.log(i === j);
            if (i !== j ) {
                if ((numbers[i] + numbers[j]) === result) {
                    return  sume = [numbers[i], numbers[j]]
                }
            }
        }
    }
    if (sume && Object.entries(sume).length > 0 ) {
        return sume
    } else {
        return null
    }
}
 */
function sumPairs(numbers, result) {
    let numSet = new Set();

    for (let i = 0; i < numbers.length; i++) {
      const complement = result - numbers[i];
        
      if (numSet.has(complement)) {
        return [complement, numbers[i]];
      }
  
      numSet.add(numbers[i]);
    }
  
    return null;
}

sumPairs([-3, -2, 7, -5], 10)



