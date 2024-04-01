import { useRecoilValue, useSetRecoilState } from "recoil";
import Heading from "./Heading";
import TaskBox from "./TaskBox";
import { assigneeAtom, dateAtom, priorityAtom, shortedAtom, taskAtom } from "../Atom/atom";
export default function TaskContainer({ value, titleCss }) {
    const taskData = useRecoilValue(taskAtom);
    const Priority = useRecoilValue(priorityAtom)
    const assignee = useRecoilValue(assigneeAtom);
    const date = useRecoilValue(dateAtom);
    const short = useRecoilValue(shortedAtom);
    let newTaskData = taskData
     console.log(newTaskData)
     
     newTaskData = newTaskData.filter(item => (item.status == value));
      if(Priority > 0) {
        newTaskData = newTaskData.filter(item => (item.Priority == Priority));
     }
     if(assignee) {

         newTaskData = newTaskData.filter(item => (item.assignee == assignee)); 
     }
     console.log(date);
       if(date) {
         newTaskData = newTaskData.filter(item => (item.date == date)); 
      }

      let shortData = newTaskData;

      if(short > 0 && Priority == 0) {
       newTaskData = newTaskData.filter(item => (item.Priority == short));
        shortData = shortData.filter(item => ((item.Priority != short)))
      }


    return (
        <div className="border shadow-lg bg-white h-[100%] w-[100%] ">
            <Heading title={value} cssProps={"h-[10%] text-center font-bold text-white text-2xl " + titleCss} />
            <div className="h-[90%] scrollbar-webkit scrollbar">
                {
               
               newTaskData.map((item) => (
                    <div key={item.title}>
                        <TaskBox item={item} />
                    </div>
                ))
                  
                }
                 {
                    short > 0 && Priority == 0?shortData.map((item) => (
                    <div key={item.title}>
                        <TaskBox item={item} />
                    </div>
                )) : null
                 }
            </div>
        </div>
    )
}