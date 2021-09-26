function returnGender(gender) {
  switch (gender.toUpperCase()) {
    case 'M':
      return 'Male';
    case 'F':
      return 'Female';
    default:
      return 'Other';
  }
}

const result = returnGender("F");
console.log(result);