let input = document.getElementById("email");
let errorText = document.getElementById("err");
let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let btn = document.getElementById("btn");

input.addEventListener('input', () => {
    if (!input.value.match(regex)) {
        console.log("input works");
        errorText.classList.remove("just-span");
        errorText.classList.add("err");
        input.classList.add("err-mail");
        input.style.border = `1px solid #ff1100`;
    }
    else {
        errorText.classList.remove("err");
        errorText.classList.add("just-span");
        input.classList.remove("err-mail");
        console.log("true");
        input.style.border = `1px solid grey`;
        btn.disabled = false;
    }
})
btn.addEventListener("click", function () {
    let page = `success.html?email=${input.value}`
    location.href = page;
});