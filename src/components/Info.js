import React, { useContext } from 'react';
import { GitHubContext } from '../context/context';
const Info = () => {
  const data = useContext(GitHubContext);
  console.log(data);
  return <h3>Info</h3>;
};
export default Info;
