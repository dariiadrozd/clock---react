import { useEffect, useState } from 'react';
import style from './style.module.css'

function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const data = new Date();
    const interval = setInterval(() => setTime(data), 1000);
    return () => clearInterval(interval)
  }, [time]);

  return (
    <div className={style.wrapper}>
      <div className={style.oval}></div>
      <div className={style.clock}>
        <h1>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
        <p>{time.getDate()}.{time.getMonth()}.{time.getFullYear()}</p>
      </div>

    </div>
  );
}

export default App;
