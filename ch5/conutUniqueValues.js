function countUniqueValues(list) {
  const result = list.reduce((acc, cur, i, arr) => {
    console.log(acc, cur, i, arr);
    if (arr.indexOf(cur) === i) acc.push(cur);
    return acc;
  }, []);
  return result.length;
}
