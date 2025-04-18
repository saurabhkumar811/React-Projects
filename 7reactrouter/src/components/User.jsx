import { useParams } from "react-router-dom"


export default function User(){

    const { userId} = useParams()
    return (
        <h1 className="bg-gray-500">User:{userId}</h1>
    )
}
