"use client"

import React from "react"
import {useState} from "react"
import "./index.css"
import Input from "../componentes/Input";
import Button from "../componentes/Button";

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Clean the table"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks) 
        }
    }

    function moveTaskDown(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks) 
        }
    }
    return(
        <div className="ToDoList">
            <h1>To-Do-List</h1>
            <div>
                <Input type="text" placeholder="Enter a Task" value={newTask} onChange={handleInputChange}/>
                <Button className="add-button" onClick={addTask} text="Add"/>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>
                        <button 
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            ⬇️
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}