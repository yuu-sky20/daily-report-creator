// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBYSClvP0-FifIWT3SBh0IgK8tdANJF6DI",
	authDomain: "daily-report-creator.firebaseapp.com",
	projectId: "daily-report-creator",
	storageBucket: "daily-report-creator.appspot.com",
	messagingSenderId: "887237324591",
	appId: "1:887237324591:web:d86f1491fa7fbbafe0fbda",
	measurementId: "G-XDPFP0LLL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);