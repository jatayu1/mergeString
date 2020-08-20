var str1 = prompt("input string 1");
var str2 = prompt("input string 2");
var arr = [];
if (str1.length > str2.length) {
  while (str1) {
    arr.push(str1[0]);
    str1 = str1.replace(str1[0], "");
    if (str2) {
      arr.push(str2[0]);
      str2 = str2.replace(str2[0], "");
    } else {
      arr.push(str1);
      str1 = "";
    }
  }
  console.log(arr.join(""));
} else if (str1.length <= str2.length) {
  while (str2) {
    if (str1) {
      arr.push(str1[0]);
      str1 = str1.replace(str1[0], "");
      arr.push(str2[0]);
      str2 = str2.replace(str2[0], "");
    } else {
      arr.push(str2);
      str2 = "";
    }
  }
  console.log(arr.join(""));
}

alert("congrates done");
