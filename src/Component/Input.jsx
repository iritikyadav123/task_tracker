


export default function Input({title="",inputCss="", type="text", placeholder="" , onChange , value , dis=false}) {
    return(
        <div className="flex items-center justify-between">
            <label className={"font-bold text-xl"}>{title}</label>
            <input disabled={dis} className={`bg-gray-300 p-1  rounded-lg w-[70%] mr-[5%] ${inputCss}`} type={type} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    )
}