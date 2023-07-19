const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

/* -----    VARIABLE CREATION/SET UP    ----- */

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

const book1 = document.querySelector('#book1')
const book1_status = document.querySelector('#book1 span')
const book1_reserve = document.querySelector('#book1 .reserve')
const book1_checkOut = document.querySelector('#book1 .checkout')
const book1_checkIn = document.querySelector('#book1 .checkin')

const book2 = document.querySelector('#book2')
const book2_status = document.querySelector('#book2 span')
const book2_reserve = document.querySelector('#book2 .reserve')
const book2_checkOut = document.querySelector('#book2 .checkout')
const book2_checkIn = document.querySelector('#book2 .checkin')

const book3 = document.querySelector('#book3')
const book3_status = document.querySelector('#book3 span')
const book3_reserve = document.querySelector('#book3 .reserve')
const book3_checkOut = document.querySelector('#book3 .checkout')
const book3_checkIn = document.querySelector('#book3 .checkin')


/* -----     ACTUAL CHALLENGE   ----- */

const changeStatusColor = (element) => {
    element.style.color = STATUS_MAP[element.innerHTML].color
}

document.querySelectorAll('span.status').forEach(changeStatusColor)
book1_status.style.color = STATUS_MAP[book1_status.innerHTML].color

document.querySelectorAll('body div').forEach(book=>{
    const status = book.querySelector('span.status').innerHTML
    book.querySelector('.reserve').disabled = !STATUS_MAP[status].canReserve
    book.querySelector('.checkout').disabled = !STATUS_MAP[status].canCheckout
    book.querySelector('.checkin').disabled = !STATUS_MAP[status].canCheckIn

})

document.querySelectorAll('button').forEach(element => {
    element.style.color = 'black'
})

// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'