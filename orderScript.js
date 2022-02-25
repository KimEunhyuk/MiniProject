temp = location.href.split("?");
data = temp[1].split("!"); 
img2 = data[0].split("@");       //img
temp1 = data[1].split("@");       
product = temp1[0].split("%");     //product
price = temp1[1];                  //price

//주문 table 생성
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('orderList').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "상품 이미지 ";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "상품 명 및 정보";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "가격 ";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

//order가 생기면 넣을 수 있는 table
plusTable1();
function plusTable1(){
    const costValue = document.querySelector("#value");
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    var x = document.createElement("IMG");
    x.setAttribute("src", img2);
    x.setAttribute("width", 200);
    x.setAttribute("height", 200);

    row_3_data_1.innerHTML = x;
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = product;
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML =price;

    costValue.textContent = price;
    row_3.appendChild(x);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);
}










