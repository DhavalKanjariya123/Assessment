
let txt = document.getElementById('task')
let btnAdd= document.getElementById('btnAdd');

let myUl=document.getElementsByTagName('UL');

let idNo=1;

btnAdd.addEventListener('click', addData);

function addData(){
    
    for(i=0; i < myUl.length; i++){

        if(txt.value==""){
            alert('Add task here');
            txt.focus()
        }
        else
        {
            
            let newli=document.createElement('li');
            newli.setAttribute('class', 'list-group-item d-flex align-items-center border-0 mb-2 rounded');
            newli.style.backgroundColor= '#dae2e7';
            newli.setAttribute('id', idNo);
            
        
            let newspan=document.createElement('span');
            newspan.setAttribute('class','w-100');
            newspan.setAttribute('id', idNo);

            newspan.innerText=txt.value;

            newli.appendChild(newspan);

            idNo++;

        
            myUl[i].appendChild(newli);

            txt.value='';

            txt.focus();
        }
    
    }
    
}




