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
let currentUrl = window.location.href;
let currentsplit = currentUrl.split("/");
let currentkey = currentsplit[currentsplit.length - 1];

// Hidden Toptitle scroll function
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  //   console.log(scrollPosition);
  //   console.log(hiddentopTitleContent.style.height);
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
      //   console.log("butt clicked", e.target);
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
};
//HamburgerIcon switch
let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger");
let hamburgerContainer = document.querySelector(".hamburgerContainer");
const svghamburger = `<svg class="hamburger" t="1684005706799" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2380" width="20" height="20"><path d="M55.466667 123.733333h917.333333v42.666667H55.466667zM55.466667 490.666667h917.333333v42.666666H55.466667zM55.466667 857.6h917.333333v42.666667H55.466667z" fill="#283F59" p-id="2381"></path></svg>`;
const svgclose = `<svg class="hamburger" t="1684005801533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3704" width="60" height="60"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="3705" fill="#283F59"></path></svg>`;

hamburgerContainer.addEventListener("click", function () {
  //   console.log(sidebar.classList);
  if (sidebar.classList.length === 2) {
    hamburgerContainer.innerHTML = svghamburger;
  } else {
    hamburgerContainer.innerHTML = svgclose;
  }
  sidebar.classList.toggle("open");
});

// DESTINATIONBox CLICK EVENT
let destination_options = document.querySelector(".destination_options");
let hidden_destinationsBox = document.querySelector(".hidden_destinationsBox");
let updownicon = document.querySelectorAll(".updownicon");
const svgup = `<svg t="1684274635165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2082" width="10" height="10"><path d="M511.965867 256c-3.456-0.042667-6.741333 0.554667-10.112 1.322667-1.450667 0.341333-2.858667 0.554667-4.266667 1.066666-6.954667 2.304-13.525333 5.717333-18.688 11.477334l-382.762667 427.178666a42.461867 42.461867 0 0 0 3.754667 60.288c17.834667 15.573333 45.312 13.909333 61.098667-3.712l350.976-391.722666 351.061333 391.722666c15.786667 17.621333 43.264 19.285333 61.098667 3.712a42.461867 42.461867 0 0 0 3.754666-60.288L545.024 269.866667c-5.162667-5.76-11.733333-9.173333-18.688-11.477334-1.408-0.512-2.816-0.725333-4.266667-1.066666-3.370667-0.768-6.656-1.365333-10.112-1.322667" fill="#e6e6e6" p-id="2083"></path></svg>`;
const svgdown = `<svg t="1684273795786" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="10" height="10"><path d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667" fill="#ffffff" p-id="2746"></path></svg>`;
let detinationBoxEvent = function () {
  //   console.log(destination_options.classList);
  destination_options.classList.toggle("open");
  if (destination_options.classList.length === 2) {
    updownicon[1].innerHTML = svgup;
  } else {
    updownicon[1].innerHTML = svgdown;
  }
};
destinationsBox.addEventListener("click", () => detinationBoxEvent());

//创建一个function专门用于createelement
function createElement(element) {
  return document.createElement(element);
}
//const France版面有哪些数据
//左半部分：照片
let featured = document.querySelector(".featured");

const featuredFrance = [
  {
    image: "url(./assets/frenchRivieranight.jpg)",
    title: "FEATURED VACATION",
    location: "French Riviera",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/Bonifacio.jpg)",
    title: "FEATURED VACATION",
    location: "French Riviera",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/Carcassonne.jpg)",
    title: "FEATURED VACATION",
    location: "French Riviera",
    viewV: "VIEW VACATION",
  },
];
const featuredIndonesia = [
  {
    image: "url(./assets/Bali.jpg)",
    title: "FEATURED VACATION",
    location: "Denpasar",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/1p.jpg)",
    title: "FEATURED VACATION",
    location: "Denpasar",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/bali2.jpg)",
    title: "FEATURED VACATION",
    location: "Denpasar",
    viewV: "VIEW VACATION",
  },
];
const featuredGreece = [
  {
    image: "url(./assets/greecevirtual.jpg)",
    title: "FEATURED VACATION",
    location: "Santorini",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/beachpeople.jpg)",
    title: "FEATURED VACATION",
    location: "Santorini",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/Greecepicture.jpg)",
    title: "FEATURED VACATION",
    location: "Santorini",
    viewV: "VIEW VACATION",
  },
];
const featuredEgypt = [
  {
    image: "url(./assets/bahariya.jpeg)",
    title: "FEATURED VACATION",
    location: "Bahariya Oasis",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/siwa.jpeg)",
    title: "FEATURED VACATION",
    location: "Bahariya Oasis",
    viewV: "VIEW VACATION",
  },
  {
    image: "url(./assets/Gett.jpg)",
    title: "FEATURED VACATION",
    location: "Bahariya Oasis",
    viewV: "VIEW VACATION",
  },
];
// createfeaturedVacation(featuredFrance);

function createfeaturedVacation(content) {
  let { image, title, location, viewV } = content;
  //创建container用于存放image
  let featuredContainer = createElement("div");
  featuredContainer.classList = "featuredContainer";
  // featured.appendChild(featuredContainer);

  //创建 左右按钮 Container，存放左右 按钮

  let svgright = `<svg t="1686095138983" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2354" width="20" height="20"><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" fill="#081c3a" p-id="2355"></path></svg>`;
  let svgleft = `<svg t="1686095214433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3486" width="20" height="20"><path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="#081c3a" p-id="3487"></path></svg>`;

  let featuredButtonContainer = createElement("div");
  featuredButtonContainer.classList = "featuredButtonContainer";
  featuredContainer.appendChild(featuredButtonContainer);

  //右按钮
  let f_rightButt = createElement("div");
  f_rightButt.classList = "f_rightButt";
  featuredButtonContainer.appendChild(f_rightButt);
  f_rightButt.innerHTML = svgright;
  //左按钮
  let f_leftButt = createElement("div");
  f_leftButt.classList = "f_leftButt";
  featuredButtonContainer.appendChild(f_leftButt);
  f_leftButt.innerHTML = svgleft;

  //创建全部为text的container，存放title，location，viewV
  let allTextContent = createElement("div");
  allTextContent.classList = "allTextContent";
  featuredContainer.appendChild(allTextContent);
  //创建title div,放进alltextcontent里
  let featuredTitle = createElement("div");
  featuredTitle.classList = "featuredTitle";
  allTextContent.appendChild(featuredTitle);
  //创建location div,放进alltextcontent里
  let featuredLocation = createElement("div");
  featuredLocation.classList = "featuredLocation";
  allTextContent.appendChild(featuredLocation);
  //创建viewV div,放进alltextcontent里
  let featuredView = createElement("div");
  featuredView.classList = "featuredView";
  allTextContent.appendChild(featuredView);

  //把featuredFrance对象里的东西分别放进
  // featuredContainer.style.backgroundImage = image;
  // featuredTitle.innerHTML = title;
  // featuredLocation.innerHTML = location;
  // featuredView.innerHTML = viewV;
  //点击 右按钮时，

  if (
    currentkey === "CovillaDest_France.html" ||
    currentkey === "covilladest_france"
  ) {
    featuredContainer.style.backgroundImage = featuredFrance[0].image;
    featuredTitle.innerHTML = featuredFrance[0].title;
    featuredLocation.innerHTML = featuredFrance[0].location;
    featuredView.innerHTML = featuredFrance[0].viewV;
    f_rightButt.addEventListener("click", () => increment(featuredFrance));
    f_leftButt.addEventListener("click", () => decrement(featuredFrance));
  } else if (
    currentkey === "CovillaDest_Indonesia.html" ||
    currentkey === "covilladest_indonesia"
  ) {
    featuredContainer.style.backgroundImage = featuredIndonesia[0].image;
    featuredTitle.innerHTML = featuredIndonesia[0].title;
    featuredLocation.innerHTML = featuredIndonesia[0].location;
    featuredView.innerHTML = featuredIndonesia[0].viewV;
    f_rightButt.addEventListener("click", () => increment(featuredIndonesia));
    f_leftButt.addEventListener("click", () => decrement(featuredIndonesia));
  } else if (
    currentkey === "CovillaDest_Greece.html" ||
    currentkey === "covilladest_greece"
  ) {
    featuredContainer.style.backgroundImage = featuredGreece[0].image;
    featuredTitle.innerHTML = featuredGreece[0].title;
    featuredLocation.innerHTML = featuredGreece[0].location;
    featuredView.innerHTML = featuredGreece[0].viewV;
    f_rightButt.addEventListener("click", () => increment(featuredGreece));
    f_leftButt.addEventListener("click", () => decrement(featuredGreece));
  } else if (
    currentkey === "CovillaDest_Egypt.html" ||
    currentkey === "covilladest_egypt"
  ) {
    featuredContainer.style.backgroundImage = featuredEgypt[0].image;
    featuredTitle.innerHTML = featuredEgypt[0].title;
    featuredLocation.innerHTML = featuredEgypt[0].location;
    featuredView.innerHTML = featuredEgypt[0].viewV;
    f_rightButt.addEventListener("click", () => increment(featuredEgypt));
    f_leftButt.addEventListener("click", () => decrement(featuredEgypt));
  }

  // featuredContainer.style.backgroundImage = featuredFrance[0].image;
  // featuredTitle.innerHTML = featuredFrance[0].title;
  // featuredLocation.innerHTML = featuredFrance[0].location;
  // featuredView.innerHTML = featuredFrance[0].viewV;
  let imageIndex = 0;
  function increment(content) {
    if (imageIndex < content.length - 1) {
      imageIndex++;
    } else {
      imageIndex = 0;
    }

    featuredContainer.style.backgroundImage = content[imageIndex].image;
    featuredTitle.innerHTML = content[imageIndex].title;
    featuredLocation.innerHTML = content[imageIndex].location;
    featuredView.innerHTML = content[imageIndex].viewV;
  }
  function decrement(content) {
    if (imageIndex > 0) {
      imageIndex--;
    } else {
      imageIndex = 2;
    }

    featuredContainer.style.backgroundImage = content[imageIndex].image;
    featuredTitle.innerHTML = content[imageIndex].title;
    featuredLocation.innerHTML = content[imageIndex].location;
    featuredView.innerHTML = content[imageIndex].viewV;
  }

  return featuredContainer;
}
function featuredVacation(eachfeatured) {
  const eachfeaturedlist = createfeaturedVacation(eachfeatured[0]);
  featured.appendChild(eachfeaturedlist);
}

const franceCity = [
  {
    imag: "url(./assets/frenchRivieranight.jpg)",
    subtitle: "EUROPE",
    title: "Bonifacio",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$14 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/Roscoff.jpg)",
    subtitle: "EUROPE",
    title: "Brittany",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$36 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/Carca.jpeg)",
    subtitle: "EUROPE",
    title: "Carcassonne",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$39 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
  {
    imag: "url(./assets/cha.jpg)",
    subtitle: "EUROPE",
    title: "Chamonix",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$26 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/saint.jpeg)",
    subtitle: "EUROPE",
    title: "Saint-Tropez",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$31 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
  {
    imag: "url(./assets/frenchRivieranight.jpg)",
    subtitle: "EUROPE",
    title: "French Riviera",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$49 00",
    detail: "DETAILS",
  },
];
const indonesiaCity = [
  {
    imag: "url(./assets/lakesailing.jpg)",
    subtitle: "ASIA",
    title: "Canggu",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$14 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/sharm.jpg)",
    subtitle: "ASIA",
    title: "Komodo",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$36 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/Carca.jpeg)",
    subtitle: "ASIA",
    title: "Penida Island",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$39 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
  {
    imag: "url(./assets/cha.jpg)",
    subtitle: "ASIA",
    title: "Gili Islands",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$26 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/saint.jpeg)",
    subtitle: "ASIA",
    title: "Denpasar",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$31 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
  {
    imag: "url(./assets/frenchRivieranight.jpg)",
    subtitle: "ASIA",
    title: "Ubud",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$49 00",
    detail: "DETAILS",
  },
];
const greeceCity = [
  {
    imag: "url(./assets/greecevirtual.jpg)",
    subtitle: "EUROPE",
    title: "Palaiokastritsa",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$14 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/Greecenight.jpg)",
    subtitle: "EUROPE",
    title: "Meteora",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$36 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
  {
    imag: "url(./assets/sunset.jpg)",
    subtitle: "EUROPE",
    title: " Thessaloniki",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$39 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/cha.jpg)",
    subtitle: "EUROPE",
    title: "Zakynthos",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$26 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/waterfall.jpg)",
    subtitle: "EUROPE",
    title: "Mykonos",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$31 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
  {
    imag: "url(./assets/Family004.jpeg)",
    subtitle: "EUROPE",
    title: "Santorini",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$49 00",
    detail: "DETAILS",
  },
];
const egyptCity = [
  {
    imag: "url(./assets/Egypt.jpg)",
    subtitle: "AFRICA",
    title: "Bahariya Oasis",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$14 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
  {
    imag: "url(./assets/EgyptSimbel.optimal.jpg)",
    subtitle: "AFRICA",
    title: "Meteora",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$36 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/hiking.jpg)",
    subtitle: "AFRICA",
    title: " Thessaloniki",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$39 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/cha.jpg)",
    subtitle: "AFRICA",
    title: "El Gouna",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$26 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/ubud.jpeg)",
    subtitle: "AFRICA",
    title: "Alexandria",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$31 00",
    detail: "DETAILS",
  },
  {
    imag: "url(./assets/Roscoff.jpg)",
    subtitle: "AFRICA",
    title: "Marsa Matruh",
    textarea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    startat: "STARTS AT",
    price: "$49 00",
    detail: "DETAILS",
    dealtext: "DEAL",
  },
];
let vacationCardsContainer = document.querySelector(".vacationCardsContainer");
function createVacationCard(content) {
  let { imag, subtitle, title, textarea, startat, price, detail, dealtext } =
    content;
  //创建vacationCard,
  let vacationCard = createElement("div");
  vacationCard.classList = "vacationCard";
  vacationCardsContainer.appendChild(vacationCard);

  //创建vacation image
  let vaca_img = createElement("div");
  vaca_img.classList = "vaca_img";
  vacationCard.appendChild(vaca_img);
  vaca_img.style.backgroundImage = imag;

  // console.log(dealtext);
  if (dealtext === "DEAL") {
    //创建vaca-img里面的dealContainer
    let vaca_dealContainer = createElement("div");
    vaca_dealContainer.classList = "vaca_dealContainer";
    vaca_img.appendChild(vaca_dealContainer);

    //创建dealcontainer里面的白圈
    let vaca_circle = createElement("div");
    vaca_circle.classList = "vaca_circle";
    vaca_dealContainer.appendChild(vaca_circle);
    //创建dealcontainer里面的DEAL

    let deal = createElement("div");
    deal.classList = "deal";
    vaca_dealContainer.appendChild(deal);
    deal.innerHTML = dealtext;
  }

  //创建vacation infobox
  let vaca_info = createElement("div");
  vaca_info.classList = "vaca_info";
  vacationCard.appendChild(vaca_info);

  //创建card里面的vaca_eru,vaca_city, textcontent, pricing, starts at, price, detail 在vaca_info里
  let vaca_eru = createElement("div");
  vaca_eru.classList = "vaca_eru";
  vaca_info.appendChild(vaca_eru);
  vaca_eru.innerHTML = subtitle;

  let vaca_city = createElement("div");
  vaca_city.classList = "vaca_city";
  vaca_info.appendChild(vaca_city);
  vaca_city.innerHTML = title;

  let vaca_textcontent = createElement("div");
  vaca_textcontent.classList = "vaca_textcontent";
  vaca_info.appendChild(vaca_textcontent);
  vaca_textcontent.innerHTML = textarea;

  let vaca_pricingContainer = createElement("div");
  vaca_pricingContainer.classList = "vaca_pricingContainer";
  vaca_info.appendChild(vaca_pricingContainer);

  //创建 starts at, price, detail 在vaca_pricingContainer里
  let vaca_pricing = createElement("div");
  vaca_pricing.classList = "vaca_pricing";
  vaca_pricingContainer.appendChild(vaca_pricing);

  let vaca_startat = createElement("div");
  vaca_startat.classList = "vaca_startat";
  vaca_pricing.appendChild(vaca_startat);
  vaca_startat.innerHTML = startat;

  let vaca_price = createElement("div");
  vaca_price.classList = "vaca_price";
  vaca_pricing.appendChild(vaca_price);
  vaca_price.innerHTML = price;

  let vaca_detail = createElement("div");
  vaca_detail.classList = "vaca_detail";
  vaca_pricingContainer.appendChild(vaca_detail);
  vaca_detail.innerHTML = detail;

  return vacationCard;
}
function city(eachcities) {
  eachcities.map((eachcity) => {
    // console.log(eachcity);
    const eachcitycard = createVacationCard(eachcity);
    vacationCardsContainer.appendChild(eachcitycard);
  });
}

//创建other vacations
let othervacationContainer = document.querySelector(".othervacationContainer");
let citylistContainer = document.querySelector(".citylistContainer");
//创建 城市与国家 listitem
const france_othervacations1 = [
  {
    imag: "url(./assets/frenchRivieranight.jpg)",
    city: "Sahl Hasheesh",
    country: "EGYPT",
  },

  {
    imag: "url(./assets/cha.jpg)",
    city: "Thessaloniki",
    country: "GREECE",
  },

  {
    imag: "url(./assets/Egypt.jpg)",
    city: "Sharm El-Sheikh",
    country: "EGYPT",
  },
  {
    imag: "url(./assets/saint.jpeg)",
    city: "Meteora",
    country: "GREECE",
  },
  {
    imag: "url(./assets/Carca.jpeg)",
    city: "Alexandria",
    country: "EGYPT",
  },
  {
    imag: "url(./assets/Greece.jpg)",
    city: "Santorini",
    country: "GREECE",
  },
];
const indonesia_othervacations1 = [
  {
    imag: "url(./assets/sharm.jpg)",
    city: "Sharm El-Sheikh",
    country: "EGYPT",
  },

  {
    imag: "url(./assets/ubud.jpeg)",
    city: "Ubud",
    country: "INDONESIA",
  },

  {
    imag: "url(./assets/Egypt.jpg)",
    city: "El Gouna",
    country: "EGYPT",
  },
  {
    imag: "url(./assets/saint.jpeg)",
    city: "Komodo",
    country: "INDONESIA",
  },
  {
    imag: "url(./assets/ZAK.jpg)",
    city: "Zakynthos",
    country: "GREECE",
  },
  {
    imag: "url(./assets/Greece.jpg)",
    city: "Marsa Matruh",
    country: "EGYPT",
  },
];
const greece_othervacations = [
  {
    imag: "url(./assets/10d.jpg)",
    city: "Carcassonne",
    country: "FRANCE",
  },

  {
    imag: "url(./assets/1k.jpg)",
    city: "Komodo",
    country: "INDONESIA",
  },

  {
    imag: "url(./assets/1r.jpg)",
    city: "French Riviera",
    country: "FRANCE",
  },
  {
    imag: "url(./assets/efca64a7.jpg)",
    city: "Zakynthos",
    country: "GREECE",
  },
  {
    imag: "url(./assets/Greecenight.jpg",
    city: "Meteora",
    country: "GREECE",
  },
  {
    imag: "url(./assets/1Karnak.jpg)",
    city: "Sahl Hasheesh",
    country: "EGYPT",
  },
];
const egypt_othervacations = [
  {
    imag: "url(./assets/10d.jpg)",
    city: "Canggu",
    country: "INDONESIA",
  },

  {
    imag: "url(./assets/1k.jpg)",
    city: "Saint-Tropez",
    country: "FRANCE",
  },

  {
    imag: "url(./assets/1r.jpg)",
    city: "Penida Island",
    country: "INDONESIA",
  },
  {
    imag: "url(./assets/efca64a7.jpg)",
    city: "Denpasar",
    country: "INDONESIA",
  },
  {
    imag: "url(./assets/Greecenight.jpg",
    city: "Sharm El-Sheikh",
    country: "EGYPT",
  },
  {
    imag: "url(./assets/1Karnak.jpg)",
    city: "Mykonos",
    country: "GREECE",
  },
];
function createcitylist1(content) {
  // let { imag2, city2, country2 } = content2;
  let { imag, city, country } = content;
  const innerright = `<svg t="1686253711590" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2353" width="15" height="15"><path d="M680.96 536.32L294.826667 149.76C281.6 136.533333 281.6 115.2 294.826667 101.546667c13.226667-13.226667 34.986667-13.226667 48.213333 0l386.133333 386.133333c13.226667 13.226667 13.226667 34.986667 0 48.213333-13.226667 13.653333-34.986667 13.653333-48.213333 0.426667z" fill="#e6e6e6" p-id="2354"></path><path d="M294.826667 874.24l386.133333-386.133333c13.226667-13.226667 34.986667-13.226667 48.213333 0 13.226667 13.226667 13.226667 34.986667 0 48.213333l-386.133333 386.133333c-13.226667 13.226667-34.986667 13.226667-48.213333 0-13.226667-13.653333-13.226667-34.986667 0-48.213333z" fill="#e6e6e6" p-id="2355"></path></svg>`;

  //创建citiescontainer 用于存放两个CITYLIST ITEM
  let citiesContainer1 = createElement("div");
  citiesContainer1.classList = "citiesContainer1";
  citylistContainer.appendChild(citiesContainer1);

  //创建citylist item，用于日后存放城市 国家 和圈圈
  let citylistItem = createElement("div");
  citylistItem.classList = "citylistItem";
  citiesContainer1.appendChild(citylistItem);

  //创建citycountry框用于存放城市名字和国家名字
  let citycountry = createElement("div");
  citycountry.classList = "citycountry";
  citylistItem.appendChild(citycountry);

  //城市名
  let citynameE = createElement("div");
  citynameE.classList = "citynameE";
  citycountry.appendChild(citynameE);
  citynameE.innerHTML = city;

  //国家名
  let countryname = createElement("div");
  countryname.classList = "countryname";
  citycountry.appendChild(countryname);
  countryname.innerHTML = country;
  //创建圆圈白色
  let citycircle = createElement("div");
  citycircle.classList = "citycircle";
  citycircle.innerHTML = innerright;
  citylistItem.appendChild(citycircle);
  citycircle.style.display = "none";

  citiesContainer1.addEventListener("mouseover", function () {
    citylistItem.style.backgroundImage = imag;
    citycircle.style.display = "flex";
  });
  citiesContainer1.addEventListener("mouseleave", function () {
    citylistItem.style.backgroundImage = "none";
    citycircle.style.display = "none";
  });

  //放鼠标移入的时候，才呈现背景图片 和圆圈
  return citylistContainer;
}
function renderOlocation(otherlocation) {
  otherlocation.map((eachcitycountry) => {
    const eachcitycountrylist = createcitylist1(eachcitycountry);

    othervacationContainer.appendChild(eachcitycountrylist);
  });
}

if (
  currentkey === "CovillaDest_France.html" ||
  currentkey === "covilladest_france"
) {
  featuredVacation(featuredFrance);
  renderOlocation(france_othervacations1);
  city(franceCity);
} else if (
  currentkey === "CovillaDest_Indonesia.html" ||
  currentkey === "covilladest_indonesia"
) {
  featuredVacation(featuredIndonesia);
  renderOlocation(indonesia_othervacations1);
  city(indonesiaCity);
} else if (
  currentkey === "CovillaDest_Greece.html" ||
  currentkey === "covilladest_greece"
) {
  featuredVacation(featuredGreece);
  renderOlocation(greece_othervacations);
  city(greeceCity);
} else if (
  currentkey === "CovillaDest_Egypt.html" ||
  currentkey === "covilladest_egypt"
) {
  featuredVacation(featuredEgypt);
  renderOlocation(egypt_othervacations);
  city(egyptCity);
}
