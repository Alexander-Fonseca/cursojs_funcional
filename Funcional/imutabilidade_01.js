


function ordenar(array){
   return [...array].sort() // [...array] transformou função impura em função pura
}

const nums = Object.freeze([3, 1, 7, 9, 4, 6]) //freeze protege os numeros no array
nums[0] = 1000 // freeze não deixou eu inserir o valor 1000
const numsOrdenados =ordenar(nums)
console.log(nums)
console.log(numsOrdenados)

const parteNums = nums.slice(2)

console.log(parteNums, nums)