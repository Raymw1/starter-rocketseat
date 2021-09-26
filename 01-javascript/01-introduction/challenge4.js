function returnExperience(years) {
  if (years < 1) return "Iniciante";
  if (years < 3) return "Intermediário";
  if (years < 7) return "Avançado";
  return "Jedi Master";
}

const studyYears = 0
const result = returnExperience(studyYears);
console.log(result);