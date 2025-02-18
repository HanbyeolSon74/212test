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

// 전체 배우 리스트
const getAllCareers = () => {
  return careers.map((career) => ({
    name: career.userName,
    age: career.age,
    careers: career.careers,
  }));
};

// 남자 배우 리스트
const getMaleActors = () => {
  return careers
    .filter((career) => career.careers.some((job) => job.gender === "남자"))
    .map((career) => ({
      name: career.userName,
      age: career.age,
      careers: career.careers.filter((job) => job.gender === "남자"),
    }));
};

// 여자 배우 리스트
const getFemaleActors = () => {
  return careers
    .filter((career) => career.careers.some((job) => job.gender === "여자"))
    .map((career) => ({
      name: career.userName,
      age: career.age,
      careers: career.careers.filter((job) => job.gender === "여자"),
    }));
};

//  4. 같은 드라마 || 같은 영화 || 같은 뮤지컬 나온 배우들 (카테고리, 제목, 배우 이름, 역할 ) 테이블
const getSameCareers = () => {
  let titleCount = { drama: {}, movie: {}, musical: {} };
  let title_lst = { drama: [], movie: [], musical: [] };

  // careers 데이터를 돌며 각 카테고리 별로 제목의 출현 횟수를 셈
  careers.forEach((element) => {
    element.careers.forEach((item) => {
      if (item.category === "drama") {
        titleCount.drama[item.title] = (titleCount.drama[item.title] || 0) + 1;
      } else if (item.category === "movie") {
        titleCount.movie[item.title] = (titleCount.movie[item.title] || 0) + 1;
      } else if (item.category === "musical") {
        titleCount.musical[item.title] =
          (titleCount.musical[item.title] || 0) + 1;
      }
    });
  });

  // 출현 횟수가 2번 이상인 제목을 각 카테고리 리스트에 추가
  for (let title in titleCount.drama) {
    if (titleCount.drama[title] > 1) title_lst.drama.push(title);
  }

  for (let title in titleCount.movie) {
    if (titleCount.movie[title] > 1) title_lst.movie.push(title);
  }

  for (let title in titleCount.musical) {
    if (titleCount.musical[title] > 1) title_lst.musical.push(title);
  }

  // 각 카테고리별로 필터링된 배우 리스트
  const sameCareers = {
    drama: {},
    movie: {},
    musical: {},
  };

  careers.forEach((career) => {
    career.careers.forEach((job) => {
      if (
        (title_lst.drama.includes(job.title) && job.category === "drama") ||
        (title_lst.movie.includes(job.title) && job.category === "movie") ||
        (title_lst.musical.includes(job.title) && job.category === "musical")
      ) {
        if (!sameCareers[job.category][job.title]) {
          sameCareers[job.category][job.title] = [];
        }
        sameCareers[job.category][job.title].push({
          name: career.userName,
          role: job.role,
        });
      }
    });
  });

  return sameCareers;
};

// 카테고리별 필터링 (영화, 드라마, 뮤지컬)
const getCategoryActors = (category) => {
  return careers
    .filter((career) => {
      // 해당 카테고리가 맞는지 확인
      return career.careers.some((job) => job.category === category);
    })
    .map((career) => ({
      category: category,
      actors: career.careers
        .filter((job) => job.category === category) // 해당 카테고리만 필터링
        .map((job) => ({
          title: job.title,
          role: job.role,
          actor: career.userName,
        })),
    }));
};

module.exports = {
  getAllCareers,
  getMaleActors,
  getFemaleActors,
  getCategoryActors,
  getSameCareers, // getSameCareers 함수 추가
};
