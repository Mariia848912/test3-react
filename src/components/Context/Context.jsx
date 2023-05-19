import React, { useState, useContext} from "react";

 const ContextAlert = React.createContext();

export const useCustomAlert = () => {
     return useContext(ContextAlert)
}
 
export const Context = ({children}) => {
    const [toggleAlert, setToggle] = useState(false);
    return (
        <ContextAlert.Provider value={{ toggleValue: toggleAlert, toggle: setToggle }}>
            {children}
    </ContextAlert.Provider>

    );

}