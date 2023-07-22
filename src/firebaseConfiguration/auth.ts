import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from './config'

const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();

// Google configuration
export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default auth;