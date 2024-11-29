$(document).ready(function () {
    $("#btnSignin").click(() => {
        let email = $("#email").val()
        let pass = $("#password").val()
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/login/signin",
            data: {
                username: email,
                password: pass,
            }
        })
            .done(function (msg) {
                if (msg.data) {
                    localStorage.setItem("token", msg.data)
                    window.location.href = './index.html';

                } else {
                    alert("Dang nhap that bai")

                }
            });
    })
})