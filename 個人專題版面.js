
        var burger = document.querySelector(".burger")
        var section1 = document.querySelector(".section-1")
        var section2 = document.querySelector(".section-2")
        var section4 = document.querySelector(".section-4")
        var section4_2 = document.querySelector(".section-4-2")
        var section5 = document.querySelector(".section-5")
        var section6 = document.querySelector(".section-6")
        var section7 = document.querySelector(".section-7")
        var section8 = document.querySelector(".section-8")
        var section9 = document.querySelector(".section-9")
        var footer = document.querySelector("footer")
        
        


        var header=document.querySelector("header")
        var burger1=document.querySelector("#burger1")
        var burger2= document.querySelector("#burger2")
        var burger3=document.querySelector("#burger3")
        var nav=document.querySelector("nav")
        var section3=document.querySelector(".section-3")

        var burger_800 = document.querySelector(".burger-phone")
        var section2 = document.querySelector(".section-2")
        var header_800=document.querySelector(".header-phone")
        var burger1_800=document.getElementById("burger1-phone")
        var burger2_800= document.getElementById("burger2-phone")
        var burger3_800=document.getElementById("burger3-phone")
        
        burger.onclick = function () {
            normal()
        }
        burger_800.onclick = function () {
                to800()
        }
        function normal(){
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
        function to800(){
            if (section2.classList.contains("act")) {
                section2.classList.remove("act")
                header_800.classList.remove("act")
                burger_800.classList.remove("act")
                burger1_800.classList.remove("act")
                burger2_800.classList.remove("act")
                burger3_800.classList.remove("act")
                nav.classList.remove("act")
            } else {
                section2.classList.add("act")
                header_800.classList.add("act")
                burger_800.classList.add("act")
                burger1_800.classList.add("act")
                burger2_800.classList.add("act")
                burger3_800.classList.add("act")
                nav.classList.add("act")
            }
        }
        // section1.onclick=function(){
        //     if (section2.classList.contains("act")) {
        //         section2.classList.remove("act")
        //         header.classList.remove("act")
        //         burger.classList.remove("act")
        //         burger1.classList.remove("act")
        //         burger2.classList.remove("act")
        //         burger3.classList.remove("act")
        //         nav.classList.remove("act")
        //         header_800.classList.remove("act")
        //         burger_800.classList.remove("act")
        //         burger1_800.classList.remove("act")
        //         burger2_800.classList.remove("act")
        //         burger3_800.classList.remove("act")
        //     } else {
        //         section2.classList.remove("act")
        //         header.classList.remove("act")
        //         burger.classList.remove("act")
        //         burger1.classList.remove("act")
        //         burger2.classList.remove("act")
        //         burger3.classList.remove("act")
        //         nav.classList.remove("act")
        //         header_800.classList.remove("act")
        //         burger_800.classList.remove("act")
        //         burger1_800.classList.remove("act")
        //         burger2_800.classList.remove("act")
        //         burger3_800.classList.remove("act")
        //     }
        //    }

       section3.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
            header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
            header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       section4.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       section4_2.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       section5.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       section6.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       section7.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       section8.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       section9.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
       footer.onclick=function(){
        if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }


       section2.onclick=function(){
       if (section2.classList.contains("act")) {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        } else {
            section2.classList.remove("act")
            header.classList.remove("act")
            burger.classList.remove("act")
            burger1.classList.remove("act")
            burger2.classList.remove("act")
            burger3.classList.remove("act")
            nav.classList.remove("act")
             header_800.classList.remove("act")
            burger_800.classList.remove("act")
            burger1_800.classList.remove("act")
            burger2_800.classList.remove("act")
            burger3_800.classList.remove("act")
        }
       }
      
       

        