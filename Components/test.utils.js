import { FormatColorResetRounded } from "@mui/icons-material";

const getRandLetters = () => {
  let char = "qwertyuiopasdfghjklzxcvbnm";
  let randIdx = Math.floor(Math.random() * char.length);

  return char[randIdx];
};

const getRandNmbr = () => {
  let char = "1234567890";
  let randIdx = Math.floor(Math.random() * char.length);

  return char[randIdx];
};

const getRandSymb = () => {
  let char = "!@#$%^&*()";
  let randIdx = Math.floor(Math.random() * char.length);

  return char[randIdx];
};

const getAllCaps = () => {
  let char = "qwertyuiopasdfghjklzxcvbnm";
  let randIdx = Math.floor(Math.random() * char.length);

  return char[randIdx].toLocaleUpperCase();
};

const getPassword = (
  // hasAlph = true,
  toUpperCase = false,
  hasNumber = false,
  hasSymbol = false,

  len = null
) => {
  //  [getRandLetters];
  let charSet = [getRandLetters];
  // charSet = hasAlph ? [getRandLetters] : charSet;
  charSet = hasNumber ? [...charSet, getRandNmbr] : charSet;
  charSet = hasSymbol ? [...charSet, getRandSymb] : charSet;
  charSet = toUpperCase ? [...charSet, getAllCaps] : charSet;

  let pass = [];
  for (let i = 0; i < len; i++) {
    let randomised = Math.floor(Math.random() * charSet.length);
    let characters = charSet[randomised]();
    pass.push(characters);
  }
  return pass.join("");

  //   console.log(getRandNmbr());
};
// getPassword();
export { getPassword };
