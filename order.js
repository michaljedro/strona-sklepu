// var arrBtn = document.querySelectorAll('.list_arrow');


// arrBtn.forEach(function(item) {
//     item.addEventListener('click', function(){
//         item.nextElementSibling.classList.toggle('show');    
//     })
// })

// var items = document.querySelectorAll('ul li');
// let sum = document.querySelector('.sum');



// let arraySum =[];

// items.forEach((item) => {

//   item.addEventListener("click", function(item) {

//         if (item.currentTarget.dataset.id <= 3) {

//         let txt3 = item.currentTarget.innerText;

//         let val3 = item.currentTarget.value;

//         let titleLeft = document.querySelector(".panel_left .title");

//         let titleRight = document.querySelector(".panel_right .title");

//         titleLeft.innerHTML = txt3;

//         titleRight.innerHTML = val3;

//         arraySum.push(val3);

//         countCal(arraySum);

//             } else if (item.currentTarget.dataset.id <= 6) {

//                     let txt6 = item.currentTarget.innerText;

//                     let val6 = item.currentTarget.value;

//                     let titleLeft = document.querySelector('.panel_left .color');

//                     let titleRight = document.querySelector('.panel_right .color');

//                     titleLeft.innerHTML = txt6;

//                     titleRight.innerHTML = val6;

//                     arraySum.push(val6);

//                     countCal(arraySum);

//                           } else if (item.currentTarget.dataset.id <= 8){

//                             let txt8 = item.currentTarget.innerText;

//                             let val8 = item.currentTarget.value;



//                             let titleLeft = document.querySelector('.panel_left .pattern');

//                             let titleRight = document.querySelector('.panel_right .pattern');

//                             titleLeft.innerHTML = txt8;

//                             titleRight.innerHTML = val8; 
                            
//                             arraySum.push(val8);              

//                             countCal(arraySum);
//     } 
//   });
// });

// function countCal(arr) {
//   var prize = 0;
  
//   for ( var i=0; i<arr.length;i++) {
//     prize+=arr[i];
//   }
//   // var transValue = transItem. getAttribute('data-price');
//   // var prizeTrans = parseInt(transValue);
//   // prize+=prizeTrans;

// var prizeItem = document.querySelector('.sum');
// var showPrize = prizeItem.innerText = prize;
//   return showPrize
// }


// var transItem = document.querySelector('#transport');

// transItem.addEventListener('click', function(){
//   var tranText = document.querySelector('.panel_right .transport');
  
//     if(transItem.checked) {
//       var transValue = transItem.getAttribute('data-price');
//       var prizeTrans = parseInt(transValue);
//       tranText.innerText = transValue;
//       countCal(prizeTrans);
//     } else {
//       var transValue = transItem.getAttribute('data-price');
//       tranText.innerText = '';
//     }
// })
const chairTypeSelect = document.querySelector('#chair-type')
const chairColorSelect = document.querySelector('#chair-color')
const chairMaterialSelect = document.querySelector('#chair-material')
const transportCheckbox = document.querySelector('#transport')

const selectedOptionTemplate = document.querySelector('#summary-selected-option')
const summarySelectedOptionContainer = document.querySelector('#summary-selected-option-container')
const totalPriceBox = document.querySelector('#total-price')

const selects = [chairTypeSelect, chairColorSelect, chairMaterialSelect]
const getSelectedOptions = () => {
  const selectedOptions = selects.filter(select => select.selectedIndex > 0)
    .map(select => select.options[select.selectedIndex])
  return selectedOptions
}
const addSummaryOptionBox = (name, price) => {
  const box = selectedOptionTemplate.content.cloneNode(true)
  const nameBox = box.querySelector('.selected-option--name')
  nameBox.innerText = name
  const priceBox = box.querySelector('.selected-option--price')
  priceBox.innerText = price
  summarySelectedOptionContainer.appendChild(box)
}

const displayPrices = () => {
  summarySelectedOptionContainer.innerHTML = ''
  const selectedOptions = getSelectedOptions()
  for (const option of selectedOptions) {
    const optionName = option.value
    const optionPrice = option.dataset.price
    addSummaryOptionBox(optionName, optionPrice)
  }
  if (transportCheckbox.checked) {
    const name = transportCheckbox.value
    const priceAttr = transportCheckbox.dataset.price
    const price = Number.parseInt(priceAttr, 10)
    addSummaryOptionBox(name, price)
  }
}

const recalculateSum = () => {
  let sum = 0
  const selectedOptions = getSelectedOptions()
  for (const selectedOption of selectedOptions) {
    const priceAttribute = selectedOption.dataset.price
    const price = Number.parseInt(priceAttribute, 10)
    sum += price
  }
  if (transportCheckbox.checked) {
    const priceAttr = transportCheckbox.dataset.price
    sum += Number.parseInt(priceAttr, 10)
  }
  totalPriceBox.innerText = sum
}
const updatePrice = () => {
  displayPrices()
  recalculateSum()
}

chairTypeSelect.addEventListener('change', updatePrice)
chairColorSelect.addEventListener('change', updatePrice)
chairMaterialSelect.addEventListener('change', updatePrice)
transportCheckbox.addEventListener('change', updatePrice)
