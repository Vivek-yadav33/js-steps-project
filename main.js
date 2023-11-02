const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

// selecting the element(steps) from the dom
// let steps_1 = document.getElementsByClassName("step-1");
// let steps_2 = document.getElementsByClassName("step-2");
// let steps_3 = document.getElementsByClassName("step-3");
let steps = document.querySelectorAll(".step");
// console.log(steps[1]);



// selecting the button from the dom 
const msg = document.querySelector(".message");

// selecting the button from the dom 
let prevBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
// console.log(prevBtn);

let step = 1;
// msg.innerHTML = "<i>jsjs </i>";
// msg.textContent = "<b> css </b>";
msg.innerHTML = "Step " + step + " : " + messages[step - 1];




// on load checks if step == 1 then disabled the previous button
if (step == 1) {
    prevBtn.setAttribute("disabled", true);
    prevBtn.classList.add("disabled-btn");
}


// adding event listener to the buttons
//prev btn event listener
prevBtn.addEventListener("click", function () {

    step = step - 1;
    //inserting array element into  paragraph
    if(step > 1)
    {
        msg.innerHTML = "Step " + step + " : " + messages[step - 1];
    }
    // disabled the button when step == 1
    if (step == 1) {
        prevBtn.setAttribute("disabled", true);
        prevBtn.classList.add("disabled-btn");
        prevBtn.style.cursor = "not-allowed";
    }
    if(step < 3){
        nextBtn.removeAttribute("disabled", false);
        nextBtn.style.cursor = "pointer";
        nextBtn.classList.remove("disabled-btn");
        steps[step].classList.remove("active");
    }
    
});


if(step >= 1){
    nextBtn.style.cursor = "pointer";

}

// next button event listener
nextBtn.addEventListener("click", function () {

    if (messages.length > step) {
        step += 1;
        msg.innerHTML = "Step " + step + " : " + messages[step - 1];
        // steps_2.classList.add("active");
        steps[step - 1].classList.add("active");

    }
     if(step == 3){
        nextBtn.setAttribute("disabled", true);
        nextBtn.classList.add("disabled-btn");
        nextBtn.style.cursor = "not-allowed";
    }
    
    if(step >= 1) {
        prevBtn.removeAttribute("disabled", false);
        prevBtn.classList.remove("disabled-btn");
        prevBtn.style.cursor = "pointer";

        
    }
    
});





