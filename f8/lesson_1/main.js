

/* toán tử gán
var a = 4;
a /= 2
console.log(a)


 if (a > 0 && b > 0) {
     alert('a va b lon hon 0')
 }
 
  toan tu so sanh 

 var a = 2;
 var b = 2;

 if (a == b) {
     alert('dung')
 }

  toan tu 
 var a = 1*2+2;
 console.log(a);


 built-in:

 setTimeout(function() {
     alert('Thong bao')
 },10000)

 setInterval(function() {
     console.log('Thong bao' + Math.random())
 },1000)

 */



 
/**
 * Boolean
 */

// var a = 1;
// var b = 2;

// var isSuccess = a < b;
// console.log(isSuccess);




/**
 * If - else
 */

/**
 * 6 giá trị sẽ là false: 
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */

//  var fullName = undefined

//  if (fullName) {
//      console.log('DIEU KIEN DUNG')
//  }else {
//      console.log('DIEU KIEN SAI')
//  }

// var fullName = 'anh hải'

// if (fullName) {
//     console.log('DIEU KIEN DUNG')
// }else {
//     console.log('DIEU KIEN SAI')
// }



// if (d > 0) {
//     // console.log(x1)
//     // console.log(x2)
//     console.log('PT CO 2 NGHIEM')
// }else {
//     console.log()
// }

// if (d < 0) {
//     console.log('PT VO NGHIEM')
// }else {
//     console.log()
// }

// if (d == 0) {
//     // console.log(x)
//     console.log('PT CO NGHIEM KEP')
// }else {
//     console.log()
// }


/**
 * 
 */






/*
function tinhtoan(a, b, c) {
    console.log("Co phai ban muon tinh phuong trinh:" + a + "x^2" + " + " + b + "x + " + c + " = 0")
    if (a == 0 && b != 0) {
        console.log("Phuong trinh co 1 nghiem x=", -c/b)

    } else if (a == 0 && b == 0) {
        console.log("Phuong trinh khong thoa man, nhap lai")
    } else {
        del = b * b - (4 * a * c)
        sqrtDel = Math.sqrt(del)
        x1 = (-b-sqrtDel)/(2*a)
        x2 = (-b+sqrtDel)/(2*a)
        if (del == 0) console.log("Phuong trinh co nghiem kep:" + -b/2*a)
        if (del < 0) console.log("Phuong trinh vo nghiem")
        if (del > 0) console.log("Phuong trinh co 2 nghiem x1:" + x1 + "," + "x2:" + x2)
    }
    

}

tinhtoan(5, 1, 0);
*/


/*
var day = new Date()
var day1 = date.getDay()

console.log(day1); // đưa ra màn hình console hôm nay là thứ mấy (0: chủ nhật, 1: thứ hai, 2: thứ ba,...vv)
*/

// var day = new Date()

// console.log(day.getUTCDay());



// var array = [
//     'javascript',
//     'python',
//     'pascal',
//     'C++',
//     'ruby',
//     'java'
// ];

// var myArray = array.length;

// for (var i = 0; i < myArray; i++) {
//     console.log(array[i])
// }


/**
 * cách sử dụng For in
 */

// var languages = {
//     Name: 'Tuan',
//     Age: 23
// }

// for(var key in languages) {
//     console.log(languages[key]) // lấy ra giá trị của element
// }

// var languages = [
//     'javascript',
//     'python',
//     'pascal',
//     'C++',
// ]

// for(var key in languages) {
//     console.log(languages[key]) // lấy ra giá trị của languages
// }

// var languages = 'python'

// for(var key in languages) {
//     console.log(languages[key]) // in ra từng chữ cái của biến languages
// }

// /**
//  * Cách sử dụng For of
//  */

// // cách sử dụng for of trong object

// var myInfo = {
//     Name: 'Chiến',
//     Age: 50
// }

// for(var value of Object.keys(myInfo)) {
//     console.log(value) // lấy ra element
// };

// for(var value of Object.values(myInfo)) {
//     console.log(value) // lấy ra giá trị của element
// }