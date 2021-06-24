const chairTypeSelect = document.querySelector('#chair-type')
const chairColorSelect = document.querySelector('#chair-color')
const chairMaterialSelect = document.querySelector('#chair-material')
const transportCheckbox = document.querySelector('#transport')
const totalPriceBox = document.querySelector('#total-price')

const selects = [chairTypeSelect, chairColorSelect, chairMaterialSelect]

const getSelectedOptions = () => {
  const selectedOptions = selects.filter(select => select.selectedIndex > 0)
    .map(select => select.options[select.selectedIndex])
  return selectedOptions
}

const recalculatePrice = () => {
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

chairTypeSelect.addEventListener('change', recalculatePrice)
chairColorSelect.addEventListener('change', recalculatePrice)
chairMaterialSelect.addEventListener('change', recalculatePrice)
transportCheckbox.addEventListener('change', recalculatePrice)
