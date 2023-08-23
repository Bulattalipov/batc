export default () => {
  const block = document.querySelector('.services-box__list');

  if (!block) return;

  const listItems = block.querySelectorAll('.services-box__item');

  listItems.forEach(item => {
    const title = item.querySelector('.services-box__item-title');
    const tooltip = item.querySelector('.services-box__item-tooltip');
    const tooltipButtonClose = tooltip.querySelector('.services-box__item-tooltip-close-btn');

    title.addEventListener('click', function () {
      listItems.forEach(elem => {
        elem.querySelector('.services-box__item-tooltip').classList.remove('active');
      });

      tooltip.classList.add('active');
    })

    tooltipButtonClose.addEventListener('click', function () {
      tooltip.classList.remove("active");
    })
  })
}
