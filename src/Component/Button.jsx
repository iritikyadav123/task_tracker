
export default function Button({title,cssProps,onClick , dis = false}) {
    return (
        <div>
            

<button disabled={dis} type="button" onClick={onClick} className={cssProps}>{title}</button>

        </div>
    )
}