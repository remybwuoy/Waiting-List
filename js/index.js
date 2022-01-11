var form = document.getElementById('db-form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("db-form")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      alert('Successful')
      // window.location.href = 'https://remysportfolio.netlify.app/';
    });
  });




// function save() 
// {
//     const data = document.getElementById('db-form').elements[0].value;
 
//   if(ValidateEmail(data))
//   {
//     database.ref('email').push({ email: data}).then(function(snapshot) {
//       pass(); // some success method
//       }, function(error) 
//          {
//             console.log('error' + error);
//             fail(); // some error method
//           });
//      document.getElementById('frm1').reset();
//   }

// }

// function ValidateEmail(mail) 
// {
//     if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
//         {
//           pass();
//           return (true);
//         }
//     else{
//           fail();
//           return (false);
//           }
// } 


// function fail()
// {

//   $('#fail').finish().show().delay(1000).fadeOut(6000);

// }
// function pass()
// {
 
// $('#succ').finish().show().delay(1000).fadeOut(6000);

// }