const careerModel = require("../models/careerModel");

// 전체 배우 리스트
const getAllCareers = (req, res) => {
  const careers = careerModel.getAllCareers();
  res.render("careers/index", { careers });
};

// 남자 배우 리스트
const getMaleActors = (req, res) => {
  const maleActors = careerModel.getMaleActors();
  res.render("careers/male", { maleActors });
};

// 여자 배우 리스트
const getFemaleActors = (req, res) => {
  const femaleActors = careerModel.getFemaleActors();
  res.render("careers/female", { femaleActors });
};

// sameCareers 데이터 렌더링
const showSameCareers = (req, res) => {
  const sameCareers = careerModel.getSameCareers(); // 모델에서 가져오는 방식
  res.render("careers/sameCareers", { sameCareers });
};

// 카테고리별 배우 가져오기
const getCategoryActors = (req, res) => {
  const { category } = req.params;
  const categoryActors = careerModel.getCategoryActors(category);
  const sameCareers = careerModel.getSameCareers(); // 이제 정상적으로 호출됨

  res.render("careers/categoryActors", {
    category,
    categoryActors,
    sameCareers, // sameCareers를 전달
  });
};

module.exports = {
  getAllCareers,
  getMaleActors,
  getFemaleActors,
  getCategoryActors,
  showSameCareers,
};
