import React, { useEffect, useState } from 'react'
import { EditStudy } from './EditStudy'

export const StudyItem = ({stu, study, setStudy, index}) => {

    const [time, setTime] = useState(0)
    const [ticking, setTicking] = useState(false)

    useEffect(() => {
        let interval
        if(ticking){
            interval = setInterval(() => {
                setTime((previousTime) => previousTime + 10)
            }, 10)
        } else if(!ticking) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [ticking])

    const deleteItem = (itemId) => {
        let deleteIndex = study.indexOf(stu)
        study.splice(deleteIndex, 1)
        setStudy((currentStudies => currentStudies.filter(
            item => item.id !== itemId
        )))
    }
 
  return (
    <div
        className='flex flex-col items-center justify-center 
        bg-white my-5 ml-6 py-4 px-6 w-3/4 max-w-lg rounded'>
       <div className='flex w-full flex-row justify-between'>
            <p className='font-semibold text-xl'>{stu.studySubject}</p>
            <EditStudy setStudy={setStudy} index={index} study={study} stu={stu}/>
       </div>
        <p className='text-lg py-2'>{stu.subjectTopic}</p>
        <div className='w-full flex flex-col items-center'>
            <div className='text-xl py-4'>
                <span>
                    {("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:
                </span>
                <span>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
            </div>
            <div className='w-1/3 max-w-sm flex flex-row justify-evenly gap-2 mb-4'>
                {ticking ? (
                    <button 
                        onClick={() => setTicking(false)}
                        className='text-sm rounded-lg mt-2 py-1 px-3 bg-dark'>
                        pause
                    </button>
                ) : (
                    <button 
                        onClick={() => setTicking(true)}
                        className='text-sm rounded-lg mt-2 py-1 px-3 bg-dark'>
                        run
                    </button>
                )}
                <button 
                    onClick={() => setTime(0)}
                    className='text-sm rounded-lg mt-2 py-1 px-3 bg-dark'>
                    reset
                </button>
            </div>
        </div>
        <div className='w-full flex justify-end'>
            <button 
                onClick={deleteItem}
                className='font-semibold py-1.5 p-3 rounded-lg 
                bg-juice text-white text-sm uppercase'>
                    Delete
                </button>
        </div>
    </div>
  )
}
