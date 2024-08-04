import React from 'react'

var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const handleClick = () => {
    alert("hello");
}

const Day = ({day}) => {
  return (
    <>
        <div className="day-holder">
            <div className="day-name">{dayName[day]}</div>
            <input className="day-title" type="text"></input>
            <button className="add-btn"><span class="material-symbols-rounded">add</span></button>
        </div>
    </>
  )
}

export default Day