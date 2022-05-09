let menu=document.querySelector('.menu-icon');

menu.onclick=()=>{
    menu.classList.toggle("move")
}
//Reviews swiper
var swiper=new Swiper(".reviews-content",{
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:true,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
});
//email js
function validate(){
    let name=document.querySelector('.name');
    let email=document.querySelector('.email');
    let msg=document.querySelector('.message');
    let sendBtn=document.querySelector('.send-btn');

    sendBtn.addEventListener('click',(e) =>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value,email.value,msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_kofcaal","template_yvd3ngk",{
        to_name: name,
        from_name: email,
        message: msg,
    });
}


function emptyerror(){
    swal({
        title:"Oh! Snap....",
        text: "Fields cannot be empty",
        icon: "error",
    });
}
function success(){
    swal({
        title:"Roger! Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
    });
}
