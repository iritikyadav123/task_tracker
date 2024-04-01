import { comment } from "postcss";


export default function TextInput({onChange,value, dis=false}) {
    return (
        <div className="flex items-center justify-between">
            <label  className={"font-bold text-xl"}>Description:</label>
        <textarea  disabled={dis}   className="h-20 bg-gray-300 p-2   rounded-lg w-[70%] mr-[5%]" value={value} onChange={onChange}/>
        </div>
    )
}