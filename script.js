// Green Square
const squareGreenHide =document.querySelector("#squareGreenHide");

const squareGreenButton =document.querySelector("#squareGreenButton");

console.log(squareGreenHide, squareGreenButton);

squareGreenButton.addEventListener("click", function (){
    console.log("Button is clicked")

    squareGreenHide.classList.toggle("hidden");
});

// Red Square
const squareRedShowText =document.querySelector("#squareRedShowText");
const squareRedButton =document.querySelector("#squareRedButton");

console.log(squareRedShowText, squareRedButton);

squareRedButton.addEventListener("click", function(){
    console.log("Button is clicked")
})

