function genQR() {
    const qrBox = document.getElementById("qr-box");
    const placeholder = document.getElementById("qr-placeholder");
    const mytext = document.getElementById("qrtext").value.trim();
    let mysize = parseInt(document.getElementById("size").value);
    const mycolor = document.getElementById("colorPicker").value;

    if (mytext !== "") {
        if (!mysize || mysize < 50 || mysize > 300) {
            document.getElementById("size-warning").style.display = "block";
            return;
        }
        document.getElementById("size-warning").style.display = "none";
        if (placeholder) placeholder.remove();
        qrBox.innerHTML = "";
        new QRCode(qrBox, {
            text: mytext,
            width: mysize,
            height: mysize,
            colorDark: mycolor,
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        alert("⚠️ Please enter some text to generate QR Code!");
    }
}