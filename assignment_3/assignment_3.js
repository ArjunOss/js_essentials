function addTask(){
    let data=document.getElementById('inp').value;
    document.getElementById('empty_lab').innerHTML+=`<h1 class='str_emp'>${data}</h1>`;
    document.getElementById('inp').value="";
    
}

function changeColor(){

    document.getElementById('empty_lab').style.backgroundColor="lightblue";

}


