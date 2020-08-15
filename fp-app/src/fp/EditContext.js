import React, {useState, createContext} from "react"
export const EditContext = createContext();
export const EditProvider = props=>{
    const [edit,setEdit]=useState(null)
    return(
        <EditContext.Provider value={[edit,setEdit]}>
            {props.children}
        </EditContext.Provider>
    );
};
export default EditContext;