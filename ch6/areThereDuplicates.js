// function areThereDuplicates() {
//   let arr = [];
//   let answer = true;
//   for (let i = 0; i < arguments.length; i++) {
//     if (!arr.includes(arguments[i])) arr.push(arguments[i]);
//     else return (answer = false);
//   }
//   return answer;
// }

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
