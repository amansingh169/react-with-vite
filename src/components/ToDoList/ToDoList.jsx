import React, { useState } from 'react'
import style from './ToDoList.module.css'

const ToDoList = () => {
  const [tasks, setTasks] = useState([])
  const [prio, setPrio] = useState("transparent")
  const [des, setDes] = useState("")

  function handleAddTask(){
    if(des != ""){
      let newTask = {
        prio: prio,
        des: des
      }
      setTasks(t => [...t, newTask])
      setDes(() => "")
      
      console.log(tasks);
    }
  }

  function handlePrioChange(e){
    setPrio(e.target.value)
  }

  function handleDesChange(e){
    setDes(e.target.value)
  }

  function handleRemoveTask(index){
    setTasks(t => t.filter((_, i) => i != index))
  }

  function handleMoveUp(index){
    const updatedTasks = [...tasks]
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function handleMoveDown(index){
    const updatedTasks = [...tasks]
    if (index != updatedTasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return (
    <div className={style.toDoList}>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={style.listItem} style={{border: `1px solid ${task.prio}`}}>
            <p>{task.des}</p>
            <button onClick={() => handleRemoveTask(index)}>🗑️</button>
            <button onClick={() => handleMoveUp(index)}>☝️</button>
            <button onClick={() => handleMoveDown(index)}>👇</button>
          </li>
        ))}
      </ul>

      <div>
        <select id="prio" value={prio} onChange={handlePrioChange}>
          <option value="transparent">Priority level</option>
          <option value="darkred">High</option>
          <option value="orange">Moderate</option>
          <option value="darkgreen">Low</option>
        </select>

        <input type="text" id="des" value={des} onChange={handleDesChange} placeholder="Task Description" />
      </div>

      <button onClick={handleAddTask} className={style.addBtn}>Add task</button>
    </div>
  )
}

export default ToDoList