import React, {useState, useContext} from "react";
import axios from "axios";
import mockFollowers from "./mockData/mockFollowers";
import mockRepo from "./mockData/mockRepo";
import mockUser from "./mockData/mockUser"

const rootUrl = "https://api.github.com";

const GitHubContext = React.createContext();
const GitHubProvider = ({children}) => {
  return <GitHubContext.Provider value="hello">{children}</GitHubContext.Provider>
}

export {GitHubProvider, GitHubContext }
