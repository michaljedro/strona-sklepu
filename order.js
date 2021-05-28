var arrBtn = document.querySelectorAll('.list_arrow');


arrBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        item.nextElementSibling.classList.toggle('show');    
    })
})

var items = document.querySelectorAll('ul li');

var title = document.querySelector('.title');
var color = document.querySelector('.color');
var pattern = document.querySelector('.patter');
var transport = document.querySelector('.transport');

console.log(items);

items.forEach(item=> {
    item.addEventListener('click', function(item,index){
        let valueItem = item.currentTarget.value;
        console.log(valueItem);
        if(index<3) {
            console.log('')
        }

    })
})
