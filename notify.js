Notification.requestPermission().then(function (permission) {
    console.log(permission);
});
var title = "Neptune - Chat";
icon = '';
var body = "New Notification, ";
var notification = new Notification(title, { body, icon });
