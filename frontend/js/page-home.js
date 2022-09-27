var content1 = document.getElementById("content1");
var content2= document.getElementById("content2");
var content3 = document.getElementById("content3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

   function openHM(){
        content1.style.transform = "translateX(0)";
        content2.style.transform = "translateX(600%)";
        content3.style.transform = "translateX(600%)";
        
        btn1.style.backgroundColor = "#3C4F75";
        btn2.style.backgroundColor = "#FFFFFF";
        btn3.style.backgroundColor = "#FFFFFF";

        btn1.style.color = "#FFFFFF";
        btn2.style.color = "#3C4F75";
        btn3.style.color = "#3C4F75";
    }

    
   function openGrooming(){
        content1.style.transform = "translateX(600%)";
        content2.style.transform = "translateX(0)";
        content3.style.transform = "translateX(600%)";

        btn1.style.backgroundColor = "#FFFFFF";
        btn2.style.backgroundColor = "#3C4F75";
        btn3.style.backgroundColor = "#FFFFFF";

        btn1.style.color = "#3C4F75";
        btn2.style.color = "#FFFFFF";
        btn3.style.color = "#3C4F75";
        

                    
    }

    
   function openCareAid(){
        content1.style.transform = "translateX(600%)";
        content2.style.transform = "translateX(600%)";
        content3.style.transform = "translateX(0)";

        btn1.style.backgroundColor = "#FFFFFF";
        btn2.style.backgroundColor = "#FFFFFF";
        btn3.style.backgroundColor = "#3C4F75";

        btn1.style.color = "#3C4F75";
        btn2.style.color = "#3C4F75";
        btn3.style.color = "#FFFFFF";
    }
