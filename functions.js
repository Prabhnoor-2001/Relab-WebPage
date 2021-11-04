// init variables
let inputField = document.getElementById("referral-code");
let copyButton = document.getElementById("copy-button");

// event listeners and function calls
inputField.value = makeid();
copyButton.onclick = () => {
  navigator.clipboard.writeText(inputField.value);
  copyButton.innerHTML = "Copied!";
  copyButton.classList.add("copied-button");
  copyButton.classList.remove("copy-button");
};
//
//makes it look like a uuid, which is more standardly used
//found it on Stack Overflow, wasnt sure if I could copy code so I made the second one
//
function createUniqueCode() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

//
//the probability of the code repeating is 62^16
//assuming Math.random() is truly random
//I have also added the current timestamp to make the chances of them repeating a lot smaller
//it doesn't look as pretty but is VERY safe
//
function makeid() {
  const length = 16;
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  const dateNumber = Date.now().toString().split(""); // looked ugly with all numbers at the back so converted to ascii
  let mixedCode = [];
  result.map(function (e, i) {
    if (dateNumber[i] === undefined) {
      mixedCode.push(e);
      mixedCode.push(Math.floor(Math.random() * 10).toString());
    } else {
      mixedCode.push(e);
      mixedCode.push(dateNumber[i]);
    }
  });
  return mixedCode.join("");
}
