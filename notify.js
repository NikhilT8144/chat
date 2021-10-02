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
   var title = "JavaScript Jeep";
   icon = "image-url"
   var body = "Message to be displayed";
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
