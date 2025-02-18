const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/", itemController.getItems);

router.get("/expensive", itemController.getMostExpensiveItem); // 가장 비싼 아이템 페이지 추가
router.get("/:id", itemController.getItem);

module.exports = router;
