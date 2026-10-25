import { useState } from "react";
const useCopyPassword =  () => {
      const [copy, setCopy] = useState("");
      const handleCopy = async (password) => {
  try {
    if (!password) {
      return;
    }
    await window.navigator.clipboard.writeText(password);
    setCopy("Copied Successfully");
    setTimeout(() => {
      setCopy("");
    }, 2000);
  } catch (err) {
    console.log("Error", err);
  }


};
  return {copy,handleCopy};
}

export default useCopyPassword;
