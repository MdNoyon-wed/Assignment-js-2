
document.getElementById("main-card").addEventListener("click",function(){
  window.location.href="new.html"

  // console.log("card")
})


const allBtn = document.getElementsByClassName("comon-class")
//  console.log(allBtn)

 
// console.log(convertedNumber)
  
for(let i = 0 ; i < allBtn.length ; i++){

  // console.log(allBtn)

  // allBtn[i]

 allBtn[i].addEventListener("click",function(event){

  event.target.disabled = true;



  // console.log(allBtn[i])
 
   

  const firstNumber = document.getElementById("first-number").innerText;
  const converted = parseFloat(firstNumber);
  //  console.log(typeof converted)


  const seandNumber =document.getElementById("seand-Number").innerText;
  const convetedNumber = parseFloat(seandNumber);
  //  console.log(typeof convetedNumber)

  const number = converted ;

  const number1 = convetedNumber ;

  // console.log(number,number1).innerText;

  const historyContiner = document.getElementById("historyContiner")

  const history=document.createElement("p")
  history.classList.add('rounded',"p-2","bg-slate-100","border")

  history.textContent="hello"
  
  historyContiner.appendChild(history)

  if(number,number1,allBtn[i]){
     
    const sum = allBtn[i] = number +1 ;

    document.getElementById("first-number").innerText = sum;

    const sum1 =allBtn[i] = number1 -1 ;

    document.getElementById("seand-Number").innerText = sum1;

   

    alert("Board updated Succesfuly");


    // if(allBtn[i]){

    //   alert("Board updated Succesfuly")

    // }else{

    //    btnDisabled.setAttribute('disabled',true);
      
    // }

    //  alert("Board updated Succesfuly")


  }



   })

}

document.getElementById("history-btn").addEventListener("click",function(){

const historyContiner =  document.getElementById("historyContiner");
 historyContiner.textContent=''
  // historyContiner.removeChild()

  // allChild.appendChild();


  
})

 
 