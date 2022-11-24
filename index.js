const constructor = document.querySelector("#constructor");
const content = document.createElement("p");
content.style.color = "red";
content.textContent = "Hey I'm red!";

constructor.appendChild(content);

const secondTask = document.querySelector("#secondTask");
const secondTaskContent = document.createElement("h3");
secondTaskContent.style.color = "blue";
secondTaskContent.textContent = "Hey I'm blue!"
secondTaskContent.addEventListener("mouseenter", function (e) {
    e.target.textContent = "I secretly change!"
})

secondTask.appendChild(secondTaskContent)

const thirdTaskContainer = document.querySelector("#thirdTask");
const thirdTaskContentH1 = document.createElement("h1")
thirdTaskContainer.style.cssText = "background-color: pink";
thirdTaskContainer.style.border = "thick solid #000000"
thirdTaskContentH1.textContent = "I'm In a div"
thirdTaskContainer.appendChild(thirdTaskContentH1)

const fourthTask = document.querySelector("#thirdTask");
const fourthTaskContent = document.createElement("p");
fourthTaskContent.textContent = "ME TOO!"

fourthTask.appendChild(fourthTaskContent)


/*
const button = document.querySelector(".button")
button.onclick = () => {
    alert("hello world!")
}
*/


const button = document.querySelector(".button");
button.addEventListener('click', function (e) {
    e.target.textContent = "I have changed!"
    e.target.style.color = "blue"
  });