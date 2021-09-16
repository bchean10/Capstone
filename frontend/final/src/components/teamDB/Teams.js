import React, { useEffect } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";

function useTeams() {

    const data = '';
    let teams = [];

    const config = {
        method:'GET', 
        url: 'https://api.opendota.com/api/teams',
        headers:{
          'Authorization': 'Bearer 2196376f-9f2e-43cf-a69a-1bf0e5503c3e',
          "Content-Type": "application/json; charset=utf-8"
        },
        data:data
    };

  useEffect(() => {
    axios(config)
        .then((response)=>{
            teams = response.data;
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error)});
        });

  return (
    <div className="teams-list">
      {teams.map((team)=>(
          <div className="team-details">
            <TeamCard/>
          </div>
        ))
      }
    </div>
  );
}

export default useTeams;