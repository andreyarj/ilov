import React, { useState } from 'react'
import './App.css';

import Question from './Pages/Question';
import Declaration from './Pages/Declaration';

function App() {

  const [ Status, setStatus ] = useState(false);

  return (
    <>
    <div className='overflow-y-scroll flex flex-col flex-nowrap items-center justify-start gap-[0px] py-[20px] w-full h-full'>

      {Status === false ? <Question setStatus={setStatus}/> : <Declaration />}

    </div>
    </>
  );
}

export default App;
