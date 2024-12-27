let senderMessage=document.getElementById("senderMessage");
let senderSubject=document.getElementById("senderSubject");
let senderEmail=document.getElementById("senderEmail");
let senderName=document.getElementById("senderName");
let form=document.querySelector("form");

function sendEmail(){
    let params={
        name:senderName.value,
        email:senderEmail.value,
        subject:senderSubject.value,
        message:senderMessage.value
    }

    emailjs.send("service_qbkve2m","template_x4ou9if",params).then(()=>{
        alert("Email Send Successfully");
    }).catch((e)=>{
        alert("Some error occur try again later");
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
    senderMessage.value="";
    senderEmail.value="";
    senderName.value="";
    senderSubject.value="";
})
