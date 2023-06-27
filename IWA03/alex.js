const firstName = "Alex"
const surname = "Naidoo"
export const role = "Head of Marketing"

export const display = firstName + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display

