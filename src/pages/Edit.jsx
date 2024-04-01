import Button from "../Component/Button"
import Heading from "../Component/Heading"
import { ImCross } from "react-icons/im"
import Input from "../Component/input"
import Select from "../Component/Select"
import TextInput from "../Component/TextInput"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { findEditTaskSelector, taskAtom } from "../Atom/atom"
import { useEffect, useState } from "react"

export default function Edit() {
  const navigation = useNavigate();
  const val = useRecoilValue(findEditTaskSelector);
  const [tasks, setTasks] = useRecoilState(taskAtom);
  const [todoPri, setTodoPri] = useState("");
  const [todoSta, setTodoSta] = useState("");

  useEffect(() => {
    setTodoPri(val.Priority);
    setTodoSta(val.status);

  }, [val]);
  console.log(tasks)
  function handlerReset() {
    setTodoPri(val.Priority);
    setTodoSta(val.status);
  }
  let i = -1;
  function handlerSubmit() {
    const newTodo = { ...val, status: todoSta, Priority: todoPri }; // Create a new todo object with updated status and priority

    // Find the index of the task with the same title as val
    const index = tasks.findIndex(item => item.title === val.title);

    if (index !== -1) { // Check if task with the same title was found
      setTasks(prevTasks => {
        // Create a new array of tasks with the updated task at the found index
        const updatedTasks = [...prevTasks];
        updatedTasks[index] = newTodo;
        return updatedTasks;
      });
    } else {
      // If task with the same title was not found, simply add the new todo to tasks
      setTasks(prevTasks => [...prevTasks, newTodo]);
    }
    navigation('/')
  }


  return (
    <div className="bg-purple-300 h-[100vh] flex  items-center justify-center overflow-hidden   ">
      <div className=" border-2 shadow-lg overflow-hidden bg-pink-400 shadow-pink-100 rounded-lg w-[90%] h-[80%] flex flex-col gap-10 md:w-[60%] lg:w-[40%] justify-center md:h-[50%] lg:h-[80%]">
        <div className="flex rounded-xl bg-pink-100 items-center justify-between h-[20%]">
          <Heading title={"EDIT TASK"} cssProps={"text-3xl font-medium pl-3 "} />
          <button onClick={() => {
            navigation('/')
          }} className="pr-3"> <ImCross /></button>
        </div>
        <div className="flex flex-col gap-9 just h-[70%] mt-[2%] pl-5">
          <Input dis={true} value={val.title} title="Title:" />
          <TextInput dis={true} value={val.description} onChange={""} />
          <Input dis={true} value={val.team} title='Team:' />
          <Input dis={true} value={val.assignee} title="Assignee:" />
          <div className="flex items-center justify-evenly">
            <Select value={todoPri} onChange={(e) => { setTodoPri(e.target.value) }} title="Priority" />
            <div className="flex">
              <label className={"font-bold text-xl"}>Status:</label>
              <select value={todoSta} onChange={(e) => { setTodoSta(e.target.value) }} className={"bg-gray-300 p-1   rounded-lg ml-[7%] md:ml-[12%] "}  >
                <option value={"pending"}>pending</option>
                <option value={"In Progress"}>In Progress</option>
                <option value={"Completed"}>Completed</option>
                <option value={"Deployed"}>Deployed</option>
                <option value={"Deffered"}>Deffered</option>
              </select>
            </div>
          </div>

        </div>
        <div className="flex bg-pink-100 flex-col h-[15%]  mb-[2] w-[100%]">
          <div className="flex mt-2 gap-2 mr-10 items-center justify-end  ">
            <Button onClick={handlerSubmit} dis={false} cssProps={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%] ml-[25%] "} title={"Submit"} />
            <Button onClick={handlerReset} dis={false} cssProps={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%] ml-[25%] "} title={"Reset"} />
          </div>

        </div>

      </div>
    </div>
  )
}