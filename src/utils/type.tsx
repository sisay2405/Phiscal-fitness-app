export interface Rep {
  id?: string;
  number: number;
  startTime: string;
  endTime: string;
}

export type TimeUnit = 'seconds' | 'minutes';

export interface Exercise {
  id?: string | null;
  type: string;
  user_id: string;
  startTime: string;
  endTime: string;
  reps: Rep[];
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
