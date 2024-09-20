const extractHeadings = (wrapperContainer, description, selector) => {
  const div = document.createElement("div");
  div.innerHTML = description;
  const headingsArray = [];

  wrapperContainer.querySelectorAll("[id$='_block']").forEach(block => {
    const firstHeading = block.querySelector(selector);
    if (firstHeading) {
      headingsArray.push({
        id: block.id,
        text: firstHeading.innerText
      });
    }
  });

  return headingsArray;
};

export { extractHeadings };