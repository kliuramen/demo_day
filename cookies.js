function setCookie(cName, cValue, exDays, password) {
    const d = new Date();
    d.setTime(d.getTime() + (exDays*60*60*1000));
    let expires = "expires = " + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + "Password = " + password + ";" + expires + ";path=/";
    return password;
    }
    
    let pass = password;
    
    function getCookie(cName, password) {
        let name = cName + "=";
        pass + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        console.log(ca);
        for (i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c.substring(1);
            }
            if (c.indexOf(name) == 0 && pass == password) {
                return c.substring(name.length, c.length);
            }
        return "";
        }
    }
    
    function checkCookie() {
        let user = getCookie("username")
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            prompt("Please enter your name:", ""); 
            if (username != "" && username != null) {
                setCookie("username", username, 10)
            }
        }
    }