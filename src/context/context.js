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
  const [limitData, setLimitData] = useState({})

  const checkLimit = async () => {
    try {
    const response = await axios(limitUrl)
    const data = response.data;
    const {core} = data.resources;;
    setLimitData(core)
    } catch(err) {
      console.log(err)
    }
  }
  React.useEffect(()=> {
    checkLimit()
  }, [])
  return <GitHubContext.Provider value={{githubFollowers, repos, limitData,githubUser, rootUrl, setGithubUser}}>{children}</GitHubContext.Provider>
}

export {GitHubProvider, GitHubContext }
