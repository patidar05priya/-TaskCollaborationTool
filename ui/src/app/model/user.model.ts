export interface User {
    id?: number; // Optional, as it will be assigned by the server
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }