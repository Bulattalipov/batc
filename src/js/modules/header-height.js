export const getHeaderHeight = () => {
  const headerHeight = document.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight * 0.1}rem`);
}
