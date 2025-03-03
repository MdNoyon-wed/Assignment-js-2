
document.getElementById("main-card").addEventListener("click",function(){

  window.location.href="new.html"

 
})


const allBtn = document.getElementsByClassName("comon-class")
 
for(let i = 0 ; i < allBtn.length ; i++){
 
 allBtn[i].addEventListener("click",function(event){

  event.target.disabled = true;

  const firstNumber = document.getElementById("first-number").innerText;
  const converted = parseFloat(firstNumber);
   


  const seandNumber =document.getElementById("seand-Number").innerText;
  const convetedNumber = parseFloat(seandNumber);
 

  const number = converted ;

  const number1 = convetedNumber ;

  // console.log(number,number1).innerText;

  const historyContiner = document.getElementById("historyContiner")

  const history=document.createElement("p")
  history.classList.add('rounded',"p-2","bg-slate-100","border")

  
   history.textContent= new Date();
 

  
  historyContiner.appendChild(history)

  if(number,number1,allBtn[i]){
     
    const sum = allBtn[i] = number +1 ;

    document.getElementById("first-number").innerText = sum;

    const sum1 =allBtn[i] = number1 -1 ;

    document.getElementById("seand-Number").innerText = sum1;

   

    alert("Board updated Succesfuly");

  }

   })

}

document.getElementById("history-btn").addEventListener("click",function(){

const historyContiner =  document.getElementById("historyContiner");
 historyContiner.textContent=''

  // historyContiner.removeChild()

 


  
})

const colors =["red","green","blue"]
const bgColor = document.getElementById("bg-chang").addEventListener("click",function(){

  document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

 
})

 document.getElementById("Back-file").addEventListener("click",function(){

  window.location.href="../index.html"

  

})



// const NgColor = document.getElementById("bg-chang").addEventListener("click",function(){

//   document.body.style.backgroundColor = '';

 
// })




 
 