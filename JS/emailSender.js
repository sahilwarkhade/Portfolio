let senderMessage=document.getElementById("senderMessage");
let senderSubject=document.getElementById("senderSubject");
let senderEmail=document.getElementById("senderEmail");
let senderName=document.getElementById("senderName");
let form=document.querySelector("form");

// function sendEmail(){
//     const bodyOFEmail=`FullName: ${senderName.value} <br> Email: ${senderEmail.value} <br> Message: ${senderMessage.value}`
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "sahilwarkhade111@gmail.com",
//         Password : "A01E460E00C690E0977267EC3BB6AD167BF8",
//         To : 'sahilwarkhade111@gmail.com',
//         From : "sahilwarkhade111@gmail.com",
//         Subject : senderSubject.value,
//         Body : bodyOFEmail,
//     }).then(
//       message => alert("Email Send Successfully")
//     ).catch(err=>alert("Email not send"))
// }

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


let linkedin=document.getElementById("linkedin-icon");

console.log(linkedin);
function redirect(url) {
    window.location.href = url;
    // window.open(url)
    console.log("iam inside")
    
}