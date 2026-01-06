//1er método de librería
const nums = [1, 2, 3, 4];
const result = _.shuffle(nums);
console.log(result);

//2do método de librería
const elements = [1, [2, [3, [4]], 5]];
const resultado = _.flattenDeep(elements);
console.log(resultado)