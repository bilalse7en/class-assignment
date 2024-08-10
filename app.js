let arr = ["bat", "tap", "cat", "tab", "pat", "tac", "wajahtt", "tajawht"];
let anagramWords = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].split('').sort().join('') === arr[j].split('').sort().join('')) {
            anagramWords.push(arr[i] + " & " + arr[j]);
        }
    }
}

let anagramList = document.getElementById("anagramList");
for (let i = 0; i < anagramWords.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = anagramWords[i];
    anagramList.appendChild(listItem);
}
