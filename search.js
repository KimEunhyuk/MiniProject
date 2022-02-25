/*const btns = document.querySelector(#search-btn);

buttonHandler.onclick = () => {
    function filter(){
        var value, name, item, i;
    
        value = document.getElementById("value").value.toUpperCase();
        item = document.getElementsByClassName("info");
    
        for(i = 0; i < item.length; i++){
            name = item[i].getElementsByClassName("product");
            if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
                item[i].style.display = "flex";
            }
            else{
                item[i].style.display = "none";
            }   
        }
    
    }
};*/

const btns = document.querySelector('#search-btn');
btns.addEventListener('click', () =>{

    //function filter(){
        var value, name, item, i, card, box;
    
        value = document.getElementById("value").value.toUpperCase();
        item = document.getElementsByClassName("info");
        card = document.getElementsByClassName('card-photo');
        order = document.getElementsByClassName('order-button');
        box = document.getElementsByClassName('tab-box');
    
        for(i = 0; i < item.length; i++){
            name = item[i].getElementsByClassName("product");
            
            if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
                //card[i].style.display = "block";
                //item[i].style.display = "block";
                //order[i].style.display = "block";
                box[i].style.display = "block";
            }
            else{
                 box[i].style.display = "none";
            }  
        }

    //}
});

//btns.addEventListener('click',filter)