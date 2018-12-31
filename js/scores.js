 
  // Author: Idongesit Utong 
  //  Project: Mini Project 4 (Javascripts)  score sheet
  //  Date: 28/ MAY/ 2018
 

		 function Scores(grade,display){

		          // English

		           if(grade>=80){
		           	document.getElementById(display).value= 'A';
		           }

		           else if(grade>=70){
		           	document.getElementById(display).value= 'B';
		           }
		           
		          else if(grade>=60){
		           	document.getElementById(display).value= 'C';
		           }
		          else if(grade>=50){
		          	document.getElementById(display).value= 'D';
		          }
		          
		          else {
		           	document.getElementById(display).value= 'F';
		           }

		    }

		        // TOTAL  

		        function Result(){

		 var en = parseFloat(document.getElementById('english').value);
		 var ma =   parseFloat(document.getElementById('maths').value);
		 var ch = parseFloat(document.getElementById('chemistry').value);
		 var bi = parseFloat(document.getElementById('biology').value);
		 var fr = parseFloat(document.getElementById('french').value);

		 var totalscores = en + ma + ch + bi + fr;

		 document.getElementById('total').innerHTML = totalscores;

               // AVERAGE

         var average = totalscores/5;

         document.getElementById('avg').innerHTML = average; 

                  // REMARKS

			  if (average>=80){
			 	document.getElementById('remark').innerHTML = "I'm proud of You";
			 }else if(average>=70){
			    document.getElementById('remark').innerHTML = "Great Job, There is room for improvement";
			 }else if(average>=60){
			   document.getElementById('remark').innerHTML = "Good Job, You need to work harder";
			 }else if(average>=50){
			 	document.getElementById('remark').innerHTML = "You really need to step up and work harder";
			 }else{
			 	document.getElementById('remark').innerHTML = "You disappointed your Teacher";
			 }

              // IMAGES

             if (average>=80){
			 	document.getElementById('image').innerHTML = "<img src='images/like.png'>";
			 }else if(average>=70){
			    document.getElementById('image').innerHTML = "<img src='images/happy.png'>";
			 }else if(average>=60){
			   document.getElementById('image').innerHTML = "<img src='images/smiling.png'>";
			 }else if(average>=50){
			 	document.getElementById('image').innerHTML = "<img src='images/sad.png'>";
			 }else{
			 	document.getElementById('image').innerHTML = "<img src='images/crying.png'>";
			 }
          

   }
 

           // PASSWORD

           function check(){

           var pass = document.getElementById("pswd");

            if(pass.type == 'password') {
            	pass.type = 'text'; 	
            }else {
            	pass.type = 'password';
            }

		 }
		 



		 
		/*    function Scores2(){

		 // var english = parseFloat(document.getElementById('eng').value);
		 var maths =   parseFloat(document.getElementById('math').value);
		 // var chemistry = parseFloat(document.getElementById('chem').value);
		 // var biology = parseFloat(document.getElementById('bio').value);
		 // var french = parseFloat(document.getElementById('fre').value);
          
                    // Maths

		           if(document.getElementById('maths').value>=80){
		           	document.getElementById('math').value= 'A';
		           }

		           else if(document.getElementById('maths').value>=70){
		           	document.getElementById('math').value= 'B';
		           }
		           
		          else if(document.getElementById('maths').value>=60){
		           	document.getElementById('math').value= 'C';
		           }

		           else if(document.getElementById('maths').value>=50){
		          	document.getElementById('math').value= 'D';
		          }
		          
		          else {
		           	document.getElementById('math').value= 'F';
		           }

		    }

		    function Scores3(){

		 var english = parseFloat(document.getElementById('eng').value);
		 var maths =   parseFloat(document.getElementById('math').value);
		 var chemistry = parseFloat(document.getElementById('chem').value);
		 var biology = parseFloat(document.getElementById('bio').value);
		 var french = parseFloat(document.getElementById('fre').value);

		                // Chemistry

		           if(document.getElementById('chemistry').value>=80){
		           	document.getElementById('chem').value= 'A';
		           }

		           else if(document.getElementById('chemistry').value>=70){
		           	document.getElementById('chem').value= 'B';
		           }
		           
		          else if(document.getElementById('chemistry').value>=60){
		           	document.getElementById('chem').value= 'C';
		           }

		           else if(document.getElementById('chemistry').value>=50){
		          	document.getElementById('chem').value= 'D';
		          }
		          
		          else {
		           	document.getElementById('chem').value= 'F';
		           }

		    }

		     function Scores4(){

		 var english = parseFloat(document.getElementById('eng').value);
		 var maths =   parseFloat(document.getElementById('math').value);
		 var chemistry = parseFloat(document.getElementById('chem').value);
		 var biology = parseFloat(document.getElementById('bio').value);
		 var french = parseFloat(document.getElementById('fre').value);

		                // Biology

		           if(document.getElementById('biology').value>=80){
		           	document.getElementById('bio').value= 'A';
		           }

		           else if(document.getElementById('biology').value>=70){
		           	document.getElementById('bio').value= 'B';
		           }
		           
		          else if(document.getElementById('biology').value>=60){
		           	document.getElementById('bio').value= 'C';
		           }

		           else if(document.getElementById('biology').value>=50){
		          	document.getElementById('bio').value= 'D';
		          }
		          
		          else {
		           	document.getElementById('bio').value= 'F';
		           }

		    }

		     function Scores5(){

		 var english = parseFloat(document.getElementById('eng').value);
		 var maths =   parseFloat(document.getElementById('math').value);
		 var chemistry = parseFloat(document.getElementById('chem').value);
		 var biology = parseFloat(document.getElementById('bio').value);
		 var french = parseFloat(document.getElementById('fre').value);

		                // French

		           if(document.getElementById('french').value>=80){
		           	document.getElementById('fre').value= 'A';
		           }

		           else if(document.getElementById('french').value>=70){
		           	document.getElementById('fre').value= 'B';
		           }
		           
		          else if(document.getElementById('french').value>=60){
		           	document.getElementById('fre').value= 'C';
		           }

		           else if(document.getElementById('french').value>=50){
		          	document.getElementById('fre').value= 'D';
		          }
		          
		          else {
		           	document.getElementById('fre').value= 'F';
		           }

		    }

 */
