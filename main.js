const form = document.getElementById('payForm');
form.addEventListener("submit", payNow);

function payNow(e) {
 e.preventDefault();
 
    FlutterwaveCheckout({
      public_key: "YOUR_SECRET_KEY_HERE",
      tx_ref: "AK_"+Math.floor((Math.random() * 1000000000) + 1),
      amount: document.getElementById("amount").value,
      currency: "NGN",
	  
      //payment_options: "card,mobilemoney,ussd",
	  
      customer: {
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phoneNumber").value,
        name: document.getElementById("fullName").value,
      },
	  
      callback: (data)=> { // specified callback function
        //console.log(data);
		  const reference = data.tx_ref;
      alert('Payment complete! Reference: ' + reference);
      },
	  
      customizations: {
        title: "AppKinda",
        description: "FlutterWave Integration in Javascript."
		
       // logo: "flutterwave/usecover.gif",
      },
    });
  }