import React from "react";

const SingeUser = ({ params }: { params: { slug: string } }) => {
  return <div>SingeUser {params?.slug}</div>;
};

export default SingeUser;
