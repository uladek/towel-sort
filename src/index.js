
// You should implement your task here.

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
module.exports = function towelSort (matrix) {
  if (matrix === [] || matrix == null){
    return [];
 } else {
 matrix.map(mat => (matrix.indexOf(mat)%2) ? mat.reverse() : mat);
} 
 // for(let mat of matrix) {
//     if  {
//       return mat.reverse();
//     } else {
//      return  mat;
//     }
// })          
return matrix.flat();
}
// towelSort(matrix);
