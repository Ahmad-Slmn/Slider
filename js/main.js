// Get slider Items
var sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number Of Slider
var slideCount = sliderImgs.length;

// Set Curent Slideer
var curentSlider = 1;

// Slide Number
var slideNumber = document.getElementById("slide-number")

// Prev And Next button
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// Handle Click On Prev And Next Bottuns
next.onclick = nextslide;
prev.onclick = prevslide;

// Creat Main Ul Element
var ul = document.createElement("ul")

ul.setAttribute("id", "ul");

// Creat Li 
for (var i = 1; i <= slideCount; i++) {

    var li = document.createElement("li");

    li.setAttribute("data-index", i);

    li.appendChild(document.createTextNode(i))

    ul.appendChild(li)
}

document.getElementById("indicators").appendChild(ul);

// Get Ul Items
var UlLi = Array.from(document.querySelectorAll("#ul li"));

var ulId = document.getElementById("ul");

// Loop On All Li
for(var i = 0; i < UlLi.length; i++){
    
    UlLi[i].onclick = function(){
        
        
        curentSlider = parseInt(this.getAttribute("data-index"));
        
        checker()
    }
}

// Trigger the Checker Function
checker()

// Creat Checker Function
function checker() {

    slideNumber.textContent = "slide #" + (curentSlider) + " " + "of " + (slideCount);

    // Remove All Active Class 
    removeActive()

    // Set Active Class On Curent Slide
    sliderImgs[curentSlider - 1].classList.add("active");

    // Set Active Class On Curent Li
    ulId.children[curentSlider - 1].classList.add("active");

    // Check If Curent Slide Is First
    if (curentSlider == 1) {


        // Add Disable Class on prev
        prev.classList.add("disabled")
    } else {
        // Remove Disable Class on prev
        prev.classList.remove("disabled")
    }


    // Check If Curent Slide Is Last
    if (curentSlider == slideCount) {


        // Add Disable Class on prev
        next.classList.add("disabled")
    } else {
        // Remove Disable Class on prev
        next.classList.remove("disabled")
    }


}


// Remove All Active Class
function removeActive() {

    // Loop In Imgs 
    sliderImgs.forEach(function (imgs) {

        imgs.classList.remove("active")
    });

    // Loop In Ul LI
    UlLi.forEach(function (li) {

        li.classList.remove("active")
    })
}

// Next Slide Function
function nextslide() {

    if (next.classList.contains("disabled")) {
        
        return false;

    } else {
        curentSlider++;

        checker()
    }
}

// Prev Slide Function
function prevslide() {

      if (prev.classList.contains("disabled")) {
        
        return false;

    } else {
       curentSlider--;

        checker()
    }
}
