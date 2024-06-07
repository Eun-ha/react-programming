const friends = [
  { name: "쯔위", age: 13 },
  { name: "수지", age: 15 },
  { name: "나디아", age: 20 },
  { name: "아만다", age: 23 },
  { name: "케빈", age: 25 },
  { name: "롤", age: 28 },
  { name: "윤아", age: 30 },
  { name: "티파니", age: 35 },
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
