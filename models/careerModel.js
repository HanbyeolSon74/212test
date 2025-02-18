const careers = [
  {
    id: 1,
    userName: "김덕배",
    age: 25,
    careers: [
      {
        category: "movie",
        title: "남산의 부장들",
        role: "부장",
        gender: "남자",
      },
      {
        category: "drama",
        title: "사랑의 불시착",
        role: "군인1",
        gender: "남자",
      },
      { category: "musical", title: "룰라", role: "룰라", gender: "남자" },
    ],
  },
  {
    id: 2,
    userName: "김춘자",
    age: 55,
    careers: [
      { category: "musical", title: "카지노", role: "회장님", gender: "여자" },
      {
        category: "drama",
        title: "사랑의 불시착",
        role: "아주머니",
        gender: "여자",
      },
      { category: "musical", title: "룰라", role: "술집주인", gender: "여자" },
    ],
  },
  {
    id: 3,
    userName: "김잔치",
    age: 42,
    careers: [
      {
        category: "movie",
        title: "잔치집",
        role: "잔치집 주인",
        gender: "남자",
      },
      {
        category: "movie",
        title: "춘수네 잔치",
        role: "잔치집 주인",
        gender: "남자",
      },
      {
        category: "movie",
        title: "덕배네 잔치",
        role: "잔치집 주인",
        gender: "남자",
      },
    ],
  },
  {
    id: 4,
    userName: "이민호",
    age: 30,
    careers: [
      {
        category: "drama",
        title: "꽃보다 남자",
        role: "구준표",
        gender: "남자",
      },
      {
        category: "drama",
        title: "전지적 독자 시점",
        role: "주연",
        gender: "남자",
      },
    ],
  },
];

// 총 버튼은 5개 (남자, 여자 , title, 영화, 드라마)
// title버튼을 누르면 같은 드라마테이블, 같은영화테이블, 같은 뮤지컬테이블 한번에 보여주기
// 1. 배우 리스트 (이름,나이,커리어) 테이블 형식으로
//  2. 남자 배우 리스트 (이름,나이,커리어) 테이블 형식으로
//  3. 여자 배우 리스트 (이름,나이,커리어) 테이블 형식으로
//  4. 같은 드라마 || 같은 영화 || 같은 뮤지컬 나온 배우들 (카테고리, 제목, 배우 이름, 역할 ) 테이블
//  5. 카테고리 영화만 따로 만들어서 (카테고리 이름, 제목, 배우 이름, 역할) 테이블
//  6. 카테고리 드라마만 따로 만들어서 (카테고리 이름, 제목, 배우 이름, 역할) 테이블

// 전체 리스트 가져오기
const getAllCareers = () => {
  return careers.map((career) => ({
    name: career.userName,
    age: career.age,
    careers: career.careers,
  }));
};

// 특정 아이디로 경력 가져오기
const getCareerById = (id) => {
  const career = careers.find((career) => career.id === parseInt(id));
  if (!career) return null;
  return {
    name: career.userName,
    age: career.age,
    careers: career.careers,
  };
};

// 남자 배우 리스트 가져오기
const getMaleActors = () => {
  return careers
    .filter((career) => career.careers.some((job) => job.gender === "남자"))
    .map((career) => ({
      name: career.userName,
      age: career.age,
      careers: career.careers.filter((job) => job.gender === "남자"),
    }));
};

// 여자 배우 리스트 가져오기
const getFemaleActors = () => {
  return careers
    .filter((career) => career.careers.some((job) => job.gender === "여자"))
    .map((career) => ({
      name: career.userName,
      age: career.age,
      careers: career.careers.filter((job) => job.gender === "여자"),
    }));
};

// 같은 드라마, 영화, 뮤지컬에 출연한 배우들 (카테고리와 제목에 맞는 배우들)
const getActorsByCategoryAndTitle = (category, title) => {
  const result = careers
    .map((career) =>
      career.careers
        .filter(
          (job) => job.category === category && job.title === title // 카테고리와 제목에 맞는 배우만
        )
        .map((job) => ({
          category: job.category,
          title: job.title,
          actor: career.userName,
          role: job.role,
        }))
    )
    .flat();

  return result;
};

// 카테고리별 필터링 (영화, 드라마, 뮤지컬)
const getCategoryActors = (category) => {
  return careers
    .filter((career) => career.careers.some((job) => job.category === category))
    .map((career) => ({
      category: category,
      actors: career.careers
        .filter((job) => job.category === category)
        .map((job) => ({
          title: job.title,
          role: job.role,
          actor: career.userName,
        })),
    }));
};

module.exports = {
  getAllCareers,
  getCareerById,
  getMaleActors,
  getFemaleActors,
  getActorsByCategoryAndTitle,
  getCategoryActors,
};
