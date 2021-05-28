var arrBtn = document.querySelectorAll('.list_arrow');


arrBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        item.nextElementSibling.classList.toggle('show');    
    })
})

var title = document.querySelector('.title');
var color = document.querySelector('.color');
var pattern = document.querySelector('.patter');
var transport = document.querySelector('.transport');



var items = document.querySelectorAll('ul li');

console.log(items);

items.forEach(item=> {
    item.addEventListener('click', function(item){
        let valueItem = item.currentTarget.value;
        console.log(valueItem);
        if(item.currentTarget.dataset.id==1) {
            
        } else if(item.currentTarget.dataset.id==2) {
            console.log('ciapka') 
        } else {
        console.log('three')
        }
    })
})
