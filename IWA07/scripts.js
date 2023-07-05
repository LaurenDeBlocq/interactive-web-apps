// --- Challenge 1: ---

const value = "3"
console.log(parseInt(value) + 4 + parseInt(value))

const valueV2 = 3
console.log(valueV2 + 4 + valueV2)

/* I did 2 methods of solving the issue. 

Originally the value was saved as a string, so you either need to: 
Solution 1: put it through parseInt to turn it into a number 
or
Solution 2: you need to save it as a number to begin with 

This is because if you try to add numbers and strings, it just creates a string overall.
*/


// --- Challenge 2: ---
const nickname= "Timmy";
const firstName = "Timothy";

console.log("Good Morning,", nickname || firstName, "!")

/* If the nickname || firstName bit is inside the quotation marks, js won't compute it. 
It will just show it all as a string instead. */


// --- Challenge 3: ---
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const owed = ((parseFloat(leoBalance) + parseFloat(sarahBalance)) * -1).toFixed(2)


const leo = leoName + " " + leoSurname.slice(0, -5) + " (Owed " + "R " + (parseFloat(leoBalance)*-1).toFixed(2) + ")"
const sarah = sarahName.slice(0, -4) + " " + sarahSurname + " (Owed " + "R" + (parseFloat(sarahBalance)*-1).toFixed(2) + ")"
const total = "Total amount owed: "
const result = leo + "\n" + sarah +"\n\n"+ divider +"\n  "+ total + owed +"  \n"+ divider

console.log(result)

/* variables mustn't  be in {} for this instance. We want the value of them.
 - parseInt wouldn't work with a "R" inside it.
 - Lots of escape sequences needed to be added in.
 - difference between parseInt and parseFloat is pInt returns the integer (i.e without decimals) 
   while pFloat returns the whole number (i.e. incl decimals).
 - spellcheck and debugging of variable names (like leo-related values being in the sarah-related lines)
*/