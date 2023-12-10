import { createContext, useState } from "react";

const PageTitleContext = createContext({});

export const PageTitleProvider = ({ children }) => {
    const [titleProps, setTitleProps] = useState({title: 'Dashboard', goBack: null});


    return (

        <PageTitleContext.Provider value={{ titleProps, setTitleProps }}>
            {children}
        </PageTitleContext.Provider>
    )
}


export default PageTitleContext;