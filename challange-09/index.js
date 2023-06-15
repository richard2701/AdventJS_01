function groupBy(collection, it) {
    // ¡No olvides compartir tu solución en redes!
    return collection.reduce((acc, el) => {
        const key = typeof it === 'function' ? it(el) : el[it]
        if (!acc[key]) {
            acc[key] = [];
          }
        acc[key].push(el);
        return acc;
    }
    , {})
}
// { 6: [6.1, 6.3], 4: [4.2] }

// { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([6.1, 4.2, 6.3], Math.floor))


