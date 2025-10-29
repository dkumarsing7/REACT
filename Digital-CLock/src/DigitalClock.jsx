import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }
  function padZero(number){
    return  number<10? '0'+number:number;
  }

  return (
    <>
      <div className="container">
        <div className="clock">{formatTime()}</div>
      </div>
    </>
  );
}
export default DigitalClock;
