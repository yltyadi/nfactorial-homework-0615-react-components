import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import {useState} from "react";

export const Contents = ({handleCreateFan}) => {
    const [selector, setSelector] = useState("Characters");
    
    const handleSelectorChange = (event) => {
        setSelector(event.target.value);
    };

    return (
        <>
        <div className="content-layout">
                <select value={selector} placeholder="Choose your path" className="select-item" onChange={handleSelectorChange}>
                    <option>Characters</option>
                    <option>Planets</option>
                    <option>Starships</option>
                </select>
        </div>
            {selector === "Characters" && swCharacters.map((character)=>(
            <div key={character.name} className="item-list-layout">
              <div>
                <p>name: {character.name}</p>
                <p>gender: {character.gender}</p>
                <p>birthday: {character.birth_year}</p>
              </div>
              <div className="item-image-layout">
                <button className="favorite-button" onClick={()=>handleCreateFan(character)}>I am your fan!!</button>
                <img
                  className="item-image"
                  src={character.url}
                  alt="asd"
                />
              </div>
            </div>
            ))}

            {selector === "Planets" && swPlanets.map((planet)=>(
            <div key={planet.name} className="item-list-layout">
              <div>
                <p>name: {planet.name}</p>
                <p>rotational period: {planet.rotation_period}</p>
                <p>orbital period: {planet.orbital_period}</p>
              </div>
              <div className="item-image-layout">
                <button className="favorite-button"  onClick={()=>handleCreateFan(planet)}>I am your fan!!</button>
                <img
                  className="item-image"
                  src={planet.url}
                  alt="asd"
                />
              </div>
            </div>
            ))}

            {selector === "Starships" && swStarships.map((starship)=>(
            <div key={starship.name} className="item-list-layout">
              <div>
                <p>name: {starship.name}</p>
              </div>
              <div className="item-image-layout">
                <button className="favorite-button" onClick={()=>handleCreateFan(starship)}>I am your fan!!</button>
                <img
                  className="item-image"
                  src={starship.url}
                  alt="asd"
                />
              </div>
            </div>
          ))}
        </>
    );
};