// const button = document.getqueryselector("#submit").onclick
 function goToDash() {
    location.href = "dashboard.html";
 }


 function auth(evt){
    const user = document.querySelector("#username").value;
    const pass = document.querySelector("#pass").value;
    const accessDenied = document.querySelector("#accessdenied");
    (user==="yaniv"&& pass==="1234")? goToDash(): accessDenied.innerText = "ACCESS DENIED!";
}
