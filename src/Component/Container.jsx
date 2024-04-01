import { Route, Routes, useNavigate } from "react-router-dom";
import Button from "./Button";
import TaskContainer from "./taskContainer";
import Input from "./input";
import Select from "./Select";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { assigneeAtom, dateAtom, deleteAtom, priorityAtom, shortedAtom } from "../Atom/atom";
import DeleteTask from "./DeleteTask";



export default function Container() {

    // useNavigation use for routing
    const navigation = useNavigate();

    //recoil hook for using, state management
    const assignee = useSetRecoilState(assigneeAtom);
    const date = useSetRecoilState(dateAtom);
    const [Priority , setPriority] = useRecoilState(priorityAtom);
    const [short, setShort] = useRecoilState(shortedAtom);
    const del = useRecoilValue(deleteAtom);
    return (
        <div className={"border-2 rounded-md h-[80vh] w-[95%] overflow-hidden "}>
             {/* delete component which is useful for deleting task */}
            {del ? <DeleteTask /> : null}
            <div>
                <div className={"flex w-[100%] flex-col md:flex-row mt-2 lg:mt-5 items-start justify-between ml-2 mr-2 "}>
                    <div className="flex sm:ml-2">
                        <div className="font-bold text-lg md:text-xl lg:text-2xl">filtered By:</div>
                        <div className="flex mr-2">
                            <Input onChange={(e) => { assignee(e.target.value) }} placeholder="Assignee Name" inputCss="bg-slate-200  text-slate-900 font-medium outline-none" />
                            <Select value={Priority}  onChange={(e) => {setPriority(e.target.value)}} selectCss="bg-slate-200 text-slate-900 mt-3 md:mt-0 font-medium outline-none" />
                            <Input onChange={(e) => { date(e.target.value) }} type={"date"} inputCss="bg-slate-200 text-slate-900 font-medium outline-none w-15" />
                        </div>
                    </div>
                    <Button title={"Add New task"} onClick={() => { navigation('/createTask') }} cssProps={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-25 md:mr-10"} />
                </div>
                <div className="flex ml-4 gap-5" >
                    <div className="font-bold text-lg md:text-xl lg:text-2xl pr-5">
                        Short By :
                    </div>
                    <Select value={short} onChange={(e) => {setShort(e.target.value)}} selectCss="bg-slate-200 text-slate-900 font-medium outline-none" />
                </div>
            </div>
            <div className="w-[100%] h-[84%] mt-3 ">
                      {/* this container use for storing various status of task */}
                <div className="resize-none w-[100%] h-[100%] grid grid-cols-12 justify-items-stretch p-10 scrollbar-webkit scrollbar gap-8 lg:grid-cols-10" >

                    <div className="col-start-2 col-span-10 md:col-span-4 lg:col-span-2  h-[25rem]">
                        <TaskContainer value={"pending"} titleCss={"bg-slate-500"} />
                    </div>
                    <div className="col-start-2 col-span-10 md:col-span-4 lg:col-span-2 h-[25rem]">
                        <TaskContainer value={"In Progress"} titleCss={"bg-rose-400"} />
                    </div>
                    <div className="col-start-2 col-span-10 md:col-span-4 lg:col-span-2 h-[25rem]">
                        <TaskContainer value={"Completed"} titleCss={"bg-green-600"} />
                    </div>
                    <div className="col-start-2 col-span-10 md:col-span-4 lg:col-span-2 h-[25rem]">
                        <TaskContainer value={"Deployed"} titleCss={"bg-violet-950"} />
                    </div>
                    <div className="col-start-2 col-span-10 md:col-span-4 lg:col-span-2 h-[25rem]">
                        <TaskContainer value={"Deffered"} titleCss={"bg-red-400"} />
                    </div>
                </div>
            </div>

        </div>
    )
}