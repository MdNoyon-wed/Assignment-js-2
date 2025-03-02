
const allBtn = document.getElementsByClassName("comon-class")
//  console.log(allBtn)

 



// console.log(convertedNumber)
  
for(let i = 0 ; i < allBtn.length ; i++){

 allBtn[i].addEventListener("click",function(){
 
  const firstNumber = document.getElementById("first-number").innerText;

  const converted = parseFloat(firstNumber);
  //  console.log(converted)

  const seandNumber =document.getElementById("seand-Number").innerText;
  // console.log(seandNumber)
  const convertedNumber = parseFloat(seandNumber);

  const number = converted +1;

  const number1 = convertedNumber -1 ;

  // console.log(number,number1).innerText;

  if(number,number1){

    alert("done");

    }else{
      [i].seAttribute('disabled',true)
    }
  

   })
}
 
 