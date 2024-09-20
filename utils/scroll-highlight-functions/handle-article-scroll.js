const handleArticleScroll = (articlePage, wrapperContainer, leftMenuRef, offsetHeight, selector, setShowButton) => {
  if (wrapperContainer) {
    let sections = Array.from(wrapperContainer.querySelectorAll("[id$='_block']")).filter(section => section.querySelector(selector));
    let leftMenuItems = leftMenuRef.querySelectorAll(".left-menu-items li");
    let currentSectionIndex = 0;
    const isLastBlockWatchVideo = sections.length > 0 && sections[sections.length - 1].id === "watchvideo_block";

    sections.forEach((el, i) => {
      const offsetCondition = isLastBlockWatchVideo && el === sections[sections.length - 1]
        ? el.offsetTop - document.querySelector("header").offsetHeight - 24
        : articlePage
          ? el.offsetTop + offsetHeight
          : el.offsetTop - offsetHeight;

      if (offsetCondition - 2 <= window.scrollY) {
        currentSectionIndex = i;
      }
    });

    let activeButton = leftMenuRef.querySelector(".left-menu-items li.active");

    if (!activeButton || activeButton !== leftMenuItems[currentSectionIndex]) {
      leftMenuItems.forEach((button) => button.classList.remove("active"));

      leftMenuItems[currentSectionIndex]?.classList.add("active");
    };

    if (setShowButton) {
      const scrollHeight = window.innerHeight * 2;
      setShowButton(window.scrollY > scrollHeight);
    }
  }
};

export { handleArticleScroll };