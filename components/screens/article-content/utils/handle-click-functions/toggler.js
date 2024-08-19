const handleTogglerClick = (event) => {
  const clickedTarget = event.target;

  if (clickedTarget.tagName === "SPAN" && clickedTarget.classList.contains("toggler")) {
    const parentElement = clickedTarget.parentElement;
    const ipHideCont = parentElement.querySelector(".iphidecont") || parentElement.querySelector(".hidecont");
    const ipShowCont = parentElement.querySelector(".ipshowcont") || parentElement.querySelector(".showcont");
    const ipContents = parentElement.querySelector(".ipcontents") || parentElement.querySelector(".contents");

    if (clickedTarget.classList.contains("iphidecont") || clickedTarget.classList.contains("hidecont")) {
      if (ipHideCont) ipHideCont.style.display = "none";
      if (ipContents) ipContents.style.display = "none";
      if (ipShowCont) ipShowCont.style.display = "block";
    } else if (clickedTarget.classList.contains("ipshowcont") || clickedTarget.classList.contains("showcont")) {
      if (ipHideCont) ipHideCont.style.display = "block";
      if (ipContents) ipContents.style.display = "block";
      if (ipShowCont) ipShowCont.style.display = "none";
    }
  }
};

const handleChangelogClick = (event) => {
  const clickedTarget = event.target;
  if (clickedTarget.tagName === 'P' && clickedTarget.classList.contains('changelog-main-header')) {
      const switcher = clickedTarget.parentElement.querySelector('.changelog-switcher');
      const switcherDisplay = getComputedStyle(switcher).getPropertyValue('display');

      if (switcherDisplay === 'none') {
          switcher.style.display = 'block';
          clickedTarget.style.setProperty('--content', '"-"');
      } else {
          switcher.style.display = 'none';
          clickedTarget.style.setProperty('--content', '"+"');
      }
  }
};

export { handleTogglerClick, handleChangelogClick };