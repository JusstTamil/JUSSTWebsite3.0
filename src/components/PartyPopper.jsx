import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const PartyPopper = () => {
  const [isConfettiVisible, setConfettiVisible] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
        setConfettiVisible(false);
    }, 5000);
  }, [])

  return (
    <React.Fragment>
        <div>
          <div className="md:w-1/3 mx-auto w-full flex justify-center items-center gap-5">
              <button onClick={() => setConfettiVisible(true)} className='p-3 bg-white font-bold text-myBlack rounded-xl text-nowrap'>🎉 Celebrate 🎉</button>
              {isConfettiVisible && <button className='bg-slate-600 opacity-40 hover:opacity-80 transition-opacity p-3 rounded-xl font-noraml font-sans capitalize' onClick={() => setConfettiVisible(!isConfettiVisible)}>toggle</button>}
          </div>
          {isConfettiVisible && <Confetti width={width} height={height} />}
        </div>
    </React.Fragment>
  );
};

export default PartyPopper;
