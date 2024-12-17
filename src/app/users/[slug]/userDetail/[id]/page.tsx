import React from "react";

const USerInfo = ({ params }: { params: { id: string; slug: string } }) => {
  console.log(params);

  return (
    <div>
      USerInfo {params.id} \\ {params.slug}
    </div>
  );
};

export default USerInfo;
