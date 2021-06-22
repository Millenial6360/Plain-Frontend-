console.log("start") ;
const deleteBtn = document.getElementById("delete");
const notification = document.getElementById("notification");
const closeBtn = document.getElementById("close");

deleteBtn.addEventListener("click", () => {
    notification.classList.add("notification-show");
    console.log('delete');
});

closeBtn.addEventListener("click", () => {
    console.log('click');
    notification.classList.remove("notification-show");
});