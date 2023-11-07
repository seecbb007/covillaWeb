let hiddentopTitle = document.querySelector(".hidden_topTitleContnet");
let hiddentopTitleContent = document.querySelector(".hidden_topTitleContnet");
let hiddenCovilla = document.querySelector(".hiddenCovilla");
let hiddenTopSelections = document.querySelector(".hiddenTopSelections");
let hiddenDestinationBox = document.querySelector(".hidden_destinationsBox");
let covilla = document.querySelector(".covilla");
let destinationsBox = document.querySelector(".destinationsBox");
let topSelections = document.querySelector(".TopSelections");
let navButt = document.querySelectorAll(".navButt");
let navButtArray = Array.from(navButt);
let iconright = document.querySelector(".iconright");
let iconleft = document.querySelector(".iconleft");
let hero = document.querySelector(".hero");
let citycountry = document.querySelector(".citycountry");
let travelprice = document.querySelector(".travelprice");
let CP_contact2 = document.querySelector(".CP_contact2");
let startedandhowitworks = document.querySelector(".startedandhowitworks");
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;

  hiddentopTitleContent.style.opacity = scrollPosition > 0 ? 1 : 0;

  covilla.style.opacity = Math.max(0, 1 - scrollPosition / 300);
  destinationsBox.style.opacity = Math.max(0, 1 - scrollPosition / 300);

  hiddenCovilla.style.display =
    scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;
  hiddenDestinationBox.style.opacity =
    scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;
  hiddenTopSelections.style.opacity =
    scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;

  //navButt Function

  navButtArray.map((butt) => {
    if (scrollPosition > 225) {
      butt.style.display = "block";
      butt.style.padding = "10px";
      hiddenTopSelections.style.display = "none";
    } else {
      butt.style.display = "none";
      hiddenTopSelections.style.display = "flex";
    }

    butt.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "#f7f8fc";
    });
    butt.addEventListener("mouseleave", function (e) {
      e.target.style.backgroundColor = "";
    });
  });

  if (scrollPosition === 0) {
    hiddentopTitleContent.style.height = "0px";
  } else if (scrollPosition < 300) {
    hiddentopTitleContent.style.height = (scrollPosition / 300) * 100 + "px";
  } else {
    hiddentopTitleContent.style.height = "100px";
  }
  //点击HOW IT WORKS会跳转到 下部分how it works那里。
  CP_contact2.addEventListener("click", function () {
    window.scrollTo({
      top: 5400,
      left: 0,
      behavior: "smooth",
    });
  });
};
//改变背景图片

const picturelist = [
  {
    image: "url(./assets/Greece.jpg)",
    cityCountries: "Thessaloniki, Greece",
    value: "STARTING AT $6700",
  },
  {
    image: " url(./assets/EgyptSimbel.optimal.jpg)",
    cityCountries: "Bahariya Oasis, Egypt",
    value: "STARTING AT $6400",
  },
  {
    image: " url(./assets/oahu.jpg)",
    cityCountries: "Denpasar, Indonesia",
    value: "STARTING AT $1900",
  },
];
let pictureIndex = 0;
// console.log(hero.classList);
function increment() {
  if (pictureIndex < picturelist.length - 1) {
    pictureIndex++;
  } else {
    pictureIndex = 0;
  }
  hero.style.backgroundImage = picturelist[pictureIndex].image;
  citycountry.innerHTML = picturelist[pictureIndex].cityCountries;
  travelprice.innerHTML = picturelist[pictureIndex].value;
}
function decrement() {
  if (pictureIndex > 0) {
    pictureIndex--;
  } else {
    pictureIndex = 2;
  }
  hero.style.backgroundImage = picturelist[pictureIndex].image;
  citycountry.innerHTML = picturelist[pictureIndex].cityCountries;
  travelprice.innerHTML = picturelist[pictureIndex].value;
}

iconright.addEventListener("click", () => increment());
iconleft.addEventListener("click", () => decrement());

//根据文字不同跳转到不同页面
let popu_locations_location = document.querySelector(
  ".popu_locations_location"
);

popu_locations_location.addEventListener("click", function () {
  let currentUrl = window.location.href;
  let currentsplit = currentUrl.split("/");
  let currentkey = currentsplit[currentsplit.length - 1];

  if (citycountry.innerHTML == "Thessaloniki, Greece") {
    window.location.href = "../CovillaVacation/thessaloniki.html";
  } else if (citycountry.innerHTML == "Bahariya Oasis, Egypt") {
    window.location.href = "../CovillaVacation/bahariya.html";
  } else if (citycountry.innerHTML == "Denpasar, Indonesia") {
    window.location.href = "../CovillaVacation/denpasar.html";
  }
});

// popu_locations_location.addEventListener("click", function () {
//   let currentUrl = window.location.href;
//   let currentsplit = currentUrl.split("/");
//   let currentkey = currentsplit[currentsplit.length - 1];

//   if (citycountry.innerHTML == "Thessaloniki, Greece") {
//     window.location.href = "https://covillamain.netlify.app/covillavacation/thessaloniki";
//   } else if (citycountry.innerHTML == "Bahariya Oasis, Egypt") {
//     window.location.href = "../CovillaVacation/bahariya.html";
//   } else if (citycountry.innerHTML == "Denpasar, Indonesia") {
//     window.location.href = "../CovillaVacation/denpasar.html";
//   }
// });
// DESTINATIONBox CLICK EVENT
let destination_options = document.querySelector(".destination_options");
let hidden_destinationsBox = document.querySelector(".hidden_destinationsBox");
let updownicon = document.querySelectorAll(".updownicon");
const svgup = `<svg t="1684274635165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2082" width="10" height="10"><path d="M511.965867 256c-3.456-0.042667-6.741333 0.554667-10.112 1.322667-1.450667 0.341333-2.858667 0.554667-4.266667 1.066666-6.954667 2.304-13.525333 5.717333-18.688 11.477334l-382.762667 427.178666a42.461867 42.461867 0 0 0 3.754667 60.288c17.834667 15.573333 45.312 13.909333 61.098667-3.712l350.976-391.722666 351.061333 391.722666c15.786667 17.621333 43.264 19.285333 61.098667 3.712a42.461867 42.461867 0 0 0 3.754666-60.288L545.024 269.866667c-5.162667-5.76-11.733333-9.173333-18.688-11.477334-1.408-0.512-2.816-0.725333-4.266667-1.066666-3.370667-0.768-6.656-1.365333-10.112-1.322667" fill="#e6e6e6" p-id="2083"></path></svg>`;
const svgdown = `<svg t="1684273795786" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="10" height="10"><path d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667" fill="#ffffff" p-id="2746"></path></svg>`;
let detinationBoxEvent = function () {
  destination_options.classList.toggle("open");
  if (destination_options.classList.length === 2) {
    updownicon[1].innerHTML = svgup;
  } else {
    updownicon[1].innerHTML = svgdown;
  }
};

destinationsBox.addEventListener("click", () => detinationBoxEvent());

let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger");
let hamburgerContainer = document.querySelector(".hamburgerContainer");
const svghamburger = `<svg class="hamburger" t="1684005706799" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2380" width="20" height="20"><path d="M55.466667 123.733333h917.333333v42.666667H55.466667zM55.466667 490.666667h917.333333v42.666666H55.466667zM55.466667 857.6h917.333333v42.666667H55.466667z" fill="#283F59" p-id="2381"></path></svg>`;
const svgclose = `<svg class="hamburger" t="1684005801533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3704" width="60" height="60"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="3705" fill="#283F59"></path></svg>`;

hamburgerContainer.addEventListener("click", function () {
  if (sidebar.classList.length === 2) {
    hamburgerContainer.innerHTML = svghamburger;
  } else {
    hamburgerContainer.innerHTML = svgclose;
  }
  sidebar.classList.toggle("open");
});

let LOlocations = document.querySelector(".LOlocations");
// let LOlocations_content = document.querySelectorAll(".LOlocations_content");

let son_locationContent = document.querySelectorAll(
  ".LOlocations .LOlocations_content"
);
let sonCircle = document.querySelectorAll(
  ".LOlocations_content .LOlines_Circle"
);
let sonDot = document.querySelectorAll(".LOlocations_content .dot");
let locationsExplanationBoxes = document.querySelectorAll(
  ".locationsExplanationBoxes"
);
let singleDot = document.querySelector(".dot");
let locationsName = document.querySelector(".locationsName");

let handleLocationclick = function (e) {
  let current = e.target.dataset.id - 1;

  for (let i = 0; i < son_locationContent.length; i++) {
    if (current === i) {
      son_locationContent[i].style.borderBottom = "2px solid #081c3a";
      sonCircle[i].style.transform = "scale(3.2)";
      sonCircle[i].style.border = "1px solid #081c3a";
      sonDot[i].style.backgroundColor = "#081c3a";
      locationsExplanationBoxes[i].style.display = "flex";
    } else if (current < i) {
      son_locationContent[i].style.borderBottom = "2px solid #e6e6f3";

      sonCircle[i].style.transform = "scale(0.6)";
      sonCircle[i].style.border = "1px solid #e6e6f3";
      sonDot[i].style.backgroundColor = "#e6e6f3";
      locationsExplanationBoxes[i].style.display = "none";
    } else if (current > i) {
      son_locationContent[i].style.borderBottom = "2px solid #081c3a";
      sonDot[i].style.backgroundColor = "#081c3a";
      sonCircle[i].style.border = "1px solid #e6e6f3";

      sonCircle[i].style.transform = "scale(0.6)";
      locationsExplanationBoxes[i].style.display = "none";
    }
  }
};

LOlocations.addEventListener("click", (e) => handleLocationclick(e));
singleDot.addEventListener("click", (e) => handleLocationclick(e));
locationsName.addEventListener("click", (e) => handleLocationclick(e));

let fourSelectionBoxes = document.querySelector(".fourSelectionBoxes");
let choseeDest_Butt = document.querySelector(".choseeDest_Butt");
const choseeDest_down = `<svg t="1683233182162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2429" width="15" height="15">
<path
  d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667"
  fill="#ffffff"
  p-id="2430"
></path>
  </svg>`;

let fourSelectionBoxesEvent = function () {
  fourSelectionBoxes.classList.toggle("Copen");
  if (fourSelectionBoxes.classList.length === 2) {
    updownicon[2].innerHTML = svgup;
    fourSelectionBoxes.style.display = "flex";
  } else {
    updownicon[2].innerHTML = choseeDest_down;
    fourSelectionBoxes.style.display = "none";
  }
};

choseeDest_Butt.addEventListener("click", () => fourSelectionBoxesEvent());

let background_rightArrow = document.querySelector(".background_rightArrow ");
let background_leftArrow = document.querySelector(".background_leftArrow");
let background_text = document.querySelector(".background_text");
let background_title = document.querySelector(".background_title");
let background_number = document.querySelectorAll(".background_number div ");
let background_current = 0;
const background_textlist = [
  "1.Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
  "2.Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
  "3.Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
  "4.Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
  "5.Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
];
const background_titlelist = [
  "Samantha Vohnhale",
  "Wilson Tomales",
  "Tammy Georgeon",
  "Emily Camphon",
  "Cassie Shamath",
];
background_rightArrow.addEventListener("click", function () {
  if (background_current === 0) {
    background_current = background_number.length - 1;
  } else {
    background_current--;
  }
  render();
});
background_leftArrow.addEventListener("click", function () {
  if (background_current === background_number.length - 1) {
    background_current = 0;
  } else {
    background_current++;
  }
  render();
});

function render() {
  for (let i = 0; i < background_number.length; i++) {
    if (i === background_current) {
      background_number[i].style.borderLeft = "4px solid white";
      background_number[i].style.borderRadius = "2px";
      // background_number[i].style.fontWeight = "800";
      let newText = document.createElement("div");
      newText.innerHTML = background_textlist[i];
      newText.classList = "background_text";
      background_text.innerHTML = "";
      background_text.appendChild(newText);
      // console.log(newText);
      background_title.innerHTML = background_titlelist[i];
    } else {
      background_number[i].style.borderLeft = "none";
      background_number[i].style.fontWeight = "400";
    }
  }
}
//SWIPEER
var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  noSwiping: true,

  // 如果需要前进后退按钮
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,
  // direction: "horizontal",
  watchSlidesProgress: true,
  direction: "horizontal",
  loopedslides: 5,
  allowTouchMove: true,
  // grabCursor: true,
  // slidesPerView: 3,
  // spaceBetween: 0,
  // centeredSlides: true,
  // noSwiping: true,
});

//Play Circle
let circleoutside = document.querySelector(".circleoutside");
let circleinside = document.querySelector(".circleinside");
let dashed_circle = document.querySelector(".dashed_circle");
let videoContainer = document.querySelector(".videoContainer");
let thevideo = document.querySelector(".thevideo");
let smalldiv = document.querySelector(".smalldiv");
// let startOuter = 4.2;
// let targetOuter = 3.7;
// let speed = 0.2;

// let startInner = 1.5;
// let targetInner = 1.4;
// let innerSpeed = 0.1;

// let currentOuter = startOuter;
// let currentInner = startInner;
//Interval

// function scaleCurrentCircle() {
//   let startOuter = 4.2;
//   let targetOuter = 3.7;
//   let speed = 0.2;

//   let startInner = 1.5;
//   let targetInner = 1.4;
//   let innerSpeed = 0.1;
//   let currentOuter = startOuter;
//   let currentInner = startInner;
//   if (currentOuter <= targetOuter && currentInner <= targetInner) {
//     currentOuter = startOuter;
//     currentInner = startInner;

//     console.log(currentInner);
//   } else {
//     currentOuter = currentOuter - speed;
//     currentInner = currentInner - innerSpeed;
//     console.log("2", currentInner);
//   }
//   circleoutside.style.transform = "scale(" + currentOuter + ")";
//   circleinside.style.transform = "scale(" + currentInner + ")";
//   // circleoutside.style.transition = "1s";
// }
// let interval = "";
// function startInterval() {
//   setInterval(function scaleCurrentCircle() {
//     let startOuter = 4.2;
//     let targetOuter = 3.7;
//     let speed = 0.2;

//     let startInner = 1.5;
//     let targetInner = 1.4;
//     let innerSpeed = 0.1;
//     let currentOuter = startOuter;
//     let currentInner = startInner;
//     if (currentOuter <= targetOuter && currentInner <= targetInner) {
//       currentOuter = startOuter;
//       currentInner = startInner;

//       console.log(currentInner);
//     } else {
//       currentOuter = currentOuter - speed;
//       currentInner = currentInner - innerSpeed;
//       console.log("2", currentInner);
//     }
//     circleoutside.style.transform = "scale(" + currentOuter + ")";
//     circleinside.style.transform = "scale(" + currentInner + ")";
//     // circleoutside.style.transition = "1s";
//   }, 1000);
// }

// function stopInterval() {
//   console.log("stop");

//   clearInterval(intervalId);
//   console.log(intervalId);
// }

dashed_circle.addEventListener("mouseenter", function () {
  circleoutside.style.opacity = "1";
  circleinside.style.opacity = "1";
  videoContainer.style.opacity = "1";
  videoContainer.style.transform = "scale(5)";
  // interval = setInterval(startInterval(), 1000);
  circleoutside.style.animation =
    "outsideC 3s  linear infinite normal forwards";
  circleinside.style.animation = "insideC 3s linear infinite normal forwards";
  dashed_circle.addEventListener("mousemove", function (e) {
    let leftX = e.offsetX;
    let topY = e.offsetY;

    let borderX = smalldiv.offsetWidth - dashed_circle.offsetWidth;
    let borderY = smalldiv.offsetHeight - dashed_circle.offsetHeight;

    if (leftX <= 0) {
      leftX = 0;
    } else if (leftX >= borderX) {
      leftX = borderX;
    }
    if (topY <= 0) {
      topY = 0;
    } else if (topY >= borderY) {
      topY = borderY;
    }
    dashed_circle.style.left = leftX + "px";
    dashed_circle.style.top = topY + "px";
  });

  // startInterval();
  // let changeCircle = setInterval(function scaleCurrentCircle() {
  //   if (currentOuter <= targetOuter && currentInner <= targetInner) {
  //     currentOuter = startOuter;
  //     currentInner = startInner;

  //     console.log(currentInner);
  //   } else {
  //     currentOuter = currentOuter - speed;
  //     currentInner = currentInner - innerSpeed;
  //     console.log("2", currentInner);
  //   }
  //   circleoutside.style.transform = "scale(" + currentOuter + ")";
  //   circleinside.style.transform = "scale(" + currentInner + ")";
  //   // circleoutside.style.transition = "1s";
  // }, 1000);
  // circleoutside.style.transform = "scale(4.2)";
  // circleinside.style.transform = "scale(1.5)";
  // let startOuter = 4.2;
  // let targetOuter = 3.7;
  // let speed = 0.2;

  // let startInner = 1.5;
  // let targetInner = 1.4;
  // let innerSpeed = 0.1;
  // let currentOuter = startOuter;
  // let currentInner = startInner;
  //setInterval(() => scaleCurrentCircle(), 1000);
});
dashed_circle.addEventListener("mouseleave", function () {
  circleoutside.style.opacity = "0";
  circleinside.style.opacity = "0";
  videoContainer.style.opacity = "0";
  videoContainer.style.transform = "scale(0)";
  circleoutside.style.animation = "no";
  circleinside.style.animation = "no";
  dashed_circle.style.left = "19px";
  dashed_circle.style.top = "19px";
  // circleoutside.style.transform = "scale(0.5)";
  // circleinside.style.transform = "scale(0.5)";
  // clearInterval(interval);
});

//Play Circle 跟随鼠标移动 白圈会动

// function circleMove(e) {
//   let relativeX = e.offsetX;
//   let relativeY = e.offsetY;
//   let leftX = smalldiv.offsetWidth - e.offsetX;
//   let topY = smalldiv.offsetWidth - e.offsetX;
//   dashed_circle.style.top = leftX;
//   dashed_circle.style.top = topY;

//   // let borderX = dashed_circle.offsetWidth;
//   // let borderY = dashed_circle.offsetHeight;

//   // if (leftX <= 0) {
//   //   leftX = 0;
//   // } else if (leftX >= borderX) {
//   //   leftX = borderX;
//   // }
//   // if (topY <= 0) {
//   //   topY = 0;
//   // } else if (topY >= borderY) {
//   //   topY = borderY;
//   // }
// }
