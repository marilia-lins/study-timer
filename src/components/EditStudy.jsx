import React, { useEffect, useState } from 'react'
import { AddStudy } from './AddStudy'

export const EditStudy = ({stu, study, setStudy, index}) => {

    const [editModal, setEditModal] = useState(false)
    const [studySubject, setStudySubject] = useState("")
    const [subjectTopic, setSubjectTopic] = useState("")

    useEffect(() => {
        setStudySubject(stu.studySubject)
        setSubjectTopic(stu.subjectTopic)
    }, [])

  const handdleInput = (e) => {
    const {name, value} = e.target

    if(name === "studySubject") setStudySubject(value)
    if(name === "subjectTopic") setSubjectTopic(value)
  
  }

  const handdleEdit = (e) => {
    e.preventDefault()
    let studyIndex = study.indexOf(stu)
    study.splice(studyIndex, 1)
    setStudy([...study, {studySubject, subjectTopic}])
    setEditModal(false)
    // setStudySubject("")
    // setSubjectTopic("")
  }

  return (
    <div>
        <button 
            onClick={()=> setEditModal(true)} 
            className='text-sm mr-3'>
                Edit
            </button>
        {editModal ? (
            <div className='overflow-x-hidden overflow-y-auto
            fixed inset-0 z-100 flex items-center justify-center'>
              <div className='w-9/12 max-w-lg bg-gradient-to-b from-dark via-gray to-black rounded-lg shadow-md relative
              flex flex-col'>
                <div className='flex flex-row justify-between p-5'>
                  <h3 className='text-3xl font-semibold'>Edit Study Timer</h3>
                  <button 
                    className='px-1 font-semibold text-gray float-right text-1xl
                    leading-none block'
                    onClick={() => setEditModal(false)}
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
                    onClick={handdleEdit}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
        ): null}
    </div>
  )
}
