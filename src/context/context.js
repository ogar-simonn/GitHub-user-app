import React, {useState, useContext} from "react";
import axios from "axios";
import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepo";
import mockUser from "./mockData/mockUser"

const rootUrl = "https://api.github.com";

const GitHubContext = React.createContext();
const GitHubProvider = ({children}) => {
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);
  const [githubUser, setGithubUser] = useState(mockUser);


  return <GitHubContext.Provider value={{githubFollowers, repos, githubUser}}>{children}</GitHubContext.Provider>
}

export {GitHubProvider, GitHubContext }
