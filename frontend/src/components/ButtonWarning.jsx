import { Link } from "react-router-dom"

export const ButtonWarning = ({name, warning})=>{
    return <div>
        <span>{name}</span>
        <Link className="ml-3 underline">{warning}</Link>
    </div>
}