// tutaj rozwiązanie

const list = document.querySelectorAll("li");
const btn = document.querySelector("button");
let font = 10;

// Pętla
// btn.addEventListener("click", () => {
// 	for (let i = 0; i < list.length; i++) {
// 		list[i].style.display = "block";
// 		list[i].style.fontSize = font + "px";
// 	} 	font++;
// });

// FOR EACH

btn.addEventListener("click", () => {
	list.forEach((li) => {
		li.style.display = "block";
		li.style.fontSize = font + "px";
	});
	font++;
});
