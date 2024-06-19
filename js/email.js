let _url = new URLSearchParams(window.location.search);
let email = _url.get("email");
document.getElementById("user").innerText = email;
