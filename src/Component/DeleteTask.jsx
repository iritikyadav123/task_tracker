import { useNavigate } from "react-router-dom";
import Button from "./Button"
import { ImCross } from "react-icons/im";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { deleteAtom, findEditTaskSelector, taskAtom } from "../Atom/atom";

export default function DeleteTask() {
    const del = useSetRecoilState(deleteAtom)
    const val = useRecoilValue(findEditTaskSelector);
    const [tasks, setTasks] = useRecoilState(taskAtom);

    function handlerDelete() {

         // Find the index of the task with the same title as val
         const index = tasks.findIndex(item => item.title === val.title);

         setTasks(prevTasks => {
            // Create a new array of tasks with the updated task at the found index
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index);
            return updatedTasks;
        });

         alert('Task Delete');
         del(false)
    }




    return <div className="h-[80%] flex items-center justify-center w-[90%] display-t  absolute bg-transparent"> 
          <div className="bg-pink-500  rounded-lg ml-11 w-[60%] h-[15%] lg:w-[40%] lg:h-[20%]">
              <div className="flex rounded-lg shadow-md items-center md:h-[20%]  w-[fit] justify-between pl-2 pr-2 bg-pink-100">
                <div className="font-bold md:text-xl">DELETE TASK</div>
                <button onClick={() => {
                        del(false)
                    }} className="pr-3"> <ImCross /></button>
              </div>
              <div className="mt-4 text-white">
                <div className="font-medium ml-5 md:text-lg">Do You Wish to Delete Task</div>
                <div className="flex justify-between mt-3  items-center">
                    <div className="font-medium md-text-lg ml-2 md:ml-9 ">{val.title}</div>
                    <div className="flex">
                    <Button title={"Yes"} onClick={handlerDelete} cssProps={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  "} />
                    <Button title={"No"} onClick={() => { del(false)}} cssProps={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  "} />
                    </div>
                    
                </div>
              </div>
          </div>
    </div>
}