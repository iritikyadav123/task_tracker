import { useMemo, useState } from "react"


export default function Select({ onChange, value = "", title = "", selectCss = "" }) {

    return (
        <div className="flex items-center">
            <label className={"font-bold text-xl"}>{title}</label>
            <select value={parseInt(value)} className={"bg-gray-300 p-1   rounded-lg ml-[7%] md:ml-[12%] " + selectCss} onChange={onChange}>
                <option value={0}>p0</option>
                <option value={1}>p1</option>
                <option value={2}>p2</option>
            </select>
        </div>
    )
}