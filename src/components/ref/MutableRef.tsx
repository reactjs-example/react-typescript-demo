import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervaleRef = useRef<number | null>(null);

  const stopTimer=()=>{
    if(intervaleRef.current)
    window.clearInterval(intervaleRef.current);
  }
  useEffect(() => {

    intervaleRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return ()=>{
        stopTimer()
    }

  }, []);

  return <>
     <div>
        timer : {timer}
        <button onClick={stopTimer}>Stop</button>
     </div>
  </>
};
