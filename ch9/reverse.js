function reverse(str) {
  if (str.length < 1) return '';
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse('awesome'));
console.log(reverse('school'));
