function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const day = date.getDate(date)
    const mountDay = date.getMonth(date)
    const yearDay = date.getFullYear(date)
    const christmas = new Date('Dec 25, 2021')
    const month = christmas.getMonth()
    const dayChris = christmas.getDate()
    const yearChris = christmas.getFullYear()
    console.log( yearDay - yearChris)

    if (yearDay >  yearChris) {
        return (dayChris - day) - getDaysByMonth(month)
    } else {
        return dayChris - day
    }

  }
  
  
const date1 = new Date('Dec 24, 2021 00:00:01')
function getDaysByMonth(month) {
    let dayByMo
    if (
        month === 0
        ||
        month === 2
        ||
        month === 4
        ||
        month === 6
        ||
        month === 7
        ||
        month === 9
        ||
        month === 11
    ) {
        return dayByMo = 31
    } else if (month === 1) {
        return dayByMo = 28
    } else {
        return dayByMo = 30
    }
}
daysToXmas(date1)
console.log(daysToXmas(date1), 'here')
