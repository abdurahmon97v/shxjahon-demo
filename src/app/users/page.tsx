import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <li>
        <Link href={"/users/1"}>user1</Link>
      </li>
      <li>
        <Link href={"/users/2"}>user2</Link>
      </li>
      <li>
        <Link href={"/users/3"}>user3</Link>
      </li>
      <li>
        <Link href={"/users/4"}>user4</Link>
      </li>
      <li>
        <Link href={"/users/5"}>user5</Link>
      </li>
    </div>
  );
};

export default Users;
