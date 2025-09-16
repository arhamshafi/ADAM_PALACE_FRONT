import { createContext, useState } from "react";


export const App_context = createContext()

const App_Provider = ({ children }) => {

    const [nav, set_nav] = useState("home")
    const [menu, set_menu] = useState(false)


    return (
        <App_context.Provider value={{ nav, set_nav, menu, set_menu }} >
            {children}
        </App_context.Provider>
    )
}

export default App_Provider