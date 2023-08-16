import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref,child, get, set  } from "firebase/database";

export function setCurrentApp(currentApp: string) {

  const db = startFirebase();
  set(ref(db, 'configs'), {
    name: 'currentHomepage',
    value: currentApp,
  });
}

export async function getCurrentApp(): Promise<string> {
  
  const dbRef = ref(startFirebase());
  const snapshot = await get(child(dbRef, `configs`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val().value;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return snapshot
}

 function startFirebase():Database {
  const firebaseConfig = {
    apiKey: "AIzaSyC-Z7hdAK80fuG7fgtxHI7LqMOMx2Mzp5k",
    authDomain: "qr-code-tattoo-33316.firebaseapp.com",
    projectId: "qr-code-tattoo-33316",
    storageBucket: "qr-code-tattoo-33316.appspot.com",
    messagingSenderId: "1025747955502",
    appId: "1:1025747955502:web:12cb0698b9ecdae0b1d4bf",
    measurementId: "G-Q97YY1YTKD",
    databaseURL: "https://qr-code-tattoo-33316-default-rtdb.firebaseio.com",
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  return database;
}