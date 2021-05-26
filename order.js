var arrBtn = document.querySelectorAll('.list_arrow');

console.log(arrBtn);

arrBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        item.style.display = 'block';
        
    })
})

