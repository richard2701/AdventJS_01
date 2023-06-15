function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    for (let key in store) {
        if (typeof store[key] === 'object') {
            if (contains(store[key], product)) {
                return true
            }
        } else if (store[key] === product) {
            return true
        }
    }
    return false
}
/* const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
} */
const almacen = {
    "estanteria1": {
        "cajon1": {
            "producto1": "coca-cola",
            "producto2": "fanta",
            "producto3": "sprite"
        }
    },
    "estanteria2": {
        "cajon1": "vacio",
        "cajon2": {
            "producto1": "pantalones",
            "producto2": "camiseta"
        }
    }
}

const otroAlmacen = {
    'baul': {
        'cajon1': 'vacio',
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}
const almacen2 = {
    "a": {
        "b": {
            "c": {
                "d": {
                    "e": "f"
                }
            }
        }
    }
}

contains(almacen2, 'f')

console.log()



