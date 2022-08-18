import React, {useState, useContext} from "react";
import axios from "axios";
import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepo";
import mockUser from "./mockData/mockUser"

const rootUrl = "https://api.github.com";
const limitUrl = "https://api.github.com/rate_limit"

const GitHubContext = React.createContext();
const GitHubProvider = ({children}) => {
  
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);
  const [githubUser, setGithubUser] = useState(mockUser);

  const checkLimit = async () => {
    try {
    const response = axios(limitUrl)
    const data = response.data;
    console.log(data);
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(()=> {
    checkLimit()
  }, [])
  return <GitHubContext.Provider value={{githubFollowers, repos, githubUser}}>{children}</GitHubContext.Provider>
}

export {GitHubProvider, GitHubContext }
