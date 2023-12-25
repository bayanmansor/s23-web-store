//bayan js
const shoppingCart = [];

function removeFromCart(itemName) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name === itemName) {
      shoppingCart.splice(i, 1);
      updateShoppingCart();
      return;
    }
  }
}

function updateShoppingCart()
{
      let cartItems = '';
      for (let i = 0; i < shoppingCart.length; i++) 
      {
            const item = shoppingCart[i];
            cartItems += `

              <table>
                <tr>
			    <th>item Name</th>
			    <th>Price</th>
			    <th>Quantity</th>
			    <th>Total Price</th>
			    <th>options</th>
			  </tr>
              
              <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td>${item.price * item.qty}</td>
                <td>
                  <button onclick="removeFromCart('${item.name}')">Remove </button>
                </td>
              </tr> </table> `;
      }
      document.getElementById('shopping-cart').innerHTML = cartItems;
}

function addToCart(itemName, price, quantity)
 {
  shoppingCart.push({ name: itemName, price: price, qty: quantity });
  updateShoppingCart();
}

function emptyCart() {
  shoppingCart.length = 0; // Clear the shopping cart array
  updateShoppingCart(); // Update the shopping cart display
}

function toggleForm()
{
    var form = document.getElementById("hidden_form");
    var checkbox = document.getElementById("showformtoggl");
    if (checkbox.checked) {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
//   form validation section 


function validateForm() {
   
    var email = document.getElementById("email").value;
    var national_number = document.getElementById("national_number").value;
    var phone = document.getElementById("phonenumber").value;
    var customer_inpute = document.getElementById("customer_input").value;
    var customer_name = document.getElementById("customer_name").value;


    if (customer_name == "" || email == "" || national_number == ""  || phone == ""){
        alert(" Â‰«·ﬂ ÕﬁÊ· ·„  „·√ »⁄œ «ÌÂ« «·„” Œœ„");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert(" !!! Ì—ÃÏ ≈œŒ«· ⁄‰Ê«‰ »—Ìœ ≈·ﬂ —Ê‰Ì ’«·Õ");
        return false;
    }

    var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
    if (!numberPattern.test(national_numbeer_s)) {
        alert("Ì—ÃÏ ≈œŒ«· —ﬁ„ Êÿ‰Ì ’«·Õ »Ì‰ 01 Ê 15");
        return false;
    }


    var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))/;
    if (!phonePattern.test(phone)) {
        alert("Ì—ÃÏ ≈œŒ«· —ﬁ„ Â« › ÕﬁÌﬁÌ „⁄ «œŒ«· «·—„“ «·œÊ·Ì √Ê·«  („À«·: 0999666333)");
        return false;
    }

    var captcha = document.getElementById("customer_input").value;
    if (captcha == "") {
        alert("Ì—ÃÏ ≈œŒ«· —„“ «· Õﬁﬁ «ÌÂ« «·„” Œœ„ !!!");
        return false;
    }

    if (captcha != customer_input) {
        alert("—„“ «· Õﬁﬁ €Ì— ’«·Õ ! Â· «‰  —Ê»Ê ! ");
        return false;
    }

    // All validation rules have passed right we will alewrt the user
   /* alert("<h2> ORDER SUCCESSFULLY SUPMITED ! check your email for more informations.</h2>");
    */
    return true;
}

// end of form validation section



// catcha section

function Captcha() {  
    // Define the characters that can be used in the captcha code
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    // Generate a random string of 6 characters
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += chars[Math.floor(Math.random() * chars.length)];
    }
  
    // Set the value of the txtCaptcha element to the captcha code
    document.getElementById("txtCaptcha").value = captchaCode;  
} 

