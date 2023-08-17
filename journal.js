

let btnJ = document.getElementById("journalBtn");
const showing = document.getElementById("hidden");

btnJ.addEventListener("click", (e) => {
    e.preventDefault();
    
    showing.style.display = "flex";
})

let saveBtn = document.getElementById("saving");

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let inputTitle = document.getElementById("input");
    let inputText = document.getElementById("w3review");

    inputTitle.innerText = inputTitle.value;
    console.log(inputTitle.innerText);

    const post = getCookie("inputTitle");

    if (post !== "") {
        document.getElementById("input").innerHTML = post;
    }
})

function display() {
    const post = document.getElementById("input").value;
    document.getElementById("input").innerHTML = post;

    setCookie("inputTitle", post, 1);
    checkCookie("inputTitle");
}


function setCookie(cName, cValue, exDays) {
    const d = new Date();
    d.setTime(d.getTime() + (exDays*24*60*60*1000));
    let expires = "expires = " + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
    }
    
    function getCookie(cName) {
        let name = cName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        console.log(ca);
        for (i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        return "";
        }
    }
    
    function checkCookie() {
        let user = getCookie("username")
        if (user == "inputTitle") {
        getCookie(inputTitle).valueOf == post}
        // } else {
        //     prompt("Please enter your name:", ""); 
        //     if (username != "" && username != null) {
        //         setCookie("username", username, 10)
        //     }
        }
    