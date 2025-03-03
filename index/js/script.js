
const allBtn = document.getElementsByClassName("comon-class")
//  console.log(allBtn)

 
// console.log(convertedNumber)
  
for(let i = 0 ; i < allBtn.length ; i++){

  // console.log(allBtn)

  // allBtn[i]

 allBtn[i].addEventListener("click",function(){
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

  if(number,number1,allBtn[i]){
     
    const sum = allBtn[i] = number +1 ;

    document.getElementById("first-number").innerText = sum;

    const sum1 =allBtn[i] = number1 -1 ;

    document.getElementById("seand-Number").innerText = sum1;

     alert("Board updated Succesfuly")


    }



   })

}
 
 