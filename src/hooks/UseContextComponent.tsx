import React, { useContext } from "react";
import { UserContext, UserContextState } from "./UserProvider";

function UseContextComponent() {
  const { firstName, lastName } = useContext<UserContextState | null>(
    UserContext
  )!;

  return (
    <div>
      User FirstName: {firstName}. User LastName: {lastName}.
    </div>
  );
}

export default UseContextComponent;
