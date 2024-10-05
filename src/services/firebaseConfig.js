// FIXME: config firebase

import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';

const firebaseConfig = {

};

const firebaseApp  = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
 
export { db };