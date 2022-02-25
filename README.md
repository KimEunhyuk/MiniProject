# HTML 미니 프로젝트 (강아지 용품 판매 사이트)
+ 팀원 구성
  - 김예지
      로그인, 홈페이지, 상품, 회원가입 등 제작 및 설계
  - 김은혁
      검색화면 및 검색 엔진 제작 및 설계
  - 김준태
      주문, 상품 등 제작 및 설계
+ 프로젝트 소개
  강아지 용품(사료, 장난감, 간식)을 판매하는 사이트
  
+ 프로젝트 기간
  2022/02/23 - 2022/02/25
  
+ 기술 스택:

<p>
   <img src="https://img.shields.io/badge/HTML5-E34F26?&style=flat-square&logo=html5&logoColor=white"/>  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />  <img src="https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E" />
</p>

<br>

# JavaScript Code 
`code`
#### login.js

``` js
const [loginBtn, orderBtn] = document.querySelectorAll('.btn');
loginBtn.addEventListener('click', check);
orderBtn.addEventListener('click', ordercheck);

function check() {
    console.log('check called');

    var link = 'http://127.0.0.1:5500/practice/dog_page/index.html';

    if (loginId.id.value=="yeji") {
        if (loginPw.pw.value=="1111") {
            window.location.replace('index.html')
        } else {
            alert(`비밀번호를 다시 확인해주세요`);
            //history.go(-1);
        }

    } else {
        alert(`아이디 혹은 비밀번호를 다시 확인해주세요`);
        //window.open(`login.html`)
    }
}

/*정보가 일치하면 주문내역 확인으로 이동하고 싶음*/
function ordercheck() {
    console.log('order checked');

    if (orderNo.id.value == "1234") {
        if (orderEmail.pw.value == "1234") {
            window.location.replace('index.html')
            //orderList.redirect('nonclientOrder.html');
        } else {
            alert(`이메일 주소를 다시 확인해주세요`);
        }
    } else {
        alert(`주문번호를 다시 확인해주세요`);
    }

}
```

<br>

#### orderScript.js

``` js

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

```

#### search.js

``` js
const btns = document.querySelector('#search-btn');
btns.addEventListener('click', () =>{

        var value, name, item, i, card, box;
    
        value = document.getElementById("value").value.toUpperCase();
        item = document.getElementsByClassName("info");
        card = document.getElementsByClassName('card-photo');
        order = document.getElementsByClassName('order-button');
        box = document.getElementsByClassName('tab-box');
    
        for(i = 0; i < item.length; i++){
            name = item[i].getElementsByClassName("product");
            
            if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
                box[i].style.display = "block";
            }
            else{
                 box[i].style.display = "none";
            }  
        }
});
```

#Review
