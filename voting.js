//voting
import {useState} from "react";
export default function App(){
    let [v,setV] = useState(0);
    return(
        <div>
            <button onClick={()=>setV(v+1)}>Vote</button>
            <h3>{v}</h3>
        </div>
    );
}