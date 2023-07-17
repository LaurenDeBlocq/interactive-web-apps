
const root_1 = document.querySelector('[data-key="order1"]')
const biscuits_1= root_1.querySelector('.biscuits .count')
const donuts_1= root_1.querySelector('.donuts .count')
const pancakes_1= root_1.querySelector('.pancakes .count')
const status_1= root_1.querySelector('.status dd')

biscuits_1.innerHTML = root_1.dataset.biscuits
donuts_1.innerHTML = root_1.dataset.donuts
pancakes_1.innerHTML = root_1.dataset.pancakes
status_1.innerHTML = root_1.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const root_2 = document.querySelector('[data-key="order2"]')
const biscuits_2= root_2.querySelector('.biscuits .count')
const donuts_2= root_2.querySelector('.donuts .count')
const pancakes_2= root_2.querySelector('.pancakes .count')
const status_2= root_2.querySelector('.status dd')

biscuits_2.innerHTML = root_2.dataset.biscuits
donuts_2.innerHTML = root_2.dataset.donuts
pancakes_2.innerHTML = root_2.dataset.pancakes
status_2.innerHTML = root_2.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const root_3 = document.querySelector('[data-key="order3"]')
const biscuits_3= root_3.querySelector('.biscuits .count')
const donuts_3= root_3.querySelector('.donuts .count')
const pancakes_3= root_3.querySelector('.pancakes .count')
const status_3= root_3.querySelector('.status dd')

biscuits_3.innerHTML = root_3.dataset.biscuits
donuts_3.innerHTML = root_3.dataset.donuts
pancakes_3.innerHTML = root_3.dataset.pancakes
status_3.innerHTML = root_3.dataset.delivered === 'true' ? 'Delivered' : 'Pending'