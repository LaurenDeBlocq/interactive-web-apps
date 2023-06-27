const firstName = "Johannes"
const surname = "Potgieter"
export const role = "Intern"

export const display = firstName + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display