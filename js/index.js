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
      swal("Good job!", "You clicked the button!", "success")
      // alert('Successful')
      // window.location.href = 'https://abc.com';
    });
  });