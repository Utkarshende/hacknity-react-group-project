import React from "react";

function Heading({ headingTitle, customStyle }) {
  return (
    <h1
      className={`text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-6 ${customStyle}`}
    >
      {headingTitle}
    </h1>
  );
}

export default Heading;
