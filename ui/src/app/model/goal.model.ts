export interface User {
    id?: number; // Optional, as it will be assigned by the server
    type: string;
    duration: string;
    targetMetrics: string;
  }