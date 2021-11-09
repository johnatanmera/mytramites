
 
 export interface User {
   id: string;
   email: string;
   otp: string;
   firstName: string;
   lastName: string;
   enabled: boolean;
 }
 
 export interface UserState {
   userCount: number;
   users: User[];
 }
 