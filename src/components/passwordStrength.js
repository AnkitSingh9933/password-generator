const passwordStrength = (password) => {
    let strength;
  let point = 0;
  if (password.length >= 8) {
    point++;
  }
  if (/[a-z]/.test(password)) {
    point++;
  }
  if (/[A-Z]/.test(password)) {
    point++;
  }
  if (/[0-9]/.test(password)) {
    point++;
  }
 if (/[^a-zA-Z0-9]/.test(password)) {
  point++;
}
 strength =
    password === ""
      ? ""
      : point <= 1
        ? "weak"
        : point <= 3
          ? "medium"
          : "strong";

          return {strength,point}
}

export default passwordStrength;