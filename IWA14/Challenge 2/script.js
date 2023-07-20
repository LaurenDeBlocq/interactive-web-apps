let value = 0

const add = function (a, b) { 
    value = a + b 
	b = value
}

const multiply = function (a, b) { 
    return value = a * b 
}

const internal = function () {
	add(this.internal.a, this.internal.b)
	this.internal.b = value
	multiply(this.internal.b, this.internal.c)
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