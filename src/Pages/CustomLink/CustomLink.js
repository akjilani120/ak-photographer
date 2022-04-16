import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ color: match ? "white" : "black" , backgroundColor:match ? "rgb(255, 46, 116)" : "transparent" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
     
    </div>
  );
}


export default CustomLink;