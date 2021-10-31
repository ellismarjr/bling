function mesclarArrays(array1, array2) {
  return array1.concat(array2);
}

const arraysMesclado1 = mesclarArrays([1, 2, 3], [3, 4, 5]) // [ 1, 2, 3, 4, 5 ]
const arraysMesclado2 = mesclarArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) // [ -11, -10, 5, 22, 41,  42, 333]

console.log(arraysMesclado1);
console.log(arraysMesclado2);