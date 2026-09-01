import type { LessonProblem } from "@/data/lessons";

function stripComments(code: string) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
}

function normalizeStringLiterals(code: string) {
  return code.replace(/(["'])(?:\\.|(?!\1)[^\\])*\1/g, (literal) => {
    const quote = literal[0];
    const body = literal.slice(1, -1);

    if (quote === '"') {
      return literal;
    }

    return `"${body.replace(/\\'/g, "'").replace(/"/g, '\\"')}"`;
  });
}

function normalizeCode(code: string) {
  return normalizeStringLiterals(stripComments(code))
    .replace(/;/g, "")
    .replace(/,\s*([}\]])/g, "$1")
    .replace(/\s+/g, "")
    .trim();
}

function gradeTypeCheckProblem(userCode: string, answerCode: string) {
  return normalizeCode(userCode) === normalizeCode(answerCode);
}

function gradeExactProblem(userCode: string, answerCode: string) {
  return normalizeCode(userCode) === normalizeCode(answerCode);
}

export function gradeLessonAnswer(userCode: string, problem: LessonProblem) {
  if (problem.type === "type-check") {
    return gradeTypeCheckProblem(userCode, problem.answerCode);
  }

  return gradeExactProblem(userCode, problem.answerCode);
}
