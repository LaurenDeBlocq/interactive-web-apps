let value = 0

const add = function ()  { 
    value = this.a + this.b 
    return this.b = value
}

const multiply = function () { 
    return value = this.b * this.c 
}

 const internal = function () {
	add()
	multiply()
    console.log(value)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()