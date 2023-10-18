
const qrText = document.querySelector(".inputField");
const sizes = document.querySelector("#sizes");
const qrBody = document.querySelector(".qr_body");
const genrateBtn = document.querySelector(".genrate");
const downloadBtn = document.querySelector(".download");

let size = sizes.value;

sizes.addEventListener("change", (e)=>{
    size =  e.target.value;
    if(qrText.value.length >0)
    {

         qrBody.style.background ="white";
         qrBody.style.border ="1px solid rgb(176, 176, 176);";
         qrBody.style.margin ="15px auto"
        genrateQr();
        
    }
    else{
        alert("Please write something...");
    }
})

genrateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(qrText.value.length >0)
    {

        qrBody.style.background ="white";
         qrBody.style.border ="1px solid rgb(176, 176, 176);";
         qrBody.style.margin ="15px auto"
        genrateQr();

         
    }
    else{
        alert("Please write something...");
    }
}
)

downloadBtn.addEventListener("click", ()=>{
    let img = document.querySelector(".qr_body img");
    if(img !== null)
    {
        let imgAtri =img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtri)
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector("canvas").toDataURL}`);
    }
})

function genrateQr(){
    qrBody.innerHTML ="";
    new QRCode(qrBody, {
        text: qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    })
}