const express = require("express");
const app = express();
const port = 4000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 메인 페이지
// app.get("/", (req, res) => {
//   res.render("axiostest");
// });

const user = {
  id: "123",
  password: "123",
};

app.get("/posttest", (req, res) => {
  const { id, password } = req.query;
  console.log(`아이디: ${id}, 비밀번호: ${password}`);

  // 로그인 유효성 체크 예시
  if (id === "123" && password === "123") {
    res.send({ success: true, message: "로그인 성공!" });
  } else {
    res.send({
      success: false,
      message: "아이디나 비밀번호가 잘못되었습니다.",
    });
  }
});

app.get("/", (req, res) => {
  res.render("posttest");
});

app.get("/axiostest", (req, res) => {
  res.render("axiostest");
  res.send({ data: req.query });
});

// 페이지들 순서 반대로 변경
app.get("/sda214", (req, res) => {
  res.render("sda214", { title: "sda214" });
});

app.get("/klakawljd123", (req, res) => {
  res.render("klakawljd123", { title: "klakawljd123" });
});

app.get("/kasjdasjkdk5", (req, res) => {
  res.render("kasjdasjkdk5", { title: "kasjdasjkdk5" });
});

app.get("/kajkakasjd123", (req, res) => {
  res.render("kajkakasjd123", { title: "kajkakasjd123" });
});

app.get("/jdkdkjdk2", (req, res) => {
  res.render("jdkdkjdk2", { title: "jdkdkjdk2" });
});

app.get("/jasdjkdk24", (req, res) => {
  res.render("jasdjkdk24", { title: "jasdjkdk24" });
});

app.get("/hdnhdsjsj1234", (req, res) => {
  res.render("hdnhdsjsj1234", { title: "hdnhdsjsj1234" });
});

app.get("/hajsdhdkh1234", (req, res) => {
  res.render("hajsdhdkh1234", { title: "hajsdhdkh1234" });
});

app.get("/djwkwj124", (req, res) => {
  res.render("djwkwj124", { title: "djwkwj124" });
});

app.get("/askdsja2", (req, res) => {
  res.render("askdsja2", { title: "askdsja2" });
});

app.get("/askasjddksh158", (req, res) => {
  res.render("askasjddksh158", { title: "askasjddksh158" });
});

app.get("/asjdhjasdhjh1234", (req, res) => {
  res.render("asjdhjasdhjh1234", { title: "asjdhjasdhjh1234" });
});

app.get("/asdkjwkjdjq190", (req, res) => {
  res.render("asdkjwkjdjq190", { title: "asdkjwkjdjq190" });
});

app.get("/aksjdkj15123", (req, res) => {
  res.render("aksjdkj15123", { title: "aksjdkj15123" });
});

app.get("/akjskdjjs90", (req, res) => {
  res.render("akjskdjjs90", { title: "akjskdjjs90" });
});

app.get("/ajksjdk1234", (req, res) => {
  res.render("ajksjdk1234", { title: "ajksjdk1234" });
});

app.get("/ajksjd1254", (req, res) => {
  res.render("ajksjd1254", { title: "ajksjd1254" });
});

app.get("/ahjshjdh1234", (req, res) => {
  res.render("ahjshjdh1234", { title: "ahjshjdh1234" });
});

app.get("/aadsdsd1", (req, res) => {
  res.render("aadsdsd1", { title: "aadsdsd1" });
});

app.get("/abjsdjh1j123", (req, res) => {
  res.render("abjsdjh1j123", { title: "abjsdjh1j123" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
