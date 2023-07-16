const todotext=document.getElementById('todotxt');
const todoul1=document.getElementById('todo-ul');

function addTask() {
    if(todotext.value.trim()==''){
        alert("enter some task ");
    }    
    else{
        console.log(todotext.value.trim());
        const liTag=document.createElement('li');
        const  spanText=document.createElement('span');
        const textNode=document.createTextNode(todotext.value.trim());
        spanText.appendChild(textNode);
        spanText.addEventListener("click",(e)=>{
            console.log(e.target);
            e.target.classList.toggle('done');
            
        });
        const  spanClose=document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML="&times";
        spanClose.addEventListener('click',(e)=>{
        console.log(e.target.parentElement);
        const li=e.target.parentElement;
        li.parentElement.removeChild(li);
        });
        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);
        todoul1.appendChild(liTag);
        todotext.value='';
    }
}