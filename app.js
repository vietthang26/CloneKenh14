// Xử lý header
let header = document.getElementById("sticky_nav");
let hoverItem = document.querySelectorAll(".header__nav-list li");
let img = document.createElement("img");

img.src = "./assets/img/logokenh14_don.png"

let sticky = header.offsetTop;

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky",window.pageYOffset > sticky );
  header.classList.toggle("sticky__header",window.pageYOffset > sticky );
  for (let index = 0; index < hoverItem.length; index++) {
          hoverItem[index].classList.toggle("after__hover",window.pageYOffset > sticky);        
  }
  let homeButton = document.querySelector(".header__nav-list .icon");
  if (window.pageYOffset > sticky) {
    homeButton.outerHTML = `
                            <li class="icon">
                                <img src="./assets/img/logokenh14_don.png" alt="" class="logo">
                            </li>
    `
  }
  else {
    homeButton.outerHTML = `
                            <li class="icon">
                              <i class='bx bxs-home icon-home'></i>
                            </li>
                        `
  }
})

// Xử lý slider

let listBox = document.querySelectorAll('.box');
let wrapperBox = document.querySelector('.slider-box');
let btnLeft = document.querySelector('.btnLeft');
let btnRight = document.querySelector('.btnRight');
let reviewDiv = document.querySelector('.slider');
let dots = document.querySelectorAll('.dot');

let widthItemAndMargin = reviewDiv.offsetWidth / 3;
let widthAllBox = widthItemAndMargin * listBox.length;
wrapperBox.style.width = `${widthAllBox}px`;
let dot = 0;
let count = 0;
let spacing = widthAllBox - 3 * widthItemAndMargin;

function make_slide() {
    listBox.forEach((element) => {
        element.style.width = `${widthItemAndMargin}px`;
    });

    btnRight.addEventListener('click', function () {
        count += widthItemAndMargin;
        dot++;
        if (dot == listBox.length-2) {
          dot = 0;
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[dot].className += " active";

        if (count > spacing) {
            count = 0;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= widthItemAndMargin;
        if (dot == 0) {
          dot = listBox.length-2;
        } 
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        dot--;
        // console.log(dot);s
        dots[dot].className += " active";
        if (count < -10) {
            count = spacing;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });
}

function plusSlides(n) {
  count = 0;
  count += widthItemAndMargin*(n);
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[n].classList.add("active");

  console.log(count)
  if (count > spacing) {
    count = 0;
  }
  if (count < -10) {
    count = spacing;
}
  wrapperBox.style.transform = `translateX(${-count}px)`;
} 


make_slide()

