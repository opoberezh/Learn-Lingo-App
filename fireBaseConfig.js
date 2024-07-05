import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAOPk2cmlD2ddxM8k6sACMs_OMNh_axEf8',
  authDomain: 'learn-lingo-app-a8a9d.firebaseapp.com',
  projectId: 'learn-lingo-app-a8a9d',
  storageBucket: 'learn-lingo-app-a8a9d.appspot.com',
  messagingSenderId: '895165702915',
  appId: '1:895165702915:web:2a1a55557e3f9188f77f36',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
