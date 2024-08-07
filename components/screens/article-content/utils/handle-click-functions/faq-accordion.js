const toggleFaqBlocks = (container, isExpanding) => {
  container.querySelector(".fq_expand").style.display = isExpanding ? "none" : "inline-block";
  container.querySelector(".fq_collapse").style.display = isExpanding ? "inline-block" : "none";

  container.querySelectorAll(".faq_block").forEach((block) => {
    const ddElement = block.querySelector("dd");
    if (ddElement) {
      if (isExpanding) {
        ddElement.style.maxHeight = `${ddElement.scrollHeight}px`;
      } else {
        ddElement.style.maxHeight = null;
      }

      block.querySelector("dt").classList.toggle("active", isExpanding);
    }
  });
};

const handleFaqAccordionClick = (event, container) => {
  if (event.target.classList.contains("fq_expand")) {
    toggleFaqBlocks(container, true);
  } else if (event.target.classList.contains("fq_collapse")) {
    toggleFaqBlocks(container, false);
  }

  if (event.target.tagName === "DT") {
    const nextElement = event.target.nextElementSibling;
    if (nextElement.style.maxHeight) {
      nextElement.style.maxHeight = null;
      event.target.classList.remove("active");
    } else {
      nextElement.style.maxHeight = `${nextElement.scrollHeight}px`;
      event.target.classList.add("active");
    }

    if (Array.from(container.querySelectorAll('.faq_block dt')).every(item => item.classList.contains("active"))) {
      container.querySelector(".fq_expand").style.display = "none";
      container.querySelector(".fq_collapse").style.display = "inline-block";
    } else {
      container.querySelector(".fq_expand").style.display = "inline-block";
      container.querySelector(".fq_collapse").style.display = "none";
    }
  }
};

export { handleFaqAccordionClick };