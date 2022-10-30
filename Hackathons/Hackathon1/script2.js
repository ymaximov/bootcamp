const invAlert = document.querySelector("#inventorytab");
invAlert.addEventListener("click", invWarn)
function invWarn(){
    alert("Entry to Inventory Module is for Autorized Personnel Only! Press OK to Continue")
}

setTimeout(startDash, 4000)
function startDash(){
    const form = document.querySelector("#crmform")
    form.style.display = "block"
    const loading = document.querySelector("#crmloading")
    console.log(loading);
    loading.remove();
}

document.querySelector("#fname").value = "Yaniv"
document.querySelector("#lname").value = "Maximov"
document.querySelector("#pnumber").value = "050-606-0123"
document.querySelector("#email").value = "ymaximov@yahoo.com"