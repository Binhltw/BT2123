function HCN() {
    let a = Number(prompt("Nhập chiều dài HCN: "));
    let b = Number(prompt("Nhập rộng dài HCN: "));
    document.write("Diện tích HCN cần tìm là: "+(a*b));
}
function TG() {
    let a = Number(prompt("Nhập cạnh thứ nhất: "));
    let b = Number(prompt("Nhập cạnh thứ hai: "));
    let c = Number(prompt("Nhập cạnh thứ ba: "));
    let p = (a+b+c)/2;
    document.write("Diện tích hình tam giác là: "+ Math.sqrt(p*(p-a)*(p-b)*(p-c)));
}
function HV() {
    let a = Number(prompt("Nhập cạnh của HV: "));
    document.write("Diện tích HV cần tìm là: "+ (a*a));
}