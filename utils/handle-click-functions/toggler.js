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

      if (!switcher.style.maxHeight) {
          clickedTarget.classList.add('active');
          switcher.style.maxHeight = `${switcher.scrollHeight}px`;
      } else {
          clickedTarget.classList.remove('active');
          switcher.style.maxHeight = null;
      }
  }
};

const shortcutToggler = (enabled, disabled, enabledOptClass, disabledOptClass) => {
  const enabledOpt = document.querySelector(enabledOptClass);
  const disabledOpt = document.querySelector(disabledOptClass);
  const selectorTD_en = document.querySelectorAll(`.keyboard_shortcuts_table tr td:nth-child(${enabled})`);
  const selectorTD_dis = document.querySelectorAll(`.keyboard_shortcuts_table tr td:nth-child(${disabled})`);

  disabledOpt.classList.remove('enabled');
  disabledOpt.classList.add('disabled');
  enabledOpt.classList.remove('disabled');
  enabledOpt.classList.add('enabled');

  selectorTD_dis.forEach(td => {
    td.style.display = 'none';
  });

  selectorTD_en.forEach(td => {
    td.style.display = '';
    if (td.textContent === '') {
      td.parentElement.style.display = 'none';
    } else {
      td.parentElement.style.display = '';
    }
  });
};

const handleShortcutToggleClick = (event) => {
  const clickedTarget = event.target;

  if (clickedTarget.classList.contains('mac_option')) {
    shortcutToggler(3, 2, '.mac_option', '.pc_option');
  } else if (clickedTarget.classList.contains('pc_option')) {
    shortcutToggler(2, 3, '.pc_option', '.mac_option');
  }
};

export { handleTogglerClick, handleChangelogClick, handleShortcutToggleClick };