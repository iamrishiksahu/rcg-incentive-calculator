import { createContext, useState } from "react";

const PageTitleContext = createContext({});

export const PageTitleProvider = ({ children }) => {
    const [title, setTitle] = useState('Dashboard');


    return (

        <PageTitleContext.Provider value={{ title, setTitle }}>
            {children}
        </PageTitleContext.Provider>
    )
}


export default PageTitleContext;