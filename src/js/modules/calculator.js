export default () => {
  const section = document.querySelector('.services');


  if (!section) return;

  const activeElements = section.querySelectorAll(".js-service-switcher");
  const inputRange = section.querySelector('.js-range-single-input');

  activeElements.forEach(activeElement => {
    activeElement.addEventListener("input", function () {
      calculation();
    })
  })

  inputRange.addEventListener("input", function () {
    this.value = this.value.replace(/\D+/g, '');

    const maxNumber = parseInt(this.closest(".input").querySelector(".js-range-single").dataset.max);
    if (this.value.replace(/\D+/g, '') > maxNumber) {
      this.value = maxNumber
    }

    calculation();
  })
}

export function calculation() {
  const priceMoreEmployee = document.querySelector(".services-box__staff-number").innerHTML;
  const rangeInput = document.querySelector(".js-range-single-input");
  const rangeSingle = document.querySelector('.js-range-single');
  const itemMoreEmployee = document.querySelector('.js-more-employee');

  const itemSummaMoreEmployee = itemMoreEmployee.querySelector('.services-calculation__item-price');
  const numberMoreEmployee = itemMoreEmployee.querySelector('.js-more-employee-number');

  let numberAdditionalEmployees = parseInt(rangeInput.value.replace(/\s+/g, '')) - parseInt(rangeSingle.dataset.min);

  numberMoreEmployee.textContent = numberAdditionalEmployees;

  let summdparseInt = 0;

  if (parseInt(rangeSingle.dataset.min) !== parseInt(rangeInput.value.replace(/\s+/g, ''))) {
    summdparseInt = parseInt(priceMoreEmployee) * numberAdditionalEmployees;

    itemSummaMoreEmployee.textContent = summdparseInt + ' ₽';
  } else {
    itemSummaMoreEmployee.textContent = 0 + ' ₽';
  }



  const listServices = Array.from(document.querySelectorAll('.services-box__item'));
  const jsServicesExtended = document.querySelector('.js-services-extended');
  const itemServicesContain = document.querySelector('.services-calculation__item-contain');

  let newListServices = listServices.map(item => {
    if (item.querySelector('.js-service-switcher').checked) {
      return true;
    } else {
      return false;
    }
  })

  if (newListServices.indexOf(true) !== -1) {
    jsServicesExtended.querySelector(".services-calculation__item-title").classList.add("active");
  } else {
    jsServicesExtended.querySelector(".services-calculation__item-title").classList.remove("active");
  }

  let newArrayResult = listServices.map(item => {
    if (item.querySelector('.js-service-switcher').checked) {
      const itemTitle = item.querySelector('.services-box__item-title').textContent;
      const itemPrice = parseInt(item.querySelector('.services-box__item-price').textContent.replace(/\D+/g, ''));

      let newObject = new Object();

      newObject.title = itemTitle;
      newObject.price = itemPrice;

      return newObject;
    }
  });

  itemServicesContain.innerHTML = "";

  let summaExtended = 0;

  newArrayResult.forEach(item => {
    if (item) {

      summaExtended = summaExtended + item.price;

      const newItemService = document.createElement("div");
      newItemService.className = "services-calculation__item";

      const newItemServiceTitle = document.createElement("div");
      newItemServiceTitle.className = "services-calculation__item-title";
      newItemServiceTitle.innerHTML = item.title;

      const newItemServicePrice = document.createElement("div");
      newItemServicePrice.className = "services-calculation__item-price";
      newItemServicePrice.innerHTML = item.price + ' ₽';

      newItemService.append(newItemServiceTitle);
      newItemService.append(newItemServicePrice);

      itemServicesContain.prepend(newItemService);
    }
  });

  jsServicesExtended.querySelector(".services-calculation__item-price").innerHTML = summaExtended + ' ₽';


  const total = summdparseInt + summaExtended;


  document.querySelector('.services-calculation__total-number').textContent = total + ' ₽';
}


export function openCloseBlock() {
  const block = document.querySelector('.js-services-extended');
  const blockTitle = block.querySelector('.services-calculation__item-title');
  const blockContain = document.querySelector('.services-calculation__item-contain');

  blockTitle.addEventListener('click', function () {
    if (blockTitle.classList.contains("active")) {
      blockContain.classList.toggle("active");
    }
  });
}
