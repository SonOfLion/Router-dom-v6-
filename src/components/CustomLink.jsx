import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link to={ to } {...props} style={{ color: match ? '#2281f5' : '#f0f2f5' }}>
      {children}
    </Link>
  );
};

export default CustomLink;
