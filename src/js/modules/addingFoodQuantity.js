export default () => {
  const items = document.querySelectorAll('.cube-tariff__item');


  items.forEach(item => {
    const switcher = item.querySelector('.switcher');
    const checkbox = switcher.querySelector('input');
    const rentSum = switcher.nextElementSibling.dataset.rent;
    let total = item.querySelector('.cube-tariff__item-price-elem span');

    checkbox.addEventListener('input', () => {
      if (checkbox.checked) {
        total.innerHTML = parseInt(total.textContent) + parseInt(rentSum);
      } else {
        total.innerHTML = parseInt(total.textContent) - parseInt(rentSum);
      }
    });
  })
}
