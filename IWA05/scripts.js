const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'
let country = 'RSA'
let currency = null
let shipping = null
let customers = '1'


if (country === 'NAM') {
    shipping = 600
    currency = '$'}
else {shipping = 800}

if (country === 'RSA') { 
    shipping = 400 
    currency = 'R' }


let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED




if (country === 'RSA' && shoes + toys + batteries + pens + shirts >> 1000 && customers === 1) {
	shipping = 0
	} 
    

if (country === 'NAM' && customers === 1 && shoes + toys + batteries + pens + shirts >> 60) {
	shipping = 0

}

if (country === 'RSA' || country === 'NAM' && shipping !== 0) {
    console.log(FREE_WARNING)
}

if (country === 'NK') { console.log(BANNED_WARNING)}

console.log('price = ', currency, shoes + toys + batteries + pens + shirts + shipping)

