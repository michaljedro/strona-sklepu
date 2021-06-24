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
