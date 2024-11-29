$(document).ready(function () {
    let token = localStorage.getItem("token")
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/restaurant/gettoprestaurant/4",
        mode: "cors",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .done(function (msg) {

            if (msg.success) {
                $.each(msg.data, function (index, value) {
                    $("#restaurantContainer").append(`
        <a href="restaurantdetail.html?id=${value.id}">
            <div class="restaurantCard">
                <div>
                    <img src="http://localhost:8080/restaurant/file/${value.image}" alt="" srcset="">
                </div>
                <div>
                    <div>${value.id}</div>
                    <div>${value.title}</div>
                    <div>${value.description}</div>
                </div>
            </div>
        </a>
                        `)
                })
            }
            else {
                alert("Khong lay duoc restaurant")

            }
        });
})