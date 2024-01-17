import { useState } from 'react';
import { AddStudy } from './components/AddStudy';
import { StudyItem } from './components/StudyItem';
import { useDrop } from 'react-dnd';

function App() {

  const [study, setStudy] = useState([])

  return (
    <>
    <div className='grid h-16 place-items-center mb-12'>
      <h1 className='text-2xl font-bold py-3 pl-2'>Study Time Tracker</h1>
      <div className='flex flex-row items-center'>
        <p className='text-xl ny-1 pl-2 pr-1'>Click</p>
          <AddStudy study={study} setStudy={setStudy}/> 
        <p className='text-xl ny-2 pl-1'>to add new study</p>
      </div>
    </div>
    <div>
      <div className='w-full '>
        {/* <h2 className='ny-4 max-w-lg underline decoration-slushie decoration-4 text-xl ml-6 w-3/4 py-1 px-2'>To be Studied:</h2> */}
        {study.map((stu, i) => 
          <div className='grid place-items-center' key={i}>
            <StudyItem setStudy={setStudy} key={new Date().getTime()} index={i} study={study} stu={stu}/>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default App;
