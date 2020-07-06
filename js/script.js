


// this function for showing total price of item

function bsushi() { 
    sushiQua = document.getElementById('isushi').value;
    return document.getElementById('sushi').innerHTML = sushiQua*150
 }

 // this function for removing the item

 function rsushi() { 
    document.getElementById('isushi').value = 0 
    document.getElementById('sushi').innerHTML = 0
 }

 // this function for showing total price of item

 function bnoodles() { 
    sushiQua = document.getElementById('inoodles').value;
    return document.getElementById('noodles').innerHTML = sushiQua*100 
 }

 // this function for removing the item

 function rnoodles() { 
    document.getElementById('inoodles').value = 0 
    document.getElementById('noodles').innerHTML = 0
 }

   // this function for showing total price of item

 function bmaggie() { 
    sushiQua = document.getElementById('imaggie').value;
    return document.getElementById('maggie').innerHTML = sushiQua*80
 }

 // this function for removing the item

 function rmaggie() { 
    document.getElementById('imaggie').value = 0 
    document.getElementById('maggie').innerHTML = 0
 }

 // this function for showing total price of item

 function bsoup() { 
    sushiQua = document.getElementById('isoup').value;
    return document.getElementById('soup').innerHTML = sushiQua*120
 }

 // this function for removing the item

 function rsoup() { 
    document.getElementById('isoup').value = 0 
    document.getElementById('soup').innerHTML = 0
 }

 // this function for showing total price of item

 function bcurry() { 
    sushiQua = document.getElementById('icurry').value;
    return document.getElementById('curry').innerHTML = sushiQua*150 
 }

 // this function for removing the item

 function rcurry() { 
    document.getElementById('icurry').value = 0 
    document.getElementById('curry').innerHTML = 0
 }

 // this function for showing total price of item

 function bfriedRice() { 
    sushiQua = document.getElementById('ifriedRice').value;
    return document.getElementById('friedRice').innerHTML = sushiQua*140 
 }

 // this function for removing the item

 function rfriedRice() { 
    document.getElementById('ifriedRice').value = 0 
    document.getElementById('friedRice').innerHTML = 0
 }

 // this function for showing total price of item

 function bchickenGravy() { 
    sushiQua = document.getElementById('ichickenGravy').value;
    return document.getElementById('chickenGravy').innerHTML = sushiQua*200 
 }

 // this function for removing the item

 function rchickenGravy() { 
    document.getElementById('ichickenGravy').value = 0 
    document.getElementById('chickenGravy').innerHTML = 0
 }

 // this function for showing total price of item

 function bpalaav() { 
    sushiQua = document.getElementById('ipalaav').value;
    return document.getElementById('palaav').innerHTML = sushiQua*200 
 }

 // this function for removing the item

 function rpalaav() { 
    document.getElementById('ipalaav').value = 0 
    document.getElementById('palaav').innerHTML = 0
 }


 //1.this function has orderData which stores values using storeInputs function
 //2.addToModal shares the data to next modal
 //3. resets the input values and total
 //4. totalAmount stores the price value so that if no order done it prevents the next modal

var totalAmount = 0;

function proceed(){

   nsushi =  Number(document.getElementById('sushi').innerHTML)
   nnoodles = Number(document.getElementById('noodles').innerHTML)
   nmaggie = Number(document.getElementById('maggie').innerHTML)
   nsoup = Number(document.getElementById('soup').innerHTML)
   ncurry = Number(document.getElementById('curry').innerHTML)
   nfriedRice = Number(document.getElementById('friedRice').innerHTML)
   nchickenGravy = Number(document.getElementById('chickenGravy').innerHTML);
   npalaav = Number(document.getElementById('palaav').innerHTML);

   totalAmount = nsushi+nnoodles+nmaggie+nsoup+ncurry+nfriedRice+nchickenGravy+npalaav;

   //orderData store the input value and price where this data is passing to next modal

   var orderData = storeInputs();

   if(totalAmount>0){
      $('#Proceed').modal('show') 
      addToModal(orderData);
      reset();
   }

   else{
      alert('please enter quantity and click done for the price')
   }
   
   
 }

 //  this function represent total amount

 function addToModal(){
   return document.getElementById('totalPrice').innerHTML = totalAmount +' rs';
 }


//storing the amount data and passing it on proceed function

 function storeInputs(){
    var orderData ={};
    orderData["sushi"] =document.getElementById('sushi').innerHTML;
    orderData["noodles"] =document.getElementById('noodles').innerHTML;
    orderData["maggie"] =document.getElementById('maggie').innerHTML;
    orderData["soup"] =document.getElementById('soup').innerHTML;
    orderData["curry"] =document.getElementById('curry').innerHTML;
    orderData["friedRice"] =document.getElementById('friedRice').innerHTML;
    orderData["chickenGravy"] =document.getElementById('chickenGravy').innerHTML;
    orderData["palaav"] =document.getElementById('palaav').innerHTML;

    orderData["isushi"] =document.getElementById('isushi').value;
    orderData["inoodles"] =document.getElementById('inoodles').value;
    orderData["imaggie"] =document.getElementById('imaggie').value;
    orderData["isoup"] =document.getElementById('isoup').value;
    orderData["icurry"] =document.getElementById('icurry').value;
    orderData["ifriedRice"] =document.getElementById('ifriedRice').value;
    orderData["ichickenGravy"] =document.getElementById('ichickenGravy').value;
    orderData["ipalaav"] =document.getElementById('ipalaav').value;
    
    return orderData;
 }


 // resets the input values and total

 function reset(){
   document.getElementById('isushi').value ='';
   document.getElementById('inoodles').value='';
   document.getElementById('imaggie').value='';
   document.getElementById('isoup').value=''
   document.getElementById('icurry').value=''
   document.getElementById('ifriedRice').value=''
   document.getElementById('ichickenGravy').value=''
   document.getElementById('ipalaav').value=''

   document.getElementById('sushi').innerHTML =0;
   document.getElementById('noodles').innerHTML=0;
   document.getElementById('maggie').innerHTML=0;
   document.getElementById('soup').innerHTML=0
   document.getElementById('curry').innerHTML=0
   document.getElementById('friedRice').innerHTML=0
   document.getElementById('chickenGravy').innerHTML=0
   document.getElementById('palaav').innerHTML=0
 }

 //this fun prevents the proceeding for nextmodal if input value hasnt entered
 //this function resets the delivary value and completes the order

 function final(){
    let finalName = document.getElementById('name').value
    let finalmobile =  document.getElementById('mobile').value
    let finaltext =  document.getElementById('text').value

    document.getElementById('name').value = ''
    document.getElementById('mobile').value = ''
    document.getElementById('text').value = ''

    if((finalName=='')||(finalmobile=='')||(finaltext=='')){
       alert('please enter details for delivary')
    }
    else{
       return $('#finalOrder').modal('show')
    }
 }

 




 