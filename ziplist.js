const letterList = ['a', 'b', 'c'];
const numList = [1, 2, 3];

function zipList(letter, num) {
  const result = [];
  for (let i = 0; i < letter.length; i++) {
    result.push(letter[i], num[i]);
  }
  return result;
}
console.log(zipList(letterList, numList));

const zipListTheSimpleWay = (letter, num) => _.flatten(_.zip(letter, num));

console.log(zipListTheSimpleWay(letterList, numList));
