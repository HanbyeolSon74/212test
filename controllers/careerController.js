const careerModel = require("../models/careerModel");

const getAllCareers = (req, res) => {
  const careers = careerModel.getAllCareers();
  res.render("careers/index", { careers });
};

const getCareerById = (req, res) => {
  const career = careerModel.getCareerById(req.params.id);
  if (career) {
    res.render("careers/show", { career });
  } else {
    res.status(404).send("배우를 찾을 수 없습니다.");
  }
};

const getMaleActors = (req, res) => {
  const maleActors = careerModel.getMaleActors();
  res.render("careers/maleActors", { maleActors });
};

const getFemaleActors = (req, res) => {
  const femaleActors = careerModel.getFemaleActors();
  res.render("careers/femaleActors", { femaleActors });
};

// 같은 작품에 출연한 배우 목록 가져오기
const getActorsByCategory = (req, res) => {
  const { workTitle } = req.params;
  const careers = careerModel.getAllCareers(); // 🔥 경력 데이터 가져오기

  const filteredActors = careers.flatMap((actor) =>
    actor.careers
      .filter((job) => job.title === workTitle)
      .map((job) => ({
        category: job.category,
        title: job.title,
        name: actor.name, // 수정: actor.userName → actor.name
        role: job.role,
      }))
  );

  res.render("careers/actorsByCategory", { workTitle, actors: filteredActors });
};

const getCategoryActors = (req, res) => {
  const { category } = req.params;
  const categoryActors = careerModel.getCategoryActors(category);
  res.render("careers/categoryActors", { category, categoryActors });
};

module.exports = {
  getAllCareers,
  getCareerById,
  getMaleActors,
  getFemaleActors,
  getActorsByCategory,
  getCategoryActors,
};
