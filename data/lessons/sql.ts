import type { Lesson } from "./types";

export const sqlLessons: Lesson[] = [
  {
    id: "sql-select-basic",
    category: "sql",
    categoryLabel: "PostgreSQL",
    order: 1,
    title: "SELECT 기본",
    description:
      "SELECT는 테이블에서 필요한 데이터를 조회할 때 사용하는 SQL의 가장 기본적인 문법입니다. 어떤 컬럼을 볼지, 어느 테이블에서 가져올지를 명확하게 작성합니다.",
    concepts: ["SELECT", "FROM", "column", "query"],
    exampleCode: `SELECT name, age
FROM users;`,
    problem: {
      type: "exact",
      title: "필요한 컬럼 조회하기",
      description:
        "users 테이블에서 name과 age 컬럼을 조회하는 SQL을 작성해보세요.",
      starterCode: `SELECT *
FROM users;`,
      answerCode: `SELECT name, age
FROM users;`,
      hint: "모든 컬럼을 뜻하는 * 대신 필요한 컬럼 이름을 쉼표로 구분해 적어보세요.",
      explanation:
        "SELECT 뒤에는 조회할 컬럼을 적고, FROM 뒤에는 데이터를 가져올 테이블 이름을 적습니다.",
    },
  },
];
