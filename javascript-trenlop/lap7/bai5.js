function anhien(a){
    var address = document.querySelector('#phivc');
    console.log(address);
    if(a===1){
        address.style.display = 'block'
    }else address.style.display = 'none'
}
function kiemTra(){
    var ten = document.querySelector('#name');
    console.log(ten)
    if (ten.value == ""){
        alert('nhap lai');
        ten.focus();
        return false;
    }
    
    var type = document.querySelector('#type');
    console.log(type)
    if (type.value == 0){
        alert('nhap lai');
        type.focus();
        return false;

    }
    

    var price = document.querySelector('.price');
    console.log(price)
    if (price.value <= 0) {
        price.focus();
        alert('nhap lai');
        return false;

    }
}

