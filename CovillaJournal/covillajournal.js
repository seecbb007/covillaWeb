let hiddentopTitleContent = document.querySelector(".hidden_topTitleContnet");
let hiddenCovilla = document.querySelector(".hiddenCovilla");
let hiddenTopSelections = document.querySelector(".hiddenTopSelections");
let hiddenDestinationBox = document.querySelector(".hidden_destinationsBox");
let covilla = document.querySelector(".covilla");
let destinationsBox = document.querySelector(".destinationsBox");
let topSelections = document.querySelector(".TopSelections");
let navButt = document.querySelectorAll(".navButt");
let navButtArray = Array.from(navButt);
let journalnext = document.querySelector(".journalnext");
let six_journalGroup = document.querySelector(".six_journalGroup");
let version2_journalGroup = document.querySelector(".version2_journalGroup");
let LOdisplayContainer = document.querySelector(".LOdisplayContainer");

window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;

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
//journalnext

journalnext.addEventListener("click", function (e) {
  if (e.target.innerHTML === "NEXT &gt;") {
    six_journalGroup.style.display = "none";
    version2_journalGroup.style.display = "flex";
    journalnext.innerHTML = "< Previous";
    LOdisplayContainer.style.height = "1000px";
    window.scrollTo({
      top: 1500,
      left: 0,
      behavior: "smooth",
    });
  } else {
    six_journalGroup.style.display = "block";
    version2_journalGroup.style.display = "none";
    LOdisplayContainer.style.height = "1600px";
    journalnext.innerHTML = "NEXT &gt;";
    window.scrollTo({
      top: 1500,
      left: 0,
      behavior: "smooth",
    });
  }
});
