let count =0;

 const dec = document.querySelector('.decrease')

 const reset = document.querySelector('.reset')
 const inc = document.querySelector('.increase')

 const value = document.getElementById('value')
 
 dec.addEventListener('click',function(){

    count--

    value.textContent=count
    setColor()


 })

 reset.addEventListener('click',function(){
    count=0

    value.textContent=count
setColor()
 })


 inc.addEventListener('click',function(){

    count++

    value.textContent=count
    setColor()
    

 })

 function setColor(){

    if(count<0){

        value.style.color="red"
    }
    else if(count==0){

        value.style.color="black"
    }
    else{

        value.style.color= "green"
    }
 }