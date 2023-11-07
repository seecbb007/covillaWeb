let hiddentopTitleContent = document.querySelector(".hidden_topTitleContnet");
let hiddenCovilla = document.querySelector(".hiddenCovilla");
let hiddenTopSelections = document.querySelector(".hiddenTopSelections");
let hiddenDestinationBox = document.querySelector(".hidden_destinationsBox");
let covilla = document.querySelector(".covilla");
let destinationsBox = document.querySelector(".destinationsBox");
let topSelections = document.querySelector(".TopSelections");
let navButt = document.querySelectorAll(".navButt");
let navButtArray = Array.from(navButt);
let quicklinks = document.querySelector(".quicklinks");
let iconright = document.querySelector(".iconright");
let iconleft = document.querySelector(".iconleft");
let hero = document.querySelector(".hero");
let citycountry = document.querySelector(".citycountry");
let travelprice = document.querySelector(".travelprice");
let CP_contact2 = document.querySelector(".CP_contact2");
let startedandhowitworks = document.querySelector(".startedandhowitworks");

let currentUrl = window.location.href;
let currentsplit = currentUrl.split("/");
let currentkey = currentsplit[currentsplit.length - 1];

window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  // console.log(scrollPosition);
  // console.log(hiddentopTitleContent.style.height);

  hiddentopTitleContent.style.opacity = scrollPosition > 0 ? 1 : 0;

  covilla.style.opacity = Math.max(0, 1 - scrollPosition / 300);
  destinationsBox.style.opacity = Math.max(0, 1 - scrollPosition / 300);

  hiddenCovilla.style.opacity =
    scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;
  hiddenDestinationBox.style.opacity =
    scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;
  hiddenTopSelections.style.opacity =
    scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;

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
  // if (scrollPosition === 0) {
  //   hiddentopTitleContent.style.height = "0px";
  // } else
  if (scrollPosition < 300) {
    hiddentopTitleContent.style.height = (scrollPosition / 300) * 100 + "px";
  } else {
    hiddentopTitleContent.style.height = "100px";
  }
};

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
  // console.log(e.target);
  // console.log(e.target.dataset);
  let current = e.target.dataset.id - 1;
  // console.log(current);
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

// let fourSelectionBoxes = document.querySelector(".fourSelectionBoxes");
// let choseeDest_Butt = document.querySelector(".choseeDest_Butt");
// const choseeDest_down = `<svg t="1683233182162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2429" width="15" height="15">
// <path
//   d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667"
//   fill="#ffffff"
//   p-id="2430"
// ></path>
//   </svg>`;

// let fourSelectionBoxesEvent = function () {
//   console.log(fourSelectionBoxes.classList);
//   fourSelectionBoxes.classList.toggle("Copen");
//   if (fourSelectionBoxes.classList.length === 2) {
//     updownicon[2].innerHTML = svgup;
//     fourSelectionBoxes.style.display = "flex";
//   } else {
//     updownicon[2].innerHTML = choseeDest_down;
//     fourSelectionBoxes.style.display = "none";
//   }
// };

// choseeDest_Butt.addEventListener("click", () => fourSelectionBoxesEvent());

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
  "Delta Air Lines",
  "Walt Disney",
  "MetLife",
  "Microsoft",
  "Spotify",
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

//create element Function
function createElement(elementName) {
  return document.createElement(elementName);
}

// Create GuideBoxes include room type, excursions, transportation, tour guide. create content array
const agentBoxContent = [
  {
    icon: `<svg t="1686441140745" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9218" width="30" height="30"><path d="M848.925 1011.7H175.125c-16.3-0.1-29.4-13.3-29.4-29.6V450.7l-95.5 95.7c-11.4 11.5-30 11.5-41.4 0.1l-0.2-0.2c-11.5-11.6-11.5-30.3 0-41.8L143.925 369V125.4c0-16.3 13.1-29.5 29.4-29.6h148c16.3 0.1 29.4 13.3 29.4 29.6v36.3L491.025 21.2l0.2-0.2 0.2-0.2c0.2-0.2 0.3-0.3 0.5-0.4l0.3-0.3 0.1-0.1c0.4-0.4 0.8-0.7 1.2-1.1s0.7-0.6 1.1-0.8l0.3-0.2 0.3-0.2c0.2-0.2 0.4-0.3 0.6-0.5 0.6-0.4 1.3-0.8 1.8-1.1l0.3-0.2 0.4-0.2c0.7-0.4 1.4-0.7 2.1-1l0.2-0.1 0.4-0.2c0.7-0.3 1.5-0.6 2.1-0.8l0.2-0.1 0.4-0.1c0.7-0.2 1.5-0.4 2.1-0.5l0.2-0.1c0.2 0 0.3-0.1 0.5-0.1l2.1-0.3h0.3c0.2 0 0.3-0.1 0.5-0.1 1.9-0.2 3.8-0.2 5.8 0 0.2 0 0.3 0 0.5 0.1h0.2c0.6 0.1 1.3 0.2 2.1 0.3l0.4 0.1 0.3 0.1h0.1c0.7 0.2 1.4 0.3 2 0.5l0.3 0.1 0.2 0.1c0.8 0.2 1.5 0.5 2.1 0.8l0.4 0.2 0.2 0.1c0.6 0.3 1.3 0.6 2.1 1l0.4 0.2 0.3 0.2c0.6 0.3 1.2 0.7 1.8 1.1 0.2 0.1 0.4 0.3 0.6 0.4l0.3 0.3 0.4 0.3c0.3 0.2 0.7 0.5 1 0.7 0.3 0.3 0.8 0.7 1.1 1l0.2 0.2 0.3 0.3c0.2 0.1 0.3 0.3 0.4 0.4l0.1 0.1 0.2 0.2 482.3 483.3c11.5 11.6 11.5 30.2 0.1 41.8-11.4 11.5-29.9 11.6-41.4 0.3l-0.2-0.2-95.5-95.7V982c-0.1 16.4-13.3 29.7-29.6 29.7zM552.225 573.1h190.2c16.3 0.1 29.4 13.3 29.4 29.6v349.9h47.8V396.7L512.025 83.9 342.325 256.6l-125 127.2H615.025c16.3 0 29.6 13.2 29.6 29.6S631.425 443 615.025 443H204.525v130.2H415.025c16.3 0.1 29.4 13.3 29.4 29.6v181.4c0 16.3-13.1 29.5-29.4 29.6H204.525v138.8h318.3V602.7c0-16.3 13.1-29.6 29.4-29.6z m29.4 59.2v320.3H713.025V632.2l-131.4 0.1z m-377.1 0v122.3h181.1V632.2l-181.1 0.1zM202.725 155v155l89.2-89.4V155h-89.2z m500.5 287.9c-1.9 0-3.8-0.2-5.7-0.6-1.9-0.4-3.7-1-5.5-1.7-3.6-1.5-6.8-3.7-9.5-6.4-1.3-1.4-2.6-2.9-3.6-4.5-1.1-1.6-2-3.3-2.7-5.1-0.7-1.8-1.3-3.6-1.7-5.5-0.4-1.9-0.6-3.9-0.6-5.8 0-3.9 0.8-7.7 2.3-11.3 0.7-1.8 1.7-3.5 2.7-5.1 1.1-1.6 2.3-3.1 3.6-4.5 1.4-1.4 2.9-2.6 4.5-3.7s3.3-2 5.1-2.7c1.8-0.7 3.6-1.3 5.5-1.7 1.8-0.4 3.7-0.6 5.6-0.6 9.9-0.1 19.1 4.9 24.6 13.1 1.1 1.6 2 3.3 2.7 5.1 0.7 1.8 1.3 3.6 1.7 5.5 0.4 1.9 0.6 3.8 0.6 5.8 0 1.9-0.2 3.9-0.6 5.8-0.4 1.9-1 3.7-1.7 5.5-0.7 1.8-1.6 3.5-2.7 5.1-1.1 1.6-2.3 3.1-3.6 4.5-5.8 5.6-13.2 8.8-21 8.8z" fill="#676B7E" p-id="9219"></path></svg>`,
    subtitle: "ROOM TYPE",
    contactinfo: "Resort",
  },
  {
    icon: `<svg t="1686441337473" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16819" width="30" height="30"><path d="M863.744 205.312h53.76v642.048h-53.76zM756.736 205.312h53.76v642.048h-53.76zM114.176 205.312h53.76v642.048H114.176zM649.728 205.312h53.76v642.048h-53.76zM221.184 205.312h53.76v642.048H221.184zM328.192 205.312h53.76v642.048H328.192z" fill="#676B7E" p-id="16820"></path><path d="M114.176 71.168v53.76h-26.624c-44.544 0-80.384 35.84-80.384 80.384v642.048c0 44.544 35.84 80.384 80.384 80.384h856.064c44.544 0 80.384-35.84 80.384-80.384V205.312c0-44.544-35.84-80.384-80.384-80.384h-26.624V71.168h-160.768v53.76h-481.28V71.168H114.176z m829.44 107.008c14.848 0 26.624 11.776 26.624 26.624v642.048c0 14.848-11.776 26.624-26.624 26.624H87.552c-14.848 0-26.624-11.776-26.624-26.624V205.312c0-14.848 11.776-26.624 26.624-26.624h856.064z" fill="#676B7E" p-id="16821"></path><path d="M435.2 205.312h53.76v642.048H435.2zM542.72 205.312h53.76v642.048H542.72z" fill="#676B7E" p-id="16822"></path></svg>`,
    subtitle: "EXCURSIONS",
    contactinfo: "16 Excursions",
  },
  {
    icon: `<svg t="1686441423723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22745" id="mx_n_1686441423724" width="30" height="30"><path d="M670.25 425.21a97.58 97.58 0 1 1 97.58-97.58 97.69 97.69 0 0 1-97.58 97.58z m0-155.16a57.58 57.58 0 1 0 57.58 57.58 57.64 57.64 0 0 0-57.58-57.58z m0 327.51a25 25 0 0 1-16.36-6.09l-114.35-99a223.26 223.26 0 0 1-92.82-181.31 223.53 223.53 0 1 1 421.41 104A225.28 225.28 0 0 1 801 492.48l-114.35 99a24.91 24.91 0 0 1-16.4 6.08z m-98.35-143.2l98.35 85.14 98.37-85.15a23.88 23.88 0 0 1 2.27-1.83 174 174 0 0 0 72.88-141.35c0-95.68-77.84-173.52-173.52-173.52s-173.53 77.84-173.53 173.52a174 174 0 0 0 72.89 141.35 25.6 25.6 0 0 1 2.29 1.84z m213.46 467.41H272.22a25 25 0 0 1 0-50h513.14c52.84 0 95.83-38.62 95.83-86.08v-9.36c0-47.46-43-86.07-95.83-86.07H232c-80.4 0-145.82-61-145.82-136.08S151.55 418.11 232 418.11h180.72a25 25 0 0 1 0 50H232c-52.83 0-95.82 38.61-95.82 86.07s43 86.08 95.82 86.08h553.36c80.41 0 145.83 61 145.83 136.07v9.36c0 75.03-65.42 136.08-145.83 136.08z" p-id="22746"></path></svg>`,
    subtitle: "TRANSPORTATION",
    contactinfo: "Car & Boat",
  },
  {
    icon: `<svg t="1686441671397" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33701" width="30" height="30"><path d="M231.67 650.03c3.2 4.44 8.21 6.8 13.3 6.8 3.32 0 6.66-1 9.56-3.09 7.34-5.29 9-15.52 3.71-22.86-38.28-53.12-59.37-120.48-59.37-189.67 0-163.68 115.35-296.85 257.13-296.85s257.13 133.17 257.13 296.85c0 9.04 7.33 16.37 16.37 16.37s16.37-7.33 16.37-16.37c0-87.62-29.88-170.11-84.15-232.25-26.57-30.43-57.57-54.35-92.13-71.09-35.96-17.42-74.18-26.25-113.6-26.25s-77.63 8.83-113.6 26.25c-34.56 16.74-65.56 40.66-92.13 71.09-54.26 62.14-84.15 144.62-84.15 232.25 0 38.71 5.84 76.62 17.37 112.68 11.19 34.94 27.39 67.28 48.19 96.14z" p-id="33702" fill="#676B7E"></path><path d="M661.5 704.94c-58.53 0-111.05-36.26-132.38-89.76C590.1 595.64 634.38 538.4 634.38 471V340.5c0-9.05-7.33-16.38-16.38-16.38-0.08 0-0.17 0.01-0.25 0.01-0.08 0-0.17-0.01-0.25-0.01-33.43 0-59.62-29.7-59.62-67.62 0-9.05-7.33-16.38-16.38-16.38s-16.38 7.33-16.38 16.38c0 17.28-23.59 36.4-63.11 51.14-45.78 17.08-107.05 26.48-172.51 26.48-8.85 0-16.05 7.03-16.35 15.8-0.33 1.3-0.53 2.66-0.53 4.06V471c0 66.54 43.15 123.19 102.95 143.43-16.68 37.43-45.8 53.21-90.92 77.19-34.76 16.17-59.29 33.85-76.49 55-21 25.82-31.21 57.4-31.21 96.54v52.33c0 9.14 7.41 16.56 16.56 16.56s16.56-7.41 16.56-16.56v-52.33c0-46.68 16.83-78.58 57.8-104.85 0.24-0.12 0.48-0.24 0.72-0.37 10.56-5.9 20.57-11.22 30.25-16.36 0.18-0.09 0.35-0.19 0.53-0.28 4.04-1.87 8.22-3.72 12.57-5.55 7.67-3.23 14.87-7.23 21.56-11.48l77.63 115.25c-29.13 0.73-52.61 24.64-52.61 53.94v24.02c0 7.73 6.27 14 14 14s14-6.27 14-14v-24.02c0-14.32 11.65-25.98 25.98-25.98h89.04c14.32 0 25.98 11.65 25.98 25.98v24.02c0 7.73 6.27 14 14 14s14-6.27 14-14v-24.02c0-29.76-24.21-53.98-53.98-53.98h-0.55l50.62-74.64c4.34-6.4 2.67-15.1-3.73-19.44-6.4-4.34-15.1-2.67-19.44 3.73l-59 87c-0.72 1.06-1.26 2.2-1.66 3.36h-23.51c-0.39-1.15-0.92-2.27-1.63-3.32l-86.28-128.1c0.03-0.02 0.06-0.05 0.09-0.07l3.01-2.26c0.93-0.7 1.76-1.48 2.5-2.32 19.69-15.46 35.62-34.33 46.53-61.84 5.11 0.52 10.29 0.79 15.53 0.79h59c4.46 0 8.87-0.21 13.23-0.58 11.34 31.48 31.81 59.61 58.53 80.09 30.86 23.66 67.77 36.17 106.74 36.17 9.14 0 16.56-7.41 16.56-16.56s-7.44-16.55-16.58-16.55zM424 589.62c-65.41 0-118.62-53.21-118.62-118.62V366.69c63.33-1.43 122.51-11.37 168.08-28.36 25.02-9.33 44.9-20.42 59.09-32.94 0.96-0.85 1.87-1.69 2.76-2.54 4.12 8.74 9.44 16.83 15.86 23.99 13.68 15.26 31.2 25.11 50.44 28.61V471c0 65.41-53.21 118.62-118.62 118.62H424zM940.98 640.16L791.2 546.03c-19.9-12.51-42.85-19.12-66.39-19.12l-5.7 0.01c-0.59-8.61-7.74-15.42-16.5-15.42-9.14 0-16.56 7.41-16.56 16.56V895.5c0 9.14 7.41 16.56 16.56 16.56s16.56-7.41 16.56-16.56V560.03l5.68-0.01c17.27 0 34.12 4.86 48.74 14.04l149.78 94.13c0.28 0.17 0.46 0.29 0.39 0.83s-0.28 0.6-0.59 0.69L753.2 721.15c-8.75 2.65-13.7 11.89-11.05 20.64 2.17 7.15 8.73 11.76 15.84 11.76 1.59 0 3.2-0.23 4.8-0.71l169.95-51.44c12.9-3.9 22.02-14.62 23.82-27.98s-4.18-26.09-15.58-33.26z" p-id="33703" fill="#676B7E"></path></svg>`,
    subtitle: "TOUR GUIDE",
    contactinfo: "Not Included",
  },
];
const oasisBoxContent = [
  {
    icon: `<svg t="1686441140745" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9218" width="30" height="30"><path d="M848.925 1011.7H175.125c-16.3-0.1-29.4-13.3-29.4-29.6V450.7l-95.5 95.7c-11.4 11.5-30 11.5-41.4 0.1l-0.2-0.2c-11.5-11.6-11.5-30.3 0-41.8L143.925 369V125.4c0-16.3 13.1-29.5 29.4-29.6h148c16.3 0.1 29.4 13.3 29.4 29.6v36.3L491.025 21.2l0.2-0.2 0.2-0.2c0.2-0.2 0.3-0.3 0.5-0.4l0.3-0.3 0.1-0.1c0.4-0.4 0.8-0.7 1.2-1.1s0.7-0.6 1.1-0.8l0.3-0.2 0.3-0.2c0.2-0.2 0.4-0.3 0.6-0.5 0.6-0.4 1.3-0.8 1.8-1.1l0.3-0.2 0.4-0.2c0.7-0.4 1.4-0.7 2.1-1l0.2-0.1 0.4-0.2c0.7-0.3 1.5-0.6 2.1-0.8l0.2-0.1 0.4-0.1c0.7-0.2 1.5-0.4 2.1-0.5l0.2-0.1c0.2 0 0.3-0.1 0.5-0.1l2.1-0.3h0.3c0.2 0 0.3-0.1 0.5-0.1 1.9-0.2 3.8-0.2 5.8 0 0.2 0 0.3 0 0.5 0.1h0.2c0.6 0.1 1.3 0.2 2.1 0.3l0.4 0.1 0.3 0.1h0.1c0.7 0.2 1.4 0.3 2 0.5l0.3 0.1 0.2 0.1c0.8 0.2 1.5 0.5 2.1 0.8l0.4 0.2 0.2 0.1c0.6 0.3 1.3 0.6 2.1 1l0.4 0.2 0.3 0.2c0.6 0.3 1.2 0.7 1.8 1.1 0.2 0.1 0.4 0.3 0.6 0.4l0.3 0.3 0.4 0.3c0.3 0.2 0.7 0.5 1 0.7 0.3 0.3 0.8 0.7 1.1 1l0.2 0.2 0.3 0.3c0.2 0.1 0.3 0.3 0.4 0.4l0.1 0.1 0.2 0.2 482.3 483.3c11.5 11.6 11.5 30.2 0.1 41.8-11.4 11.5-29.9 11.6-41.4 0.3l-0.2-0.2-95.5-95.7V982c-0.1 16.4-13.3 29.7-29.6 29.7zM552.225 573.1h190.2c16.3 0.1 29.4 13.3 29.4 29.6v349.9h47.8V396.7L512.025 83.9 342.325 256.6l-125 127.2H615.025c16.3 0 29.6 13.2 29.6 29.6S631.425 443 615.025 443H204.525v130.2H415.025c16.3 0.1 29.4 13.3 29.4 29.6v181.4c0 16.3-13.1 29.5-29.4 29.6H204.525v138.8h318.3V602.7c0-16.3 13.1-29.6 29.4-29.6z m29.4 59.2v320.3H713.025V632.2l-131.4 0.1z m-377.1 0v122.3h181.1V632.2l-181.1 0.1zM202.725 155v155l89.2-89.4V155h-89.2z m500.5 287.9c-1.9 0-3.8-0.2-5.7-0.6-1.9-0.4-3.7-1-5.5-1.7-3.6-1.5-6.8-3.7-9.5-6.4-1.3-1.4-2.6-2.9-3.6-4.5-1.1-1.6-2-3.3-2.7-5.1-0.7-1.8-1.3-3.6-1.7-5.5-0.4-1.9-0.6-3.9-0.6-5.8 0-3.9 0.8-7.7 2.3-11.3 0.7-1.8 1.7-3.5 2.7-5.1 1.1-1.6 2.3-3.1 3.6-4.5 1.4-1.4 2.9-2.6 4.5-3.7s3.3-2 5.1-2.7c1.8-0.7 3.6-1.3 5.5-1.7 1.8-0.4 3.7-0.6 5.6-0.6 9.9-0.1 19.1 4.9 24.6 13.1 1.1 1.6 2 3.3 2.7 5.1 0.7 1.8 1.3 3.6 1.7 5.5 0.4 1.9 0.6 3.8 0.6 5.8 0 1.9-0.2 3.9-0.6 5.8-0.4 1.9-1 3.7-1.7 5.5-0.7 1.8-1.6 3.5-2.7 5.1-1.1 1.6-2.3 3.1-3.6 4.5-5.8 5.6-13.2 8.8-21 8.8z" fill="#676B7E" p-id="9219"></path></svg>`,
    subtitle: "ROOM TYPE",
    contactinfo: "Resort/Villa",
  },
  {
    icon: `<svg t="1686441337473" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16819" width="30" height="30"><path d="M863.744 205.312h53.76v642.048h-53.76zM756.736 205.312h53.76v642.048h-53.76zM114.176 205.312h53.76v642.048H114.176zM649.728 205.312h53.76v642.048h-53.76zM221.184 205.312h53.76v642.048H221.184zM328.192 205.312h53.76v642.048H328.192z" fill="#676B7E" p-id="16820"></path><path d="M114.176 71.168v53.76h-26.624c-44.544 0-80.384 35.84-80.384 80.384v642.048c0 44.544 35.84 80.384 80.384 80.384h856.064c44.544 0 80.384-35.84 80.384-80.384V205.312c0-44.544-35.84-80.384-80.384-80.384h-26.624V71.168h-160.768v53.76h-481.28V71.168H114.176z m829.44 107.008c14.848 0 26.624 11.776 26.624 26.624v642.048c0 14.848-11.776 26.624-26.624 26.624H87.552c-14.848 0-26.624-11.776-26.624-26.624V205.312c0-14.848 11.776-26.624 26.624-26.624h856.064z" fill="#676B7E" p-id="16821"></path><path d="M435.2 205.312h53.76v642.048H435.2zM542.72 205.312h53.76v642.048H542.72z" fill="#676B7E" p-id="16822"></path></svg>`,
    subtitle: "EXCURSIONS",
    contactinfo: "17 Excursions",
  },
  {
    icon: `<svg t="1686441423723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22745" id="mx_n_1686441423724" width="30" height="30"><path d="M670.25 425.21a97.58 97.58 0 1 1 97.58-97.58 97.69 97.69 0 0 1-97.58 97.58z m0-155.16a57.58 57.58 0 1 0 57.58 57.58 57.64 57.64 0 0 0-57.58-57.58z m0 327.51a25 25 0 0 1-16.36-6.09l-114.35-99a223.26 223.26 0 0 1-92.82-181.31 223.53 223.53 0 1 1 421.41 104A225.28 225.28 0 0 1 801 492.48l-114.35 99a24.91 24.91 0 0 1-16.4 6.08z m-98.35-143.2l98.35 85.14 98.37-85.15a23.88 23.88 0 0 1 2.27-1.83 174 174 0 0 0 72.88-141.35c0-95.68-77.84-173.52-173.52-173.52s-173.53 77.84-173.53 173.52a174 174 0 0 0 72.89 141.35 25.6 25.6 0 0 1 2.29 1.84z m213.46 467.41H272.22a25 25 0 0 1 0-50h513.14c52.84 0 95.83-38.62 95.83-86.08v-9.36c0-47.46-43-86.07-95.83-86.07H232c-80.4 0-145.82-61-145.82-136.08S151.55 418.11 232 418.11h180.72a25 25 0 0 1 0 50H232c-52.83 0-95.82 38.61-95.82 86.07s43 86.08 95.82 86.08h553.36c80.41 0 145.83 61 145.83 136.07v9.36c0 75.03-65.42 136.08-145.83 136.08z" p-id="22746"></path></svg>`,
    subtitle: "TRANSPORTATION",
    contactinfo: "Car & Boat",
  },
  {
    icon: `<svg t="1686441671397" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33701" width="30" height="30"><path d="M231.67 650.03c3.2 4.44 8.21 6.8 13.3 6.8 3.32 0 6.66-1 9.56-3.09 7.34-5.29 9-15.52 3.71-22.86-38.28-53.12-59.37-120.48-59.37-189.67 0-163.68 115.35-296.85 257.13-296.85s257.13 133.17 257.13 296.85c0 9.04 7.33 16.37 16.37 16.37s16.37-7.33 16.37-16.37c0-87.62-29.88-170.11-84.15-232.25-26.57-30.43-57.57-54.35-92.13-71.09-35.96-17.42-74.18-26.25-113.6-26.25s-77.63 8.83-113.6 26.25c-34.56 16.74-65.56 40.66-92.13 71.09-54.26 62.14-84.15 144.62-84.15 232.25 0 38.71 5.84 76.62 17.37 112.68 11.19 34.94 27.39 67.28 48.19 96.14z" p-id="33702" fill="#676B7E"></path><path d="M661.5 704.94c-58.53 0-111.05-36.26-132.38-89.76C590.1 595.64 634.38 538.4 634.38 471V340.5c0-9.05-7.33-16.38-16.38-16.38-0.08 0-0.17 0.01-0.25 0.01-0.08 0-0.17-0.01-0.25-0.01-33.43 0-59.62-29.7-59.62-67.62 0-9.05-7.33-16.38-16.38-16.38s-16.38 7.33-16.38 16.38c0 17.28-23.59 36.4-63.11 51.14-45.78 17.08-107.05 26.48-172.51 26.48-8.85 0-16.05 7.03-16.35 15.8-0.33 1.3-0.53 2.66-0.53 4.06V471c0 66.54 43.15 123.19 102.95 143.43-16.68 37.43-45.8 53.21-90.92 77.19-34.76 16.17-59.29 33.85-76.49 55-21 25.82-31.21 57.4-31.21 96.54v52.33c0 9.14 7.41 16.56 16.56 16.56s16.56-7.41 16.56-16.56v-52.33c0-46.68 16.83-78.58 57.8-104.85 0.24-0.12 0.48-0.24 0.72-0.37 10.56-5.9 20.57-11.22 30.25-16.36 0.18-0.09 0.35-0.19 0.53-0.28 4.04-1.87 8.22-3.72 12.57-5.55 7.67-3.23 14.87-7.23 21.56-11.48l77.63 115.25c-29.13 0.73-52.61 24.64-52.61 53.94v24.02c0 7.73 6.27 14 14 14s14-6.27 14-14v-24.02c0-14.32 11.65-25.98 25.98-25.98h89.04c14.32 0 25.98 11.65 25.98 25.98v24.02c0 7.73 6.27 14 14 14s14-6.27 14-14v-24.02c0-29.76-24.21-53.98-53.98-53.98h-0.55l50.62-74.64c4.34-6.4 2.67-15.1-3.73-19.44-6.4-4.34-15.1-2.67-19.44 3.73l-59 87c-0.72 1.06-1.26 2.2-1.66 3.36h-23.51c-0.39-1.15-0.92-2.27-1.63-3.32l-86.28-128.1c0.03-0.02 0.06-0.05 0.09-0.07l3.01-2.26c0.93-0.7 1.76-1.48 2.5-2.32 19.69-15.46 35.62-34.33 46.53-61.84 5.11 0.52 10.29 0.79 15.53 0.79h59c4.46 0 8.87-0.21 13.23-0.58 11.34 31.48 31.81 59.61 58.53 80.09 30.86 23.66 67.77 36.17 106.74 36.17 9.14 0 16.56-7.41 16.56-16.56s-7.44-16.55-16.58-16.55zM424 589.62c-65.41 0-118.62-53.21-118.62-118.62V366.69c63.33-1.43 122.51-11.37 168.08-28.36 25.02-9.33 44.9-20.42 59.09-32.94 0.96-0.85 1.87-1.69 2.76-2.54 4.12 8.74 9.44 16.83 15.86 23.99 13.68 15.26 31.2 25.11 50.44 28.61V471c0 65.41-53.21 118.62-118.62 118.62H424zM940.98 640.16L791.2 546.03c-19.9-12.51-42.85-19.12-66.39-19.12l-5.7 0.01c-0.59-8.61-7.74-15.42-16.5-15.42-9.14 0-16.56 7.41-16.56 16.56V895.5c0 9.14 7.41 16.56 16.56 16.56s16.56-7.41 16.56-16.56V560.03l5.68-0.01c17.27 0 34.12 4.86 48.74 14.04l149.78 94.13c0.28 0.17 0.46 0.29 0.39 0.83s-0.28 0.6-0.59 0.69L753.2 721.15c-8.75 2.65-13.7 11.89-11.05 20.64 2.17 7.15 8.73 11.76 15.84 11.76 1.59 0 3.2-0.23 4.8-0.71l169.95-51.44c12.9-3.9 22.02-14.62 23.82-27.98s-4.18-26.09-15.58-33.26z" p-id="33703" fill="#676B7E"></path></svg>`,
    subtitle: "TOUR GUIDE",
    contactinfo: "Included",
  },
];
const denpasarBoxContent = [
  {
    icon: `<svg t="1686441140745" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9218" width="30" height="30"><path d="M848.925 1011.7H175.125c-16.3-0.1-29.4-13.3-29.4-29.6V450.7l-95.5 95.7c-11.4 11.5-30 11.5-41.4 0.1l-0.2-0.2c-11.5-11.6-11.5-30.3 0-41.8L143.925 369V125.4c0-16.3 13.1-29.5 29.4-29.6h148c16.3 0.1 29.4 13.3 29.4 29.6v36.3L491.025 21.2l0.2-0.2 0.2-0.2c0.2-0.2 0.3-0.3 0.5-0.4l0.3-0.3 0.1-0.1c0.4-0.4 0.8-0.7 1.2-1.1s0.7-0.6 1.1-0.8l0.3-0.2 0.3-0.2c0.2-0.2 0.4-0.3 0.6-0.5 0.6-0.4 1.3-0.8 1.8-1.1l0.3-0.2 0.4-0.2c0.7-0.4 1.4-0.7 2.1-1l0.2-0.1 0.4-0.2c0.7-0.3 1.5-0.6 2.1-0.8l0.2-0.1 0.4-0.1c0.7-0.2 1.5-0.4 2.1-0.5l0.2-0.1c0.2 0 0.3-0.1 0.5-0.1l2.1-0.3h0.3c0.2 0 0.3-0.1 0.5-0.1 1.9-0.2 3.8-0.2 5.8 0 0.2 0 0.3 0 0.5 0.1h0.2c0.6 0.1 1.3 0.2 2.1 0.3l0.4 0.1 0.3 0.1h0.1c0.7 0.2 1.4 0.3 2 0.5l0.3 0.1 0.2 0.1c0.8 0.2 1.5 0.5 2.1 0.8l0.4 0.2 0.2 0.1c0.6 0.3 1.3 0.6 2.1 1l0.4 0.2 0.3 0.2c0.6 0.3 1.2 0.7 1.8 1.1 0.2 0.1 0.4 0.3 0.6 0.4l0.3 0.3 0.4 0.3c0.3 0.2 0.7 0.5 1 0.7 0.3 0.3 0.8 0.7 1.1 1l0.2 0.2 0.3 0.3c0.2 0.1 0.3 0.3 0.4 0.4l0.1 0.1 0.2 0.2 482.3 483.3c11.5 11.6 11.5 30.2 0.1 41.8-11.4 11.5-29.9 11.6-41.4 0.3l-0.2-0.2-95.5-95.7V982c-0.1 16.4-13.3 29.7-29.6 29.7zM552.225 573.1h190.2c16.3 0.1 29.4 13.3 29.4 29.6v349.9h47.8V396.7L512.025 83.9 342.325 256.6l-125 127.2H615.025c16.3 0 29.6 13.2 29.6 29.6S631.425 443 615.025 443H204.525v130.2H415.025c16.3 0.1 29.4 13.3 29.4 29.6v181.4c0 16.3-13.1 29.5-29.4 29.6H204.525v138.8h318.3V602.7c0-16.3 13.1-29.6 29.4-29.6z m29.4 59.2v320.3H713.025V632.2l-131.4 0.1z m-377.1 0v122.3h181.1V632.2l-181.1 0.1zM202.725 155v155l89.2-89.4V155h-89.2z m500.5 287.9c-1.9 0-3.8-0.2-5.7-0.6-1.9-0.4-3.7-1-5.5-1.7-3.6-1.5-6.8-3.7-9.5-6.4-1.3-1.4-2.6-2.9-3.6-4.5-1.1-1.6-2-3.3-2.7-5.1-0.7-1.8-1.3-3.6-1.7-5.5-0.4-1.9-0.6-3.9-0.6-5.8 0-3.9 0.8-7.7 2.3-11.3 0.7-1.8 1.7-3.5 2.7-5.1 1.1-1.6 2.3-3.1 3.6-4.5 1.4-1.4 2.9-2.6 4.5-3.7s3.3-2 5.1-2.7c1.8-0.7 3.6-1.3 5.5-1.7 1.8-0.4 3.7-0.6 5.6-0.6 9.9-0.1 19.1 4.9 24.6 13.1 1.1 1.6 2 3.3 2.7 5.1 0.7 1.8 1.3 3.6 1.7 5.5 0.4 1.9 0.6 3.8 0.6 5.8 0 1.9-0.2 3.9-0.6 5.8-0.4 1.9-1 3.7-1.7 5.5-0.7 1.8-1.6 3.5-2.7 5.1-1.1 1.6-2.3 3.1-3.6 4.5-5.8 5.6-13.2 8.8-21 8.8z" fill="#676B7E" p-id="9219"></path></svg>`,
    subtitle: "ROOM TYPE",
    contactinfo: "Resort/Hotel",
  },
  {
    icon: `<svg t="1686441337473" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16819" width="30" height="30"><path d="M863.744 205.312h53.76v642.048h-53.76zM756.736 205.312h53.76v642.048h-53.76zM114.176 205.312h53.76v642.048H114.176zM649.728 205.312h53.76v642.048h-53.76zM221.184 205.312h53.76v642.048H221.184zM328.192 205.312h53.76v642.048H328.192z" fill="#676B7E" p-id="16820"></path><path d="M114.176 71.168v53.76h-26.624c-44.544 0-80.384 35.84-80.384 80.384v642.048c0 44.544 35.84 80.384 80.384 80.384h856.064c44.544 0 80.384-35.84 80.384-80.384V205.312c0-44.544-35.84-80.384-80.384-80.384h-26.624V71.168h-160.768v53.76h-481.28V71.168H114.176z m829.44 107.008c14.848 0 26.624 11.776 26.624 26.624v642.048c0 14.848-11.776 26.624-26.624 26.624H87.552c-14.848 0-26.624-11.776-26.624-26.624V205.312c0-14.848 11.776-26.624 26.624-26.624h856.064z" fill="#676B7E" p-id="16821"></path><path d="M435.2 205.312h53.76v642.048H435.2zM542.72 205.312h53.76v642.048H542.72z" fill="#676B7E" p-id="16822"></path></svg>`,
    subtitle: "EXCURSIONS",
    contactinfo: "14 Excursions",
  },
  {
    icon: `<svg t="1686441423723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22745" id="mx_n_1686441423724" width="30" height="30"><path d="M670.25 425.21a97.58 97.58 0 1 1 97.58-97.58 97.69 97.69 0 0 1-97.58 97.58z m0-155.16a57.58 57.58 0 1 0 57.58 57.58 57.64 57.64 0 0 0-57.58-57.58z m0 327.51a25 25 0 0 1-16.36-6.09l-114.35-99a223.26 223.26 0 0 1-92.82-181.31 223.53 223.53 0 1 1 421.41 104A225.28 225.28 0 0 1 801 492.48l-114.35 99a24.91 24.91 0 0 1-16.4 6.08z m-98.35-143.2l98.35 85.14 98.37-85.15a23.88 23.88 0 0 1 2.27-1.83 174 174 0 0 0 72.88-141.35c0-95.68-77.84-173.52-173.52-173.52s-173.53 77.84-173.53 173.52a174 174 0 0 0 72.89 141.35 25.6 25.6 0 0 1 2.29 1.84z m213.46 467.41H272.22a25 25 0 0 1 0-50h513.14c52.84 0 95.83-38.62 95.83-86.08v-9.36c0-47.46-43-86.07-95.83-86.07H232c-80.4 0-145.82-61-145.82-136.08S151.55 418.11 232 418.11h180.72a25 25 0 0 1 0 50H232c-52.83 0-95.82 38.61-95.82 86.07s43 86.08 95.82 86.08h553.36c80.41 0 145.83 61 145.83 136.07v9.36c0 75.03-65.42 136.08-145.83 136.08z" p-id="22746"></path></svg>`,
    subtitle: "TRANSPORTATION",
    contactinfo: "Car & Boat",
  },
  {
    icon: `<svg t="1686441671397" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33701" width="30" height="30"><path d="M231.67 650.03c3.2 4.44 8.21 6.8 13.3 6.8 3.32 0 6.66-1 9.56-3.09 7.34-5.29 9-15.52 3.71-22.86-38.28-53.12-59.37-120.48-59.37-189.67 0-163.68 115.35-296.85 257.13-296.85s257.13 133.17 257.13 296.85c0 9.04 7.33 16.37 16.37 16.37s16.37-7.33 16.37-16.37c0-87.62-29.88-170.11-84.15-232.25-26.57-30.43-57.57-54.35-92.13-71.09-35.96-17.42-74.18-26.25-113.6-26.25s-77.63 8.83-113.6 26.25c-34.56 16.74-65.56 40.66-92.13 71.09-54.26 62.14-84.15 144.62-84.15 232.25 0 38.71 5.84 76.62 17.37 112.68 11.19 34.94 27.39 67.28 48.19 96.14z" p-id="33702" fill="#676B7E"></path><path d="M661.5 704.94c-58.53 0-111.05-36.26-132.38-89.76C590.1 595.64 634.38 538.4 634.38 471V340.5c0-9.05-7.33-16.38-16.38-16.38-0.08 0-0.17 0.01-0.25 0.01-0.08 0-0.17-0.01-0.25-0.01-33.43 0-59.62-29.7-59.62-67.62 0-9.05-7.33-16.38-16.38-16.38s-16.38 7.33-16.38 16.38c0 17.28-23.59 36.4-63.11 51.14-45.78 17.08-107.05 26.48-172.51 26.48-8.85 0-16.05 7.03-16.35 15.8-0.33 1.3-0.53 2.66-0.53 4.06V471c0 66.54 43.15 123.19 102.95 143.43-16.68 37.43-45.8 53.21-90.92 77.19-34.76 16.17-59.29 33.85-76.49 55-21 25.82-31.21 57.4-31.21 96.54v52.33c0 9.14 7.41 16.56 16.56 16.56s16.56-7.41 16.56-16.56v-52.33c0-46.68 16.83-78.58 57.8-104.85 0.24-0.12 0.48-0.24 0.72-0.37 10.56-5.9 20.57-11.22 30.25-16.36 0.18-0.09 0.35-0.19 0.53-0.28 4.04-1.87 8.22-3.72 12.57-5.55 7.67-3.23 14.87-7.23 21.56-11.48l77.63 115.25c-29.13 0.73-52.61 24.64-52.61 53.94v24.02c0 7.73 6.27 14 14 14s14-6.27 14-14v-24.02c0-14.32 11.65-25.98 25.98-25.98h89.04c14.32 0 25.98 11.65 25.98 25.98v24.02c0 7.73 6.27 14 14 14s14-6.27 14-14v-24.02c0-29.76-24.21-53.98-53.98-53.98h-0.55l50.62-74.64c4.34-6.4 2.67-15.1-3.73-19.44-6.4-4.34-15.1-2.67-19.44 3.73l-59 87c-0.72 1.06-1.26 2.2-1.66 3.36h-23.51c-0.39-1.15-0.92-2.27-1.63-3.32l-86.28-128.1c0.03-0.02 0.06-0.05 0.09-0.07l3.01-2.26c0.93-0.7 1.76-1.48 2.5-2.32 19.69-15.46 35.62-34.33 46.53-61.84 5.11 0.52 10.29 0.79 15.53 0.79h59c4.46 0 8.87-0.21 13.23-0.58 11.34 31.48 31.81 59.61 58.53 80.09 30.86 23.66 67.77 36.17 106.74 36.17 9.14 0 16.56-7.41 16.56-16.56s-7.44-16.55-16.58-16.55zM424 589.62c-65.41 0-118.62-53.21-118.62-118.62V366.69c63.33-1.43 122.51-11.37 168.08-28.36 25.02-9.33 44.9-20.42 59.09-32.94 0.96-0.85 1.87-1.69 2.76-2.54 4.12 8.74 9.44 16.83 15.86 23.99 13.68 15.26 31.2 25.11 50.44 28.61V471c0 65.41-53.21 118.62-118.62 118.62H424zM940.98 640.16L791.2 546.03c-19.9-12.51-42.85-19.12-66.39-19.12l-5.7 0.01c-0.59-8.61-7.74-15.42-16.5-15.42-9.14 0-16.56 7.41-16.56 16.56V895.5c0 9.14 7.41 16.56 16.56 16.56s16.56-7.41 16.56-16.56V560.03l5.68-0.01c17.27 0 34.12 4.86 48.74 14.04l149.78 94.13c0.28 0.17 0.46 0.29 0.39 0.83s-0.28 0.6-0.59 0.69L753.2 721.15c-8.75 2.65-13.7 11.89-11.05 20.64 2.17 7.15 8.73 11.76 15.84 11.76 1.59 0 3.2-0.23 4.8-0.71l169.95-51.44c12.9-3.9 22.02-14.62 23.82-27.98s-4.18-26.09-15.58-33.26z" p-id="33703" fill="#676B7E"></path></svg>`,
    subtitle: "TOUR GUIDE",
    contactinfo: "Not Included",
  },
];
// 2. loop through array and create boxes
let agentContact_Container = document.querySelector(".agentContact_Container");
let agentBoxContainer = createElement("div");

agentBoxContainer.classList = "agentBoxContainer";
agentContact_Container.appendChild(agentBoxContainer);

function createAgentContactBox(content) {
  let { icon, subtitle, contactinfo } = content;

  let agentContactBox = createElement("div");
  agentContactBox.classList = "agentContactBox";

  let circleIcon = createElement("div");
  circleIcon.classList = "circleIcon";
  agentContactBox.appendChild(circleIcon);
  circleIcon.innerHTML = icon;

  let agentBoxsubTitle = createElement("div");
  agentBoxsubTitle.classList = "agentBoxsubTitle";
  agentContactBox.appendChild(agentBoxsubTitle);
  agentBoxsubTitle.innerText = subtitle;

  let agentinfo = createElement("div");
  agentinfo.classList = "agentinfo";
  agentContactBox.appendChild(agentinfo);
  agentinfo.innerHTML = contactinfo;
  //   return agentContactBox, verticalLine;

  return agentContactBox;
}

function createVerticalLine() {
  let verticalLine = createElement("div");
  verticalLine.classList = "verticalLine";
  return verticalLine;
}

// agentBoxContent.map((eachBoxContent) => {
//   const eachCard = createAgentContactBox(eachBoxContent);
//   agentBoxContainer.appendChild(eachCard);
//   agentBoxContainer.appendChild(createVerticalLine());
// });

function renderBoxes(content) {
  content.map((eachBoxContent) => {
    const eachCard = createAgentContactBox(eachBoxContent);
    agentBoxContainer.appendChild(eachCard);
    agentBoxContainer.appendChild(createVerticalLine());
  });
}

//Waterfall append pictures
// let guide_waterfall = document.querySelector(".guide_waterfall");
// const gridpictures = [
//   { image: "url(./assets/t1.jpeg)" },
//   { image: "url(./assets/t2.jpeg)" },
//   { image: "url(./assets/t3.jpeg)" },
//   { image: "url(./assets/t4.jpeg)" },
//   { image: "url(./assets/t5.jpeg)" },
// ];
// function creategriditem(content) {
//   let { image } = content;
//   let griditem = createElement("li");
//   griditem.classList = "griditem";
//   guide_waterfall.appendChild(griditem);
//   griditem.style.backgroundImage = image;
//   return griditem;
// }
// gridpictures.map((eachimage) => {
//   const eachimageCard = creategriditem(eachimage);
//   guide_waterfall.appendChild(eachimageCard);
// });

// const griditem1 = document.querySelector(".griditem");
// griditem1.classList.add("griditem1");
let titleA_left = document.querySelector(".titleA_left");
let titleA_right = document.querySelector(".titleA_right");
//改变背景图片

const picturelist = [
  "url(./assets/c4.jpeg)",

  " url(./assets/peopleinbeach.jpg)",

  " url(./assets/ZAK.jpg)",
];
const picturelist2 = [
  "url(./assets/Gett.jpg)",

  " url(./assets/siwa.jpeg)",

  " url(./assets/sharm.jpg)",
];
const picturelist3 = [
  "url(./assets/b3.jpeg)",

  " url(./assets/c4.jpeg)",

  " url(./assets/b1.jpeg)",
];
let pictureIndex = 0;

function increment(content) {
  if (pictureIndex < content.length - 1) {
    pictureIndex++;
  } else {
    pictureIndex = 0;
  }
  hero.style.backgroundImage = content[pictureIndex];
}
function decrement(content) {
  if (pictureIndex > 0) {
    pictureIndex--;
  } else {
    pictureIndex = 2;
  }
  hero.style.backgroundImage = content[pictureIndex];
}
titleA_right.addEventListener("click", () => increment());
titleA_left.addEventListener("click", () => decrement());

if (currentkey === "bahariya.html" || currentkey === "bahariya") {
  renderBoxes(oasisBoxContent);
  hero.style.backgroundImage = picturelist2[0];
  titleA_right.addEventListener("click", () => increment(picturelist2));
  titleA_left.addEventListener("click", () => decrement(picturelist2));
} else if (currentkey === "denpasar.html" || currentkey === "denpasar") {
  renderBoxes(denpasarBoxContent);
  hero.style.backgroundImage = picturelist3[0];
  titleA_right.addEventListener("click", () => increment(picturelist3));
  titleA_left.addEventListener("click", () => decrement(picturelist3));
} else if (
  currentkey === "thessaloniki.html" ||
  currentkey === "thessaloniki"
) {
  renderBoxes(agentBoxContent);
  hero.style.backgroundImage = picturelist[0];
  titleA_right.addEventListener("click", () => increment(picturelist));
  titleA_left.addEventListener("click", () => decrement(picturelist));
}

let inquire = document.querySelector(".inquire");
let inquireContainer = document.querySelector(".inquireContainer");
let inputinfo = document.querySelector(".inputinfo");
let inquiresub = document.querySelector(".inquiresub");
let inquireTitle = document.querySelector(".inquireTitle");

inquire.addEventListener("click", function () {
  inputinfo.style.display = "none";
  inquireContainer.style.display = "block";
});
