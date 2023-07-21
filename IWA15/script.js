const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [[a,first],[b,second],[c,third]] = data.lists
 
// const { first = 1 } = data.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}

const result = []

const extractBiggest = () => {
	if ((first.at(-1)??0) > (second.at(-1)??0) && (first.at(-1)??0) > (third.at(-1)??0)) {
        return first.pop()
	} 


	if ((second.at(-1)??0) > (third.at(-1)??0) && second.at(-1) > (first.at(-1)??0)) {
		return second.pop()
	}
	
	return third.pop()
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)