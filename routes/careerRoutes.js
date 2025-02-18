const express = require("express");
const router = express.Router();
const careerController = require("../controllers/careerController");

// 모든 배우 조회
router.get("/", careerController.getAllCareers);

// 남자 배우 조회
router.get("/male", careerController.getMaleActors);

// 여자 배우 조회
router.get("/female", careerController.getFemaleActors);

// 특정 카테고리 배우 조회 (영화, 드라마, 뮤지컬)
router.get("/category/:category", careerController.getCategoryActors);

// 같은 드라마, 영화, 뮤지컬에 출연한 배우 조회
router.get("/sameCareers", careerController.showSameCareers);

module.exports = router;
