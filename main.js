
      //add product item handler;
      const addProduct = document.getElementById("addProduct");
      addProduct.addEventListener("click", function(){
         const productMainPrice = 1219;
         const productAmount = document.getElementById("productAmount").value;
         const productAmountNumber = parseFloat(productAmount);
         const newCount = productAmountNumber +1;
         document.getElementById("productAmount").value = newCount ;
         const increasePrice = productMainPrice * newCount;
         document.getElementById("itemPrice").innerText = increasePrice;

         updateTotal();
         
      })

       //less product item handler;
       const lessProduct = document.getElementById("lessProduct");
      lessProduct.addEventListener("click", function(){
         const productMainPrice = 1219;
         const productAmount = document.getElementById("productAmount").value;
         const productAmountNumber = parseFloat(productAmount);
         const newCount = productAmountNumber -1;
      
         document.getElementById("productAmount").value = newCount ;
         if(newCount<=1){
         document.getElementById("productAmount").value = 1 ;
         document.getElementById("itemPrice").innerText = productMainPrice;
         }
         else{
         const increasePrice = productMainPrice * newCount;
         document.getElementById("itemPrice").innerText = increasePrice;
         }
         updateTotal();
      })
      //add product item2 handler;
      const addProduct2 = document.getElementById("addProduct2");
      addProduct2.addEventListener("click", function(){
         const productMainPrice2 = 59;
         const productAmount2 = document.getElementById("productAmount2").value;
         const productAmountNumber2 = parseFloat(productAmount2);
         const newCount2 = productAmountNumber2 +1;
         document.getElementById("productAmount2").value = newCount2 ;
         const increasePrice2 = productMainPrice2 * newCount2;
         document.getElementById("itemPrice2").innerText = increasePrice2;
         updateTotal();
      })

       //less product item2 handler;
       const lessProduct2 = document.getElementById("lessProduct2");
      lessProduct2.addEventListener("click", function(){
         const productMainPrice2 = 59;
         const productAmount2 = document.getElementById("productAmount2").value;
         const productAmountNumber2 = parseFloat(productAmount2);
         const newCount2 = productAmountNumber2 -1;
      
         document.getElementById("productAmount2").value = newCount2 ;
         if(newCount2<=1){
         document.getElementById("productAmount2").value = 1 ;
         document.getElementById("itemPrice2").innerText = productMainPrice2;
         }
         else{
         const increasePrice2 = productMainPrice2 * newCount2;
         document.getElementById("itemPrice2").innerText = increasePrice2;
         }
         updateTotal();
      })      

      //close button event handler;
      const removeItem = document.getElementById("removeItem");
      removeItem.addEventListener("click", function(){
         document.getElementById("removeItem_1").style.display ="none";
         document.getElementById("itemPrice").innerText = 0;
      })
      //close button2 event handler;
      const removeItem2 = document.getElementById("removeItem2");
      removeItem2.addEventListener("click", function(){
         document.getElementById("removeItem_2").style.display ="none";
         document.getElementById("itemPrice2").innerText = 0;
      })

      //Subtotal & Total event handler;
     
      function updateTotal(){
         const itemPrice1 = document.getElementById("itemPrice").innerText;
         const itemPrice2 = document.getElementById("itemPrice2").innerText;
         const getSubTotal = parseFloat(itemPrice1) + parseFloat(itemPrice2);
         document.getElementById("subTotal").innerText = getSubTotal;
         
         //adding 3% tax with subtotal price;
         const tax = getSubTotal *3/100;
         document.getElementById("tax").innerText = tax;
         document.getElementById("Total").innerText =getSubTotal + tax;
      }
      updateTotal();
      

      //next page ;
      const checkOut = document.getElementById("checkOut");
      checkOut.addEventListener("click", function(){
          const shoppingArea = document.getElementById("shoppingArea");
          shoppingArea.style.display ="none";
          const customerDetails = document.getElementById("customer-details");
          customerDetails.style.display = "block";
      })
      const confirmedOrder = document.getElementById("confirmedOrder");
      confirmedOrder.addEventListener("click", function(){
          const customerDetail2 = document.getElementById("customer-details");
          customerDetail2.style.display = "none";
          const tnx = document.getElementById("tnx");
          tnx.style.display ="block";
      })
      
