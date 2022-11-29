import { useState } from 'react';
import { TimeUnit } from 'utils/type';

function useTimer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState<null | any>(null);
  const defaultIntervalPeriod = 1;
  const timeUnit: TimeUnit = 'seconds';

  const startOrPause = () => {
    if (!isRunning) {
      setIsRunning(
        setInterval(() => {
          setElapsedTime(currentElapsedTime => currentElapsedTime + defaultIntervalPeriod);
        }, defaultIntervalPeriod * 1000)
      );
    } else if (isRunning) {
      clearInterval(isRunning);
      setIsRunning(false);
    }
  };

  const reset = () => {
    setIsRunning(false);
    if (isRunning) {
      clearInterval(isRunning);
    }
    setElapsedTime(0);
  };

  let stateLabel;

  if (!isRunning && elapsedTime !== 0) {
    stateLabel = 'resume';
  } else if (isRunning) {
    stateLabel = 'pause';
  } else if (!isRunning && elapsedTime === 0) {
    stateLabel = 'start';
  }

  return { startOrPause, reset, elapsedTime: { value: elapsedTime, timeUnit }, isRunning, stateLabel };
}

export default useTimer;
