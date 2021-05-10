const changeToSection1 = (event) => {
  if (!homeContent2.classList.contains("homepage-hidden")) {
    homeContent2.classList.toggle("homepage-hidden");

    homeContent1.classList.toggle("homepage-hidden");
  }

  if (!homeContent3.classList.contains("homepage-hidden")) {
    homeContent3.classList.toggle("homepage-hidden");

    homeContent1.classList.toggle("homepage-hidden");
  }

  if (!homeContent4.classList.contains("homepage-hidden")) {
    homeContent4.classList.toggle("homepage-hidden");

    homeContent1.classList.toggle("homepage-hidden");
  }

  console.log("Hello");

  homeButton1.style.opacity = 1;
  homeButton2.style.opacity = 0.5;
  homeButton3.style.opacity = 0.5;
  homeButton4.style.opacity = 0.5;
}


const changeToSection2 = (event) => {
  if (!homeContent1.classList.contains("homepage-hidden")) {
    homeContent1.classList.toggle("homepage-hidden");

    homeContent2.classList.toggle("homepage-hidden");
  }

  if (!homeContent3.classList.contains("homepage-hidden")) {
    homeContent3.classList.toggle("homepage-hidden");

    homeContent2.classList.toggle("homepage-hidden");
  }

  if (!homeContent4.classList.contains("homepage-hidden")) {
    homeContent4.classList.toggle("homepage-hidden");

    homeContent2.classList.toggle("homepage-hidden");
  }

  homeButton1.style.opacity = 0.5;
  homeButton2.style.opacity = 1;
  homeButton3.style.opacity = 0.5;
  homeButton4.style.opacity = 0.5;
}


const changeToSection3 = (event) => {
  if (!homeContent1.classList.contains("homepage-hidden")) {
    homeContent1.classList.toggle("homepage-hidden");

    homeContent3.classList.toggle("homepage-hidden");
  }

  if (!homeContent2.classList.contains("homepage-hidden")) {
    homeContent2.classList.toggle("homepage-hidden");

    homeContent3.classList.toggle("homepage-hidden");
  }

  if (!homeContent4.classList.contains("homepage-hidden")) {
    homeContent4.classList.toggle("homepage-hidden");

    homeContent3.classList.toggle("homepage-hidden");
  }

  homeButton1.style.opacity = 0.5;
  homeButton2.style.opacity = 0.5;
  homeButton3.style.opacity = 1;
  homeButton4.style.opacity = 0.5;
}


const changeToSection4 = (event) => {
  if (!homeContent1.classList.contains("homepage-hidden")) {
    homeContent1.classList.toggle("homepage-hidden");

    homeContent4.classList.toggle("homepage-hidden");
  }

  if (!homeContent2.classList.contains("homepage-hidden")) {
    homeContent2.classList.toggle("homepage-hidden");

    homeContent4.classList.toggle("homepage-hidden");
  }

  if (!homeContent3.classList.contains("homepage-hidden")) {
    homeContent3.classList.toggle("homepage-hidden");

    homeContent4.classList.toggle("homepage-hidden");
  }

  homeButton1.style.opacity = 0.5;
  homeButton2.style.opacity = 0.5;
  homeButton3.style.opacity = 0.5;
  homeButton4.style.opacity = 1;
}





export { changeToSection1 }
export { changeToSection2 }
export { changeToSection3 }
export { changeToSection4 }
