import React from 'react'
import Day from 'Day'

const Schedule = () => {
  return (
    <>
        <div className="schedule-container">
            <Day day={0}></Day>
            <Day day={1}></Day>
            <Day day={2}></Day>
            <Day day={3}></Day>
            <Day day={4}></Day>
            <Day day={5}></Day>
            <Day day={6}></Day>
        </div>
    </>
  )
}

export default Schedule