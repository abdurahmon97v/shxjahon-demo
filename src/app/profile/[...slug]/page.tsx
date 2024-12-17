import React from "react";

const ProfileInfo = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      ProfileInfo{" "}
      {params.slug.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};

export default ProfileInfo;
