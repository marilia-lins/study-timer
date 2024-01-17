import React, { useState } from 'react'

export const AddStudy = ({study, setStudy}) => {

  const [popUp, setPopUp] = useState(false)
  const [studySubject, setStudySubject] = useState("")
  const [subjectTopic, setSubjectTopic] = useState("")
  const [errorHanddle, setErrorHanddle] = useState("")

  const handdleInput = (e) => {
    const {name, value} = e.target

    if(name === "studySubject") {
      setStudySubject(value)
      setErrorHanddle("")
    }
    if(name === "studySubject" && value===""){
      setErrorHanddle("You need a subject to create a timer")
    }
    if(name === "subjectTopic") setSubjectTopic(value)
  
  }

  const handdleAdd = (e) => {
    e.preventDefault()
    if(!studySubject) {
      setErrorHanddle("You need a subject to create a timer")
    } else{
      setStudy([...study, {studySubject, subjectTopic}])
      setPopUp(false)
      setStudySubject("")
      setSubjectTopic("")
    }
    
  }

  return (
    <div>
        <button 
          className='uppercase bg-slushie 500 text-sm font-semibold 
          py-1 mx-1 pr-2 pl-2 rounded hover:opacity-60'
          type='button'
          onClick={() => setPopUp(true)}
        >
          New
        </button>
        {popUp ? (
          <div className='overflow-x-hidden overflow-y-auto
          fixed inset-0 z-100 flex items-center justify-center'>
            <div className='w-9/12 max-w-lg bg-gradient-to-b from-dark via-gray to-black rounded-lg shadow-md relative
            flex flex-col'>
              <div className='flex flex-row justify-between p-5'>
                <h3 className='text-3xl font-semibold'>Add New Study Timer</h3>
                <button 
                  className='px-1 font-semibold text-gray float-right text-1xl
                  leading-none block'
                  onClick={() => setPopUp(false)}
                >
                  X
                </button>
              </div>
              <form className='p-6'>
                <div className=''>
                  <label 
                    className='track-wide uppercase text-black font-semibold mb-2 block'
                    htmlFor='study-subject'>
                    Study Subject
                  </label>
                  <input
                    className='w-full bg-dark text-black border-dark rounded 
                    py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white'
                    id="study-subject"
                    name="studySubject"
                    value={studySubject}
                    placeholder='type your next subject to be studied'
                    type="text"
                    required
                    onChange={handdleInput}/>
                    <p className='text-gum text-center mt-2 mb-5'>{errorHanddle}</p>
                </div>
                <div>
                  <label 
                    className='track-wide uppercase text-black font-semibold mb-2 block'
                    htmlFor="subject-topic">
                    Subject Topics
                  </label>
                  <textarea  
                    className='w-full bg-dark text-black border-dark rounded 
                    py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white'
                    id="subject-topic" 
                    name="subjectTopic"
                    value={subjectTopic}
                    placeholder='type the topics to be studied within the subject' 
                    rows="5"
                    onChange={handdleInput}>
                  </textarea>
                </div>
              </form>
              <div className='flex justify-center mb-2'>
                <button 
                  className='bg-gum font-semibold text-sm uppercase
                  px-4 mb-2 py-2 rounded hover:opacity-60'
                  onClick={handdleAdd}>
                  Add
                </button>
              </div>
            </div>
          </div>
        ) : null}
    </div>
  )
}
