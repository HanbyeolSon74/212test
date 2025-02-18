const items = [
  {
    id: 1,
    name: "휴지",
    price: 45000,
  },
  {
    id: 2,
    name: "주방기구",
    price: 66000,
  },
  {
    id: 3,
    name: "세척기",
    price: 665000,
  },
  {
    id: 4,
    name: "자전거",
    price: 124000,
  },
  {
    id: 5,
    name: "세탁기",
    price: 66000,
  },
];

// 전체 리스트 가져오기
const getAllItems = () => {
  return items;
};

// 특정 아이디 가져오기
const getItemById = (id) => {
  return items.find((item) => item.id === id) || null;
};

// 가장 비싼 물건 가져오기
const getMostExpensiveItem = () => {
  return items.reduce(
    (maxItem, item) => (item.price > maxItem.price ? item : maxItem),
    items[0]
  );
};

// 함수들을 내보내기
module.exports = {
  getAllItems,
  getItemById,
  getMostExpensiveItem,
};
