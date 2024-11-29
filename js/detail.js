$(document).ready(function () {
    function getParameterByName(name) {
        const url = window.location.search;
        const params = new URLSearchParams(url);
        return params.get(name);
    }
    const id = getParameterByName('id');
    let token = localStorage.getItem("token")
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/restaurant/detail`,
        mode: "cors",
        data: {
            idRestaurant: id
        },
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .done(function (msg) {
            console.log(msg.data)
            let res = msg.data
            $('#restaurantDetail').append(`
                    <p>${res.title}</p>
                    <img src="http://localhost:8080/restaurant/file/${res.image}" alt="">
                    <p>${res.rating}</p>
                        `)
            if (msg.success) {
                $.each(msg.data.caterogyDTOList, function (index, value) {

                    $("#tabList").append(`
                        <button class="tablink ${index == 0 ? 'active' : ''}" onclick="openTab(event, 'tab${index}')">${value.cateName}</button>
                        `)

                    $("#tabContainer").append(`
                         <div id="tab${index}" class="tab-content ${index == 0 ? 'active' : ''}">
                         </div>
                        `)
                    $.each(value.listFood, function (index1, value1) {
                        $(`#tab${index}`).append(`
                            <h3>${value1.title}</h3>
                            <p>${value1.price}</p>
                            `)
                    })
                })
            }
            else {
                alert("Khong lay duoc restaurant")

            }
        });

})