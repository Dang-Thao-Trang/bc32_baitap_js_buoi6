//bài 1: tìm số nguyên nhỏ nhất sao cho: 1+ 2+3+...n>10000
function baitap1() {
  //input
  let min = document.getElementById("min");
  //process
  let n = 1;
  let sum = 0;
  while (sum < 10000) {
    n++;
    sum = sum + n;
  }
  //output
  min.innerHTML = " Số nguyên dương nhỏ nhất là: " + n;
}
baitap1();

//======================================

// bài tâp 2: Viết chương trình nhập vào 2 số x,n tính tổng:
// S(n) = x + x^2 + x^3.... + x^n
// Tóm tắt: viết chương trình nhập x và n . xuất kết quả S
function baitap2() {
  //input
  let x = +document.getElementById("x").value;
  let n = +document.getElementById("n").value;
  // process
  let sum2 = 0;
  let i = 1;
  while (i <= n) {
    sum2 += Math.pow(x, i);
    i++;
  }
  // console.log(S);
  //output
  document.getElementById("S").innerHTML = "S(n) = " + sum2;
}
baitap2();

//======================================

// bài tâp 3: Viết chương trình nhập vào 2 số n tính Giai thừa:
// S3 = 1 * 2...*n
// Tóm tắt: viết chương trình nhập x và n . xuất kết quả S
function baitap3() {
  //input
  let n3 = +document.getElementById("n3").value;
  let sum3 = 1;
  //process
  for (let i = 2; i <= n3; i++) {
    sum3 *= i;
  }
  // console.log(sum3);
  //output
  document.getElementById("S3").innerHTML = "Giai thừa = " + sum3;
}
baitap3();

//======================================

//bài tập 4:Viết chương trình khi click button in ra 10 thẻ div. Div vị trí chẵn in bg đỏ, div vị trí lẻ in bg xanh
//input tương đương với sự kiện click button
function baitap4() {
  //process
  let content = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content += '<div class="bg-danger">div chẵn</div>';
    } else {
      content += '<div class="bg-primary">div lẻ</div>';
    }
  }
  //output
  document.getElementById("bg").innerHTML = content;
  document.getElementById("bg").style.display = "block";
}
