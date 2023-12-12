// firebase não utilizado no projeto

import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
// adicionar a configuração do firebase depois para o cadastro de informações
  };

const firebaseApp  = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
 
export { db };