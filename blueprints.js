// Create element
const li = document.createElement('li');
li.className='collection-item';
li.id='new-item';
li.setAttribute('title','New Item');

//create text node and append
li.appendChild(document.createTextNode('Hello'));

//create new link element
const link = document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>';

//append link to li
li.appendChild(link);

//append li as child do ul
document.querySelector('ul.collection').appendChild(li);

let card = document.querySelector('.card');
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
let runEvent = (e)=>{
  console.log(`Event Type: ${e.type}`);
   switch (e.type) {
     case 'mousemove':
     let showcordinates= document.querySelector('h5');
     showcordinates.textContent=`MouseX : ${e.offsetX}, MouseY:${e.offsetY}`;
     document.body.style.backgroundColor=`rgba(${e.offsetX},${e.offsetY},45,${Math.random()}`;
       break;
     case 'submit':
      let tasks;
      if(localStorage.getItem('tasks')!==null){
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      else{
        tasks = [];
      }
      tasks.push(taskInput.value);
      localStorage.setItem('tasks',JSON.stringify(tasks));
      console.log(`Tasks : ${localStorage.getItem('tasks')}`);

      e.preventDefault();
     break;
     default:
       break;
   }
 
};
//event delegation
let deleteItem = (e)=>{
  if(e.target.parentElement.classList.contains('delete-item'))
  {
  alert('delete!');
  e.preventDefault();
  }
}
card.addEventListener('mousemove',runEvent);
form.addEventListener('submit',runEvent);
document.body.addEventListener('click',deleteItem);
// set local storage item
//localStorage.setItem('name','John');


