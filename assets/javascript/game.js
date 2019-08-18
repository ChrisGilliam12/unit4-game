
$( document ).ready(function(){
   var Random=Math.floor(Math.random()*101+19)
   
   $('#randomNumber').text(Random);
   
   
   var crystalOne= Math.floor(Math.random()*11+1)
   var crystalTwo= Math.floor(Math.random()*11+1)
   var crystalThree= Math.floor(Math.random()*11+1)
   var crystalFour= Math.floor(Math.random()*11+1)
  
   var sum= 0; 
   var wins= 0;
   var losses = 0;
  
 $('#wins').text(wins);
 $('#losses').text(losses);

 function reset(){
       Random=Math.floor(Math.random()*101+19);
       $('#randomNumber').text(Random);
       crystalOne= Math.floor(Math.random()*11+1);
       crystalTwo= Math.floor(Math.random()*11+1);
       crystalThree= Math.floor(Math.random()*11+1);
       crystalFour= Math.floor(Math.random()*11+1);
       sum= 0;
       $('#finalTotal').text(sum);
       } 
 
 function winner(){
 alert("You won!");
   wins++; 
   $('#wins').text(wins);
   reset();
 }
 
 function loser(){
 alert ("You lose!");
   losses++;
   $('#losses').text(losses);
   reset()
 }
 
   $('#one').on ('click', function(){
     sum = sum + crystalOne;
     $('#finalTotal').text(sum); 
           
         if (sum == Random){
           winner();
         }
         else if ( sum > Random){
           loser();
         }   
   })  
   $('#two').on ('click', function(){
     sum = sum + crystalTwo;
     $('#finalTotal').text(sum); 
         if (sum == Random){
           winner();
         }
         else if ( sum > Random){
           loser();
         } 
   })  
   $('#three').on ('click', function(){
     sum = sum + crystalThree;
     $('#finalTotal').text(sum);
 
           if (sum == Random){
           winner();
         }
         else if ( sum > Random){
           loser();
         } 
   })  
   $('#four').on ('click', function(){
     sum = sum + crystalFour;
     
     $('#finalTotal').text(sum); 
       
           if (sum == Random){
           winner();
         }
         else if ( sum > Random){
           loser();
         }
   });   
 }); 
