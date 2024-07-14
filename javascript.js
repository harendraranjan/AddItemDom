const form=document.querySelector('#addForm');
const itemlist=document.querySelector('#items');
const filter=document.querySelector('#filter')

// form submit event
form.addEventListener('submit',addItem);
//delete event
itemlist.addEventListener('click',remove);
//Filter Event
filter.addEventListener('keyup',filterItem)

//add Item
 function addItem(e){
    e.preventDefault();
    //get input value
    const newItem=document.querySelector('#item').value;
    //  get li element
    const li=document.createElement('li');
    li.className='list-group-item'
    // creat new node

    const newNode=document.createTextNode(newItem);
    li.appendChild(newNode);

    const deleteBtn=document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'))

    li.appendChild(deleteBtn)

    itemlist.append(li)
 }
// remove
 function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you confirm')){
            var li=e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}

function filterItem(e){
    // Get text value
    const text=e.target.value.toLowerCase();
    //Get lis
    const items=document.getElementsByTagName('li');
    //consvert ot an array
    Array.from(items).forEach(function(item)  {
        const itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block'
        }else{
            item.style.display='none';
        }
    });
    console.log(items)
}