// viet 1 ham trong js thuc hien:
// 1. tao 1 bien luu danh sach lop gom 9 phan tu la thanh vien nhom minh bao gom:
// - ho va ten
// - gioi tinh
// - noi sinh
// 2. dung js de in danh sach ra html

let person= [
    {name :"Nguyễn Văn Bính", sex: "Nam", address: " HN "},
    {name :"Thái Văn Ngọc", sex: "Nam", address: "HN"},
    {name :"Hoàng Tùng Dương", sex: "Nam", address: "HN"},
    {name :"Chu Văn Tuyên", sex: "Nam", address: "HN"},
    {name :"Nguyễn Tài Thuận", sex: "Nam", address: "HN"},
    {name :"Trương Đức Việt Hoàng", sex: "Nam", address: "HN"},
    {name :"Nguyễn Quang Huy", sex: "Nam", address: "HN"}
];
for(let i = 0; i < person.length; i++) {
    document.write(person[i].name+" - "+ person[i].sex +" - "+  person[i].address +"<br>");
}