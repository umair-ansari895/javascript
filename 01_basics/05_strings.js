const name = "umair"
const repoCount = 50

console.log(name + repoCount + "value"); // old syntax

console.log(`hello! my name is ${name} and my repo count is ${repoCount}`); // modern syntax

const gameName = new String('umair-ansari')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice(-11, 4)

console.log(anotherString);

const newStringOne = "    umair   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://umair.com/umair%20ansari"

console.log(url.replace('%20', '-'));

console.log(url.includes('ansari'));
console.log(url.includes('zubair'));

console.log(gameName.split('-'));