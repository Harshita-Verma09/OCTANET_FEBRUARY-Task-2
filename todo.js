let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

button.addEventListener("click", function(){
    let item= document.createElement("li");
    item.innerText= input.value;  
    
    let delbtn= document.createElement("button");
    delbtn.innerText="delete";   // jab aap is code ko execute karenge, to button element par  new add pr"delete" likha hua dikhega. Users ise dekh sakte hain aur is par click karke "delete" action perform kar sakte hain ya jo bhi action aapne is button ke saath associate kiya hai.
    delbtn.classList.add("del");//classList.add(className) method se aap ek naye class ko element ke class list mein add kar sakte hain.
    item.appendChild(delbtn); //delbtn create have created but no used, item's appendChild m krege //

    ul.appendChild(item);                                                                              
    input.value ="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
        let list =event.target.parentElement;
        list.remove();
        console.log(list);
    }

});