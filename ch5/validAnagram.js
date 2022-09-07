function validAnagram(input1, input2) {
  if (input1.length !== input2.length) return false;

  const lookup = {};

  for (let i = 0; i < input1.length; i++) {
    let letter = input1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < input2.length; i++) {
    let letter = input2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
