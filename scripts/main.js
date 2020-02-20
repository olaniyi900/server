const myHeading = document.querySelector("h2");


myHeading.addEventListener("click",
    function() {
        if (myHeading.textContent === "Hello World") {
            myHeading.textContent = "Housing developer site"
        } else {
            myHeading.textContent = "Hello World";
        }

    }
);