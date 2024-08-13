const handleTogglerClick = (event) => {
  const clickedTarget = event.target;

  if (clickedTarget.tagName === "SPAN" && clickedTarget.classList.contains("toggler")) {
    const ipHideCont = document.querySelector(".iphidecont") || document.querySelector(".hidecont");
    const ipShowCont = document.querySelector(".ipshowcont") || document.querySelector(".showcont");
    const ipContents = document.querySelector(".ipcontents") || document.querySelector(".contents");

    if (clickedTarget.classList.contains("iphidecont") || clickedTarget.classList.contains("hidecont")) {
      ipHideCont.style.display = "none";
      ipContents.style.display = "none";
      ipShowCont.style.display = "block";
    } else if (clickedTarget.classList.contains("ipshowcont") || clickedTarget.classList.contains("showcont")) {
      ipHideCont.style.display = "block";
      ipContents.style.display = "block";
      ipShowCont.style.display = "none";
    }
  }
};

export { handleTogglerClick };