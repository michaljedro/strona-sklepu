var arrBtn = document.querySelectorAll('.list_arrow');


arrBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        item.nextElementSibling.classList.toggle('show');    
    })
})

var items = document.querySelectorAll('ul li');
let sum = document.querySelector('.sum');



let arraySum =[];

items.forEach((item) => {

  item.addEventListener("click", function(item) {

        if (item.currentTarget.dataset.id <= 3) {

        let txt3 = item.currentTarget.innerText;

        let val3 = item.currentTarget.value;

        let titleLeft = document.querySelector(".panel_left .title");

        let titleRight = document.querySelector(".panel_right .title");

        titleLeft.innerHTML = txt3;

        titleRight.innerHTML = val3;

        arraySum.push(val3);

        countCal(arraySum);

            } else if (item.currentTarget.dataset.id <= 6) {

                    let txt6 = item.currentTarget.innerText;

                    let val6 = item.currentTarget.value;

                    let titleLeft = document.querySelector('.panel_left .color');

                    let titleRight = document.querySelector('.panel_right .color');

                    titleLeft.innerHTML = txt6;

                    titleRight.innerHTML = val6;

                    arraySum.push(val6);

                    countCal(arraySum);

                          } else if (item.currentTarget.dataset.id <= 8){

                            let txt8 = item.currentTarget.innerText;

                            let val8 = item.currentTarget.value;



                            let titleLeft = document.querySelector('.panel_left .pattern');

                            let titleRight = document.querySelector('.panel_right .pattern');

                            titleLeft.innerHTML = txt8;

                            titleRight.innerHTML = val8; 
                            
                            arraySum.push(val8);              

                            countCal(arraySum);
    } 
  });
});

function countCal(arr) {
  var prize = 0;
  var transItem = document.querySelector('#transport');
  var tranText = document.querySelector('.panel_right .transport');

  if(transItem.checked) {
    var transValue = transItem. getAttribute('data-price');
    console.log(transValue);
    tranText.innerText = transValue
  }
  for ( var i=0; i<arr.length;i++) {
    prize+=arr[i];
  }
var prizeItem = document.querySelector('.sum');
var showPrize = prizeItem.innerText = prize


  return showPrize
}


