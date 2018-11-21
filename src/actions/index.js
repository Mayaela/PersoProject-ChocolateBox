export const addChocolate = (name) => ({
  type: 'ADD_CHOCOLATE',
  name,
});

export const eatChocolates = () => ({
  type: 'EAT_EVERYTHING',
});

export const eatOne = (index) => ({
  type: 'EAT_ONE',
  index
});