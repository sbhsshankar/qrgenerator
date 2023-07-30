

let imgBOX = document.getElementById("imgBOX");
let imgQR = document.getElementById("imgQR");
let QRtext = document.getElementById("QRtext");

function generateQR(){
    if(QRtext.value.length > 0){
    imgQR.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
    imgBOX.classList.add("show-img");
    }else{
        QRtext.classList.add("error");
        setTimeout(()=>{
            QRtext.classList.remove('error');
        }, 1000);
    }

}