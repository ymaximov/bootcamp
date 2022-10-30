// const dashAlert = document.querySelector("#dashbtn");
// dashAlert.addEventListener("click", entryWarn)
// function entryWarn(){
//     alert("Entry to Yaniv CRM is for Autorized Personnel Only! Press OK to Continue")
// };


const form = document.querySelector("#invform");
form.addEventListener("submit", searchItem);
function searchItem(event){
    event.preventDefault()
    if (document.querySelector("#itemid").value === "1234"){
        document.querySelector("#itemname").value = "iPhone 14"
        document.querySelector("#instock").value = "154"
    } else {
        const notExist = document.querySelector("#notexist");
        notExist.textContent = "Item does not exist"
    }
}