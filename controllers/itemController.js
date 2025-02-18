const itemModel = require("../models/items"); // 모델 파일 불러오기

const getItems = (req, res) => {
  const items = itemModel.getAllItems(); // 모델의 getAllItems 함수 호출
  res.render("items/index", { items }); // items를 ejs로 렌더링
};

const getItem = (req, res) => {
  const item = itemModel.getItemById(parseInt(req.params.id)); // ID를 숫자로 변환하여 getItemById 호출
  if (item) {
    res.render("items/show", { item }); // 해당 아이템을 ejs로 렌더링
  } else {
    res.status(404).send("해당하는 아이템이 없습니다."); // 아이템이 없으면 404 에러 처리
  }
};

const getMostExpensiveItem = (req, res) => {
  const item = itemModel.getMostExpensiveItem(); // 가장 비싼 아이템 가져오기
  if (item) {
    res.render("items/expensive", { item }); // 가장 비싼 아이템을 expensive.ejs로 전달
  } else {
    res.status(404).send("아이템을 찾을 수 없습니다.");
  }
};

module.exports = { getItems, getItem, getMostExpensiveItem };
