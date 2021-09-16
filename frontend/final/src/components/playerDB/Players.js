import React, { useEffect } from "react";
import axios from "axios";
import PlayerCard from './PlayerCard';

function usePlayers() {

    const data = '';
    let players = [];

    const config = {
        method:'GET', 
        url: 'https://api.opendota.com/api/proPlayers',
        headers:{
          'Authorization': 'Bearer 2196376f-9f2e-43cf-a69a-1bf0e5503c3e',
          "Content-Type": "application/json; charset=utf-8"
        },
        data:data
    };

  useEffect(() => {
    axios(config)
        .then((response)=>{
            players = response.data;
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error)});
        });

  return (
    <div className="players-list">
      {players.map((player)=>(
          <div className="player-details">
            <PlayerCard/>
          </div>
        ))
      }
    </div>
  );
}

export default usePlayers;