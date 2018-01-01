//DOM variables
const task = document.getElementById('task');
const form = document.querySelector('form');
const heading = document.createElement('h5');
const cardcontent = document.querySelector('.card-action');
const deletebtn = document.createElement('a');

const ul = document.createElement('ul');


//Config the DOM elements to be add
heading.appendChild(document.createTextNode('Tasks'));
heading.setAttribute('id','task-title');
deletebtn.className='clear-tasks btn black';
deletebtn.textContent='Clear Tasks';
deletebtn.addEventListener('click',()=>{
    sessionStorage.clear();
    document.querySelector('.collection').innerHTML='';
});

ul.className='collection';
const initializetasks = ()=>{
    if(!cardcontent.hasChildNodes()){
        //adds the heading to the card-action 
       cardcontent.appendChild(heading);
   
       // add task to the list
        cardcontent.appendChild(ul);
     
       //adds the clear button
       cardcontent.appendChild(deletebtn);
     }
      let ulstruct = document.querySelector('ul.collection');
      let tasks;
      if(sessionStorage.getItem('tasks')!==null){
          tasks = JSON.parse(sessionStorage.getItem('tasks'));
      }
      else{
          tasks = [];
      }
      return tasks;
}
const listupdate = (arr)=>{
    let li ;
    let linkdelete ;
    arr.forEach(element => {
      linkdelete  = document.createElement('a');
linkdelete.className='delete-item secondary-content';
linkdelete.innerHTML='<i class="fa fa-remove"></i>';
linkdelete.addEventListener('click',(e)=>{
    let taskval = e.target.parentElement.parentElement;
    let tasker=e.target.parentElement.parentElement.parentElement;
    tasker.removeChild(taskval);
    deletetask(taskval.firstChild.nodeValue);
    console.log(taskval);
})
        li= document.createElement('li');
        li.appendChild(document.createTextNode(element));
        li.appendChild(linkdelete);
        li.className='collection-item';
       document.querySelector('.collection').appendChild(li);
    });
}
const deletetask = (task)=>{
    console.log(task);
   let tasks = JSON.parse(sessionStorage.getItem('tasks'));
   console.log(typeof tasks);
        tasks.forEach((el,index)=>{
            if(task===el){
              tasks.splice(index,1);
            }
        });
        sessionStorage.setItem('tasks',JSON.stringify(tasks));
} 
const addTask  = (e)=>{
   tasks = initializetasks();
   tasks.push(task.value);
   document.querySelector('.collection').innerHTML='';
    listupdate(tasks);
   sessionStorage.setItem('tasks',JSON.stringify(tasks));
  e.preventDefault();
}
const initasks=initializetasks();
listupdate(initasks);
form.addEventListener('submit',addTask);
