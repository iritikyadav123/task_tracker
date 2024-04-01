
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSetRecoilState } from "recoil";
import { deleteAtom, taskChooseAtom } from "../Atom/atom";
 
 


export default function Options({value}) {
  const taskTitle = useSetRecoilState(taskChooseAtom)
  const del = useSetRecoilState(deleteAtom);
     const navigation = useNavigate();
    return(
        <div className="border-4 h-[10vh] w-[15vh] ">
          <Button onClick={()=>{navigation('/Edit'), taskTitle(value)}} title={"Edit"} cssProps={"border w-[100%] bg-yellow-200 font-medium text-2xl  "}/>
          <Button onClick={()=>{del(true),console.log(value),taskTitle(value)}} title={"delete"} cssProps={"border w-[100%] bg-yellow-200 font-medium text-2xl  "}/>
          
        </div>
    )
}
