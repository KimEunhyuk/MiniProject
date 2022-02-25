//const customerInfo = document.querySelectorAll('input');
// console.log(customerInfo);
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