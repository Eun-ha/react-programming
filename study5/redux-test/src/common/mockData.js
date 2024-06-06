const friends = [
  { name: "쯔위", age: 15 },
  { name: "쯔위2", age: 15 },
  { name: "쯔위3", age: 15 },
  { name: "쯔위4", age: 15 },
];

const timelines = [
  { desc: "점심이 맛있었다.", likes: 0 },
  { desc: "점심이 맛있었다.2", likes: 0 },
  { desc: "점심이 맛있었다.3", likes: 0 },
  { desc: "점심이 맛있었다.4", likes: 0 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
