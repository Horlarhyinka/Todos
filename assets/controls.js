const items = document.querySelectorAll('li');

const trashCans =  document.querySelectorAll('#trashCan');
trashCans.forEach(trashCan =>{
  trashCan.addEventListener('click',(e)=>{
       const endPoint = `/todos/${trashCan.dataset.doc}`
     fetch(endPoint,{method:'DELETE'})
     .then((response)=> response.json())
     .then((response) => window.location.href = response.redirect)
.catch(err => {console.log(err)})
})

})