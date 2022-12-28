import React, { FC } from "react";
import { IUser } from "../types";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  const content = users.map((user) => {
    return <UserItem key={user.id} user={user} />;
  });

  return <div>{content}</div>;
};

export default UserList;
