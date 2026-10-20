// let angleDown = document.querySelector(".angle-down");
// let ddlist = document.querySelector(".down-menu");

// angleDown.addEventListener("click", () => {
//     alert("ok work");
//     if(ddlist.style.display === "block"){
//         ddlist.style.display = "none";
//     }
//     else{
//         ddlist.style.isplay = "inline-flex";
//     }
// });


let angleDown = document.querySelectorAll(".angle-down");

angleDown.forEach((item) => {
    item.addEventListener("click", function () {

        let dropdown = this.querySelector(".down-menu, .down-menu-b, .down-menu-c");

        if (dropdown.style.display === "flex") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "flex";
        }

    });
});

