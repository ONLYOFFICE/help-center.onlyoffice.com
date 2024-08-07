const handleImagePopupClick = (event, setBigPhotoSrc, setImageModalActive) => {
  const clickedTarget = event.target;

  if (clickedTarget.tagName === "IMG") {
    const targetImageId = clickedTarget.getAttribute("target");

    if (targetImageId) {
      const closestBigPhotoScreen = document.querySelector(`.bigphoto_screen[id="${targetImageId}"]`);
      if (closestBigPhotoScreen) {
        setBigPhotoSrc(closestBigPhotoScreen.getAttribute("src"));
        setImageModalActive(true);
      }
    }
  }
};

export { handleImagePopupClick };