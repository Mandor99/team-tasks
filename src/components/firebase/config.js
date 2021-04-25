import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDASo-Zz0temj8M9fJK5RvnEPnuVezMoOQ',
	authDomain: 'team-task-3f858.firebaseapp.com',
	projectId: 'team-task-3f858',
	storageBucket: 'team-task-3f858.appspot.com',
	messagingSenderId: '983088368575',
	appId: '1:983088368575:web:4aa4d3d391fde710882f0a',
	measurementId: 'G-8R3HR5RFZ7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
