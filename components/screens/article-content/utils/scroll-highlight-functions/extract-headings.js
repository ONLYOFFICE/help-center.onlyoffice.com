const extractHeadings = (description, selector, videos, t) => {
    const div = document.createElement("div");
    div.innerHTML = description;
    const headings = [];

    div.querySelectorAll("[id$='_block']").forEach(block => {
      const firstHeading = block.querySelector(selector);
      if (firstHeading) {
        headings.push({
          id: block.id,
          text: firstHeading.innerText
        });
      }
    });
    if (videos && videos.data.length > 0) {
      headings.unshift({
        id: "watchvideo_block",
        text: t("WatchVideo")
      });
    }
    return headings;
  };

export { extractHeadings };