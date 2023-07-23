addproduct = document.getElementById("checkAll");
price1sp1 = document.getElementById("price1sp1");
price1sp2 = document.getElementById("price1sp2");
price1sp3 = document.getElementById("price1sp3");
sumprice = document.getElementById("tongtien");
sp1 = document.getElementById("sp1");
sp2 = document.getElementById("sp2");
sp3 = document.getElementById("sp3");
rmsp1 = document.getElementById("rmsp1");
rmsp2 = document.getElementById("rmsp2");
rmsp3 = document.getElementById("rmsp3");

var  sum = 0;
function addsp(n) {
    if (n == 1) {   
        sp1.value++;
        for (var i = 1; i <= n; i++) {
            var price1 = 15490000;
            sum =  Number(price1) * sp1.value;
        }
        price1sp1.innerHTML = sum + "đ";
    }
    else if (n == 2) {  
        sp2.value++;
        for (var i = 1; i <= n; i++) {
            var price2 = 20590000;
            sum = sp2.value * Number(price2);
        }
        price1sp2.innerHTML = sum + "đ";
    }

    else if (n == 3) {  
        sp3.value++;
        for (var i = 1; i <= n; i++) {
            var price3 = 24990000;
            sum = sp3.value * Number(price3);
        }
        price1sp3.innerHTML = sum + "đ";
    }

    else if (n == 4) {
        sp1.value;
        var price1 = 15490000;
        sum =  Number(price1) * sp1.value;
        price1sp1.innerHTML = sum + "đ";
    }

    else if (n == 5) {
        sp2.value;
            var price2 = 20590000;
            sum = sp2.value * Number(price2);
        price1sp2.innerHTML = sum + "đ";
    }

    else if (n == 6) {
        sp3.value;
            var price3 = 24990000;
            sum = sp3.value * Number(price3);
        price1sp3.innerHTML = sum + "đ";
    }

    else if (n == 7) {
        sp1.value = 0;
        price1sp1.innerHTML = "";
    }

    else if (n == 8) {
        sp2.value = 0;
        price1sp2.innerHTML = "";
    }

    else if (n == 9) {
        sp3.value = 0;
        price1sp3.innerHTML = "";
    }
    sumprice.innerHTML = sp1.value * 15490000 + sp2.value * 20590000 + sp3.value * 24990000 + "đ";
}
