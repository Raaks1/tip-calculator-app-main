/*const bill = document.getElementById("bill")
const people = document.getElementById("people")
const perc = document.querySelectorAll(".perc")

const tipAmount = document.querySelector(".tip-amount")
const total = document.querySelector(".total-amount")



   
})*/

/*reset() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }*/





 
 /* const billInput = document.querySelector("#bill")
  const tip_percentage_buttons = document.querySelector('.tip-buttons')
  const number_of_people = document.querySelector("#people")
  const tip_amount = document.querySelector("#tip_amount")
  const total = document.querySelector("#total")
  const tip_percentage_button = document.querySelectorAll(".perc")

  
  let tipPercentage = 0
  let bill = 0
  let noOfPeople = 0
  
  
  

  


  billInput.addEventListener('input', (e) => {
    if (e.target.value != '') {
      x = e.target.value

      bill = x
      calculate(bill, tipPercentage, noOfPeople)
    
    }})
    

    number_of_people.addEventListener('input', (e) => {
        if (e.target.value != '') {
          x = e.target.value

          oOfPeople = x
      calculate(bill, tipPercentage, noOfPeople)
        

        }})

        tip_percentage_buttons.addEventListener('click',(e)=> {
            
              if (e.target.type == 'button') {
                tipPercentage = parseInt(e.target.value)
                e.target.classList.add('active')
                calculate(bill, tipPercentage, noOfPeople)
              }
            }
          })
          function calculate(bill, tipPercentage, noOfPeople) {
            total_tip = (tipPercentage * bill)/100
            tip_per_person = (total_tip/noOfPeople).toFixed(2)
            total_per_person = (bill/noOfPeople) + tip_per_person.toFixed(2)
            total.textContent = "$" + total_per_person
            tip_amount.textContent = "$" + tip_per_person
          }*/


    
          /*let bill = document.querySelector("#bill").value;
          let people = document.querySelector("#people").value;
          let tipp = document.querySelector("#five").value;
        


     
       

          function calculateTip(){





          let tot = (bill * tipp) / people;
          tot = Math.round(tot * 100)/ 100;
          tot = tot.toFixed(2);

          document.querySelector("#tip_amount").style.display = "block";
          document.querySelector("#total").innerHTML
        }*/



        const bill = document.getElementById("bill")
        const people = document.getElementById("people")
        const perc = document.querySelectorAll(".perc")
        const five = document.getElementById("five")
        const ten = document.getElementById("ten")
        const fifteen = document.getElementById("fifteen")
        const twentyfive = document.getElementById("twentyfive")
        const fifty = document.getElementById("fifty")
        const tipAmount = document.querySelector(".tip-amount")
        const total = document.querySelector(".total-amount")
        const random = document.getElementById("random")
        const nullstill = document.getElementById("reset")
        const error = document.querySelector(".error")
      
        
       






        
        
        five.addEventListener("click", () => {
            let tip = (five.value)/100 * (bill.value)/(people.value);
            tipAmount.innerHTML = `<span id="tip_amount">${tip.toFixed(2)}</span>`
            let totalBill = (bill.value) / (people.value) + tip;
            total.innerHTML = `<span id="total">${totalBill.toFixed(2)}<span>`
            zeroPeople();

          })

          ten.addEventListener("click", () => {
            let tip = (ten.value)/100 * (bill.value)/(people.value);
            tipAmount.innerHTML = `<span id="tip_amount">${tip.toFixed(2)}</span>`
            let totalBill = (bill.value) / (people.value) + tip;
            total.innerHTML = `<span id="total">${totalBill.toFixed(2)}<span>`
            zeroPeople();
          })

          fifteen.addEventListener("click", () => {
            let tip = (fifteen.value)/100 * (bill.value)/(people.value);
            tipAmount.innerHTML = `<span id="tip_amount">${tip.toFixed(2)}</span>`
            let totalBill = (bill.value) / (people.value) + tip;
            total.innerHTML = `<span id="total">${totalBill.toFixed(2)}<span>`
            zeroPeople();
          })

          

          twentyfive.addEventListener("click", () => {
            let tip = (twentyfive.value)/100 * (bill.value)/(people.value);
            tipAmount.innerHTML = `<span id="tip_amount">${tip.toFixed(2)}</span>`
            let totalBill = (bill.value) / (people.value) + tip;
            total.innerHTML = `<span id="total">${totalBill.toFixed(2)}<span>`
           
            zeroPeople();
          })

          fifty.addEventListener("click", () => {
            let tip = (fifty.value)/100 * (bill.value)/(people.value);
            tipAmount.innerHTML = `<span id="tip_amount">${tip.toFixed(2)}</span>`
            let totalBill = (bill.value) / (people.value) + tip;
            total.innerHTML = `<span id="total">${totalBill.toFixed(2)}<span>`
           
          
            zeroPeople();

            
          })

         /* function zeroPeople() {
            if (people.value === "") {
                error.classList.add("show-error")
               
                people.style.border = "3px solid red"
            }}*/
            

           
   
         /* nullstill.addEventListener("click", clearAll()) 
            document.getElementById("#bill").value = " ";
            document.getElementById("#people").value = '';
            document.getElementById("#tipAmount").value = '';
            document.getElementById("#total").value = '';
          


            function clearAll() {
              document.getElementById("bill").reset();
            }

            nullstill.addEventListener("click", () =>{
            document.getElementById('bill').reset();
          })

        
          function clearAll() {
            document.getElementById("#bill").value = " ";
            document.getElementById("#people").value = " ";
            document.getElementById("#tip_amount").value = " ";
            document.getElementById("#total").value = " ";
          }

          nullstill.addEventListener("click", () => {
            document.getElementById("#bill").value = "";
            document.getElementById("#people").value = "";
            document.getElementById("#tipAmount").value = 0;
            document.getElementById("#total").value = 0;


          })*/

          
          nullstill.addEventListener("click", () => {
            people.value=''
            bill.value=``
            random.value=``
            tipAmount.innerHTML = `<span id="tip_amount">0.00</span>`
            total.innerHTML = `<span id="total">0.00<span>`
          })

         
          custom.addEventListener("click", () => {
            custom.style.display = "none"
            random.style.display = "inline"
        })
        
        random.addEventListener("input", () => {
            let tip = (random.value)/100 * (bill.value);
            tip = tip.toFixed(2)
            tipAmount.innerHTML = `<span id="tip_amount">${tip}</span>`
            let totalBill = (tip) / (people.value)
            totalBill = parseInt(totalBill)
            totalBill = totalBill.toFixed(2)
            total.innerHTML = `<span id="total">${totalBill}</total>`
            zeroPeople();
         
        })

       
        
       /*function zeroPeople(){
          let x = people.value;
          if (x == ``) {
            error.style.display = block;
            return false;
          }}*/ 
          
         
      

          function zeroPeople() {
           if (people.value == 0 || people.vaule == ``)
           
              {
                error.classList.add("show-error")
                people.style.border = "3px solid rgb(240, 112, 112)"
                /*tipAmount.innerHTML = ``
                total.innerHTML = ``*/
               
              }
            
            else { 
            error.classList.remove("show-error")
            people.style.border ="none"
           

          }}


              



