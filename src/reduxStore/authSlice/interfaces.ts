export interface AuthSliceProps {
  logged: boolean;
  user: null | UserAuthProps;
}
  
export interface UserAuthProps {
  uid: string;
  email: string | null;
  token: {
    accessToken: string;
    expirationTime: string | Date;
  }
}
  