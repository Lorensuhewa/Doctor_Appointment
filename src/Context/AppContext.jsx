
import { createContext } from "react";
import { doctors } from "../Components/Reusable_Components/DoctorList";
import PropTypes from 'prop-types';


export const AppContext = createContext()

const AppContextProvider = (props) => {
    
    const value ={
        doctors
    }
    return (
        <AppContext.Provider value={value}>       
            {props.children}
        </AppContext.Provider>
    )
}
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContextProvider;