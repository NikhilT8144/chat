let permission = Notification.permission;
if(permission === "granted") {
   showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
  alert("Use normal alert");
}
function showNotification() {
   if(document.visibilityState === "visible) {
       return;
   }
   var title = "Neptune - Chat";
   icon = "icon.png"
   var body = "Checking for new messages...";
   var notification = new Notification('Title', { body, icon });
   notification.onclick = () => { 
          notification.close();
          window.parent.focus();
   }
}
function requestAndShowPermission() {
   Notification.requestPermission(function (permission) {
      if (permission === "granted") {
            showNotification();
      }
   });
}
