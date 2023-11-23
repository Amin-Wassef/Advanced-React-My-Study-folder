import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);
//The function argument is the default value, which in this case, I will declare as undefined since the app doesn't know beforehand who the logged in user will be

export const UserProvider = ({ children }) => {
  const [user] = useState({
    //This is just a simple way that determine a specific user ..
    //it should not be like this .. it should be fetched from database.
    name: "john",
    email: "john@example.com",
    dob: "01/01/2000",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
  //(property) React.ProviderProps<undefined>.value: undefined
};

//Create a custum hook that wraps the UseContext hook
//to find a way for the components to subscrib to the context
//to be able to consume the context value

export const useUser = () => useContext(UserContext);
