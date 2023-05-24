import { getFirestore } from 'firebase/firestore';
import fireaseApp from './config';


const db = getFirestore(fireaseApp);

export default db;
