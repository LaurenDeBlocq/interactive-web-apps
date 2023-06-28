const year = 2050
const role = 'parent'
let count = 0

if (year == 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	let date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let holidayCount = count + 4

	if (role == 'student') {
	  console.log('June', 'Youth Day')
      holidayCount = holidayCount + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	holidayCount = holidayCount + 3

	if (role == 'parent') {
	  console.log(date, 'Christmas Day')
      holidayCount = holidayCount + 1
  }

	console.log(date, 'Day of Goodwill')
	holidayCount = holidayCount + 1
    count = holidayCount
}

console.log('Your status is:', role)
console.log('The year is:', year)
console.log('The total holidays is:', count)