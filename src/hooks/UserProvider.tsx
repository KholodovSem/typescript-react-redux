import React, { createContext, useState, PropsWithChildren } from "react";

export interface UserContextState {
  firstName: string;
  lastName: string;
}

export const UserContext = createContext<null | UserContextState>(null);

function UserProvider({ children }: PropsWithChildren) {
  const [user] = useState<UserContextState>({
    firstName: "Sem",
    lastName: "Kholodov",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
