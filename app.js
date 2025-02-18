// 가져오는게 항상 최상단에 있어야 함
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// 라우팅 파일 불러오기
const userRouters = require("./routes/userRoutes");
const itemRouters = require("./routes/itemRoutes");
const careerRouters = require("./routes/careerRoutes");

//  파일 저장 설정 (jpg, png, gif 허용)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // 타임스탬프 + 확장자
  },
});

//  파일 필터링 (이미지 파일만 허용)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("지원하지 않는 파일 형식입니다."), false);
  }
};

//  파일 크기 제한 (5MB)
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// /users 경로에 대한 라우팅 처리
app.use("/users", userRouters); //'/users'에 대한 요청은 userRouters로 처리
app.use("/items", itemRouters);
app.use("/careers", careerRouters);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//  메인 페이지
app.get("/", (req, res) => {
  res.render("index", { title: "MVC패턴" });
});

// app.get("/", (req, res) => {
//   res.render("test");
// });

// 단일 파일 업로드
app.post("/upload", upload.single("files"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: "파일 업로드 실패" });
  }
  console.log(req.file, "파일 업로드 성공");
  res.send({ url: `/uploads/${req.file.filename}` });
});

//  다중 파일 업로드
app.post("/upload-multiple", upload.array("files", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send({ error: "파일 업로드 실패" });
  }
  const fileUrls = req.files.map((file) => `/uploads/${file.filename}`);
  res.send({ urls: fileUrls });
});

// 테스트용 GET 요청
app.get("/posttest", (req, res) => {
  const { id, password } = req.query;
  console.log(`아이디: ${id}, 비밀번호: ${password}`);
  if (id === "123" && password === "123") {
    res.send({ success: true, message: "로그인 성공!" });
  } else {
    res.send({
      success: false,
      message: "아이디나 비밀번호가 잘못되었습니다.",
    });
  }
});

//  서버 실행
app.listen(port, () => {
  console.log(` 서버가 실행 중입니다. 포트: ${port}`);
});
