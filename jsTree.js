const tree = [
  { id: 1, data: 10, parent: null },
  { id: 2, data: 5, parent: 1 },
  { id: 3, data: 7, parent: 2 },
  { id: 4, data: 8, parent: 2 },
];

const mappingIdWise = tree.reduce((previousValue, currentValue, index) => {
  previousValue[currentValue.id] = index;
  return previousValue;
});

console.log(mappingIdWise);