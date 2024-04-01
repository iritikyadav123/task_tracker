import { useState } from "react";
import Button from "./Button";
import Options from "./Options";

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
export default function TaskBox({item,value="pending"}) {
     const[data, setData] = useState(false);

    return(
        <div className="h-[50%] shadow-md m-2 bg-slate-200 border overflow-hidden">
            <div className="flex border-b-2 border-gray-400 justify-between items-center ml-1 mr-1">
                <div className="font-medium text-slate-700 text-lg">{item.title}</div>
               <Button title={"p"+item.Priority} cssProps={"border-4 p-1 text-white rounded-md  bg-blue-500"}/>
            </div> 
            <div className="mt-1 maagnam veniam nobis sapiente min-h-10  text-sm ml-1 mr-1">{item.description} </div>
            <div className="flex mt-1 justify-between ml-1 mr-1">
                <div className="font-bold text-lg">@{item.assignee}</div>
               <div>
               <Button onClick={()=>{setData(c => !c)}} title={<PiDotsThreeOutlineVerticalFill className="text-white" />} cssProps={"p-1 rounded-md bg-blue-500"}/>
               {data ?   <Options value={item.title}/> : null}
               </div>
            </div>
            <div className="w-[50%] bg-blue-500 text-white text-center mt-2 ml-2 rounded-md">{item.status}</div>
        </div>
    )
}