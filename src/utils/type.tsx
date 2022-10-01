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
  startTime: number;
  endTime?: number | null;
  reps: Rep[];
  duration: {
    value: number;
    timeUnit: TimeUnit | null;
  } | null;
}

export {};
