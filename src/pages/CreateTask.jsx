import { useMemo, useState } from "react";
import Button from "../Component/Button";
import Heading from "../Component/Heading";
import Select from "../Component/Select";
import Input from "../Component/input";
import { ImCross } from "react-icons/im";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskAtom } from "../Atom/atom";
import { useNavigate } from "react-router-dom";
import TextInput from "../Component/TextInput";

export default function CreateTask() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [team, setTeam] = useState("")
    const [assignee, setAssignee] = useState("");
    const [Priority, setPriority] = useState(0);
    const [dis, setDis] = useState(true);
    const atomValue = useSetRecoilState(taskAtom);
    const tasks = useRecoilValue(taskAtom);
    const navigation = useNavigate();
    // creating time  in proper formate
    const time = new Date();
let date = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();
if(month < 10) {
  month = "0" + month;
}
if(day < 10){
  day = "0" + day;
}
  date += "-" + month + "-" + day;
    useMemo(() => {
        title && description && team && assignee ? setDis(false) : setDis(true)
    }, [title, description, team, assignee])
    //    creating a tasks object
    function handlerClick() {
        const index = tasks.findIndex(item => item.title === title);
        console.log(index);
        if (index !== -1) {
            alert("Please change your title");
            return;
        }
       
        if (description.length > 10) {
            let setTask = {};
            setTask["title"] = title;
            setTask["description"] = description;
            setTask["team"] = team;
            setTask["assignee"] = assignee;
            setTask["Priority"] = Priority;
            setTask["status"] = 'pending';
            setTask["date"] = date;
            atomValue(prevValue => [...prevValue, setTask]);
            alert("Task create sucessfully");
            setTitle("");
            setDescription("");
            setTeam("");
            setAssignee("");
            setPriority(0)
            navigation('/')
        } else {
            alert("please add some more words in description")

        }

    }

    return (
        <div className="bg-pink-300 h-[100vh] flex  items-center justify-center overflow-hidden ">
            <div className="border-2 shadow-lg shadow-blue-500/50 rounded-lg w-[90%] h-[80%] flex flex-col gap-10 md:w-[60%] lg:w-[40%] justify-center md:h-[50%] lg:h-[80%]">
                <div className="flex rounded-xl bg-green-300 items-center justify-between h-[20%]">
                    <Heading title={"CREATE A TASK"} cssProps={"text-3xl font-medium pl-3 "} />
                    <button onClick={() => {
                        navigation('/')
                    }} className="pr-3"> <ImCross /></button>
                </div>
                <div className="flex flex-col gap-9 just h-[70%] mt-[2%] pl-5">
                    <Input title={"title:"} value={title} type={"text"} placeholder="" onChange={(e) => { setTitle(e.target.value) }} inputCss={"test-white"} />
                    <TextInput value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <Input value={team} title={"Team:"} type={"text"} placeholder="" onChange={(e) => { setTeam(e.target.value) }} inputCss="test-white" />
                    <Input value={assignee} title={"Assignees:"} type={"text"} placeholder="" onChange={(e) => { setAssignee(e.target.value) }} inputCss="test-white" />
                    <Select title={"Priority:"} value={Priority} onChange={(e) => { setPriority(e.target.value) }} selectCss="test-white" />
                </div>
                <div className="flex flex-col  mb-[10%] w-[100%]">
                    <Button dis={dis} onClick={handlerClick} cssProps={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[50%] ml-[25%] "} title={"Create"} />
                    <div className="text-center text-black-900">{dis ? "fill all the input correctly" : null}</div>
                </div>
            </div>
        </div>
    )
}
