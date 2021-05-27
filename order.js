var arrBtn = document.querySelectorAll('.list_arrow');

console.log(arrBtn);

arrBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        item.style.display = 'block';
        
    })
})

let val = document.querySelectorAll('.list_panel li');
console.log(val);
console.log(val.length);

val.forEach(item => console.log(item.value));

val.addEventListener('click', function() {
    val.forEach(item => console.log(item.value));
})

