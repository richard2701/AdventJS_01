function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let arbol = ''
    let espacios = height - 1;
    let asteriscos = 1
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < espacios; j++) {
            arbol += '_'
        }
        for (let k = 0; k < asteriscos; k++) {
            arbol += '*'
        }
        for (let j = 0; j < espacios; j++) {
            arbol += '_'
        }
        espacios--
        asteriscos += 2
        arbol += '\n'
        if (i === (height - 1)) {
            for (let l = 0; l < 2; l++) {
                for (let j = 0; j < (height - 1); j++) {
                    arbol += '_'
                }
                arbol += '#'
                for (let j = 0; j < (height - 1); j++) {
                    arbol += '_'
                }
                if (l == 0) {
                    arbol += '\n'
                }
            }
        }
    }

    return arbol
}



console.log(createXmasTree(5));