const express = require("express");
const router = express.Router();
const careerController = require("../controllers/careerController");

// 전체 배우 리스트 가져오기
router.get("/", careerController.getAllCareers);

// 남자 배우 리스트
router.get("/maleActors", careerController.getMaleActors);

// 여자 배우 리스트
router.get("/femaleActors", careerController.getFemaleActors);

// 특정 카테고리의 배우들
router.get("/category/:category", careerController.getCategoryActors);

// 카테고리와 제목에 맞는 배우 목록
// GET /careers/actorsByCategory 경로 추가
router.get("/actorsByCategory", careerController.getActorsByCategory);

// 특정 배우 정보
router.get("/:id", careerController.getCareerById);

module.exports = router;
