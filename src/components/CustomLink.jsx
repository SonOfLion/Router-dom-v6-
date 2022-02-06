import React from 'react';

import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link to={to} {...props} style={{ color: match ? "#2281f5" : "#f0f2f5" }}>
      {children}
    </Link>
  );
}

export default CustomLink;
