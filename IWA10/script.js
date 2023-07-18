const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//console.log(holidays.futureId.name || 'ID {futureId} not created yet')

let copied = holidays[6]
copied.name = 'X-mas Day'
let correctDate = copied.date
correctDate = new Date(`25 December ${currentYear}`)

const isEarlier = correctDate < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) {
    copied.date = correctDate
    console.log('ID change:', copied.id)
    console.log('Name change:', copied.name)
    console.log('Date change:', copied.date)
}



const firstHolidayTimestamp = Math.min(
    holidays[0].getDate(),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)

const firstDay = holidays[firstHolidayTimestamp].date.getDate()
const firstMonth = firstHolidayTimestamp.getMonth()
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays
console.log(randomHoliday[Math.random])