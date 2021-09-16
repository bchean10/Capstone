import React, { useEffect } from "react";
import axios from "axios";
import HeroCard from './HeroCard';

function useHeroes() {

    const data = '';
    let heroes = [];

    const config = {
        method:'GET',
        url: 'https://api.opendota.com/api/heroes',
        headers:{
            'Authorization': 'Bearer 2196376f-9f2e-43cf-a69a-1bf0e5503c3e',
            "Content-Type": "application/json; charset=utf-8"
        },
        data:data
    };

  useEffect(() => {
    axios(config)
        .then((response)=>{
            heroes = response.data;
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error)});
        });

  return (
    <div className="hero-list">
      {heroes.map((hero)=>(
          <div className="hero-details">
            <HeroCard/>
          </div>
        ))
      }
    </div>
  );
}

export default useHeroes;