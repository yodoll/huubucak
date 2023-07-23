// Khởi tạo đối tượng (Oject)
// Khởi tạo đối tượng rỗng

var dog1 = {};
dog1.ten = "Chó A";
dog1.mausac = "Đen";
dog1.cannang = 1;
dog1.tuoi = 1;
dog1.sua = function(){
    return "Gâu Gâu";
}
// Khởi tạo đối tượng có giá trị
var dog2 = {
    ten: "Chó B",
    mausac: "Vàng",
    cannang: 2,
    tuoi: 1,
    sua: function(){
        return "Gâu Gâu";
    },
    lamtoan: function(a,b){
        return a + b;
    }
}
// Truy xuất giá trị đối tượng 
// Thuộc tính: tendoituong.tenthuoctinh | tendoituong["tenthuoctinh"]
// document.write("Tên chó 1: "+ dog1.ten + "<br>");
// document.write("Màu sắc "+ dog1.mausac + "<br>");
// document.write("Cân nặng: "+ dog1.cannang + "<br>");
// document.write("Tuổi: "+ dog1.tuoi + "<br>");
// document.write("Sủa: "+ dog1.sua + "<br>");
// document.write("<br>");
// document.write("Tên chó 2: "+ dog2["ten"] + "<br>");
// document.write("Màu sắc: "+ dog2["mausac"] + "<br>");
// document.write("Cân nặng: "+ dog2["cannang"] + "<br>");
// document.write("Tuổi: "+ dog2["tuoi"] + "<br>");
// document.write("Sủa: "+ dog2.sua() + "<br>");
// document.write("Tính tổng: 1 + 2 = " + dog2.lamtoan(1,2) + "<br>");

// Khởi tạo class
function Dog(ten,mausac,cannang,tuoi,thucan){
    this.ten = ten;
    this.mausac = mausac;
    this.cannang = cannang;
    this.tuoi = tuoi;
    this.thucan = thucan;
    this.sua = function(){
        return "Gâu Gâu";
    };
    this.lamtoan = function(a,b){
        return a + b;
    }
}
// Khởi tạo đối  tượng (Oject) qua lớp (class)
var dog3 = new Dog("chó C","Trắng",3,2,["Thịt","Xương"]);
// Khởi tạo đối tượng qua key
Dog[4] = new Dog("chó D","Nâu",4,2,["Thịt","Xương"]);
//
Dog["dog5"] = new Dog("chó E","Trắng",3,2,["Thịt","Xương"]);
// Truy xuất giá trị
// document.write("Tên chó 3: " + dog3.ten + "<br>");
// document.write("Tên chó 4: " + Dog[4].ten + "<br>");
// document.write("Tên chó 5: " + Dog["dog55"].ten + "<br>");

// Mảng đối tượng
// for in
// for(const key in Dog){
//     // document.write(key + "<br>");
//     document.write("Tên chó: "+ Dog[key].ten + "<br>");
// }

mang = [];
mang.push(dog1,dog2,dog3);
for(const item of mang){
    document.write("Tên: " + item.ten + "<br>");
    document.write("Màu sắc: " + item.mausac + "<br>");
    document.write("Cân nặng: " + item.cannang + "<br>");
    document.write("Tuổi: " + item.tuoi + "<br>");
    document.write("Sủa: " + item.sua() + "<br>");
    document.write("<br>");
}

// Hiên thị cân nặng con chó thứ 3
document.write("Cân nặng: "+ mang[2].cannang + "<br>");
