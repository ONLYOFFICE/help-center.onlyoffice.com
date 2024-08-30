const handleArticleScroll = (setActiveSection, setShowButton, lastActiveSectionRef, selector) => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("[id$='_block']");
    const menuSections = Array.from(sections).filter(section => section.querySelector(selector));

    let currentSection = lastActiveSectionRef.current || null;
    menuSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      if ((scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) || (scrollPosition > sectionTop + sectionHeight)) {
        currentSection = section.id;
      }
    });

    if (currentSection !== lastActiveSectionRef.current) {
      lastActiveSectionRef.current = currentSection;
      setActiveSection(currentSection);
    } else {
      setActiveSection(currentSection || menuSections[0]?.id);
    }

    const scrollHeight = window.innerHeight * 2;
    setShowButton && setShowButton(window.scrollY > scrollHeight);
  };

export { handleArticleScroll };