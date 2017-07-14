importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCf6ltVzGyCa1BetoucRD1BDO6fjE0LmkY",
    authDomain: "notification-85523.firebaseapp.com",
    databaseURL: "https://notification-85523.firebaseio.com",
    projectId: "notification-85523",
    storageBucket: "notification-85523.appspot.com",
    messagingSenderId: "721439807437"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
	const title = 'hello world';
	const options = {
		body: payload.data.status
	};
	return self.registration.showNotification(title, options);
});