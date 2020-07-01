var burger = document.querySelector(".burger-phone")
        var section2 = document.querySelector(".section-2")
        var header=document.querySelector("header-phone")
        var burger1=document.querySelector("#burger1-phone")
        var burger2= document.querySelector("#burger2-phone")
        var burger3=document.querySelector("#burger3-phone")
        var nav=document.querySelector("nav")
        var section3=document.querySelector(".section-3")
        burger.onclick = function () {
            if (section2.classList.contains("act")) {
                section2.classList.remove("act")
                header.classList.remove("act")
                burger.classList.remove("act")
                burger1.classList.remove("act")
                burger2.classList.remove("act")
                burger3.classList.remove("act")
                nav.classList.remove("act")
            } else {
                section2.classList.add("act")
                header.classList.add("act")
                burger.classList.add("act")
                burger1.classList.add("act")
                burger2.classList.add("act")
                burger3.classList.add("act")
                nav.classList.add("act")
            }
        }