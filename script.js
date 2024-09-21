document.getElementById('generate-btn').addEventListener('click', function() {
    var input = document.getElementById('qr-input').value;
    if (input.trim() !== "") {
        var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(input);
        document.getElementById('qr-code').innerHTML = '<img src="' + qrUrl + '" alt="QR Code">';
    } else {
        alert("Please enter text to generate a QR code.");
    }
});