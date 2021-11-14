import { useRef, useState } from "react";

export const useAsyncState = <T extends {}> (initialState: T, {
  updateInterval = 10
}: { updateInterval: number }) => {
  const [state, setState] = useState<T>(initialState);
  const  lastInvokeTime = useRef(Date.now());

  const setAsyncState = (updateState: T) => {
    const time = Date.now();
    const timeSinceLastInvoke = time - lastInvokeTime.current;
    
    const canSetState = timeSinceLastInvoke > updateInterval;

    if(canSetState) {
      setState(updateState);
      lastInvokeTime.current = time;
      return;
    }
    
    const nextInvokeTime = lastInvokeTime.current + updateInterval;
    setTimeout(useAsyncState, nextInvokeTime);
  };

  
   return [state, setAsyncState];
};
