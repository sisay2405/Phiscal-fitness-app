export interface Rep {
  id?: string;
  number: number;
  startTime: string;
  endTime: string;
}
export type User = {
  email: string;
  uid: string;
  displayName: string | null;
  photoURL: string | null;
};
export type TimeUnit = 'seconds' | 'minutes';
export type videoSources = string;

export interface Exercise {
  id?: string | null;
  type: string;
  userId: string;
  startTime: string;
  endTime: string;
  reps: Rep[];
  calories: number;
  duration: {
    value: number;
    timeUnit: TimeUnit | null;
  } | null;
}

export interface UserProfile {
  displayName: string;
  email: string;
  user_id: string;
  id?: string;
}

export {};
