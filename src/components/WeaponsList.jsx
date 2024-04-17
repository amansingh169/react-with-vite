import React from 'react';

const WeaponList = (props) => {

  return (
    <div className="agents-container">
      <div className="weapon-sec">
        <h2>Sidearms:</h2>
        <ol>
          {props.list.handguns.map((weapon, index) => (
            <li key={index}>{weapon}</li>
          ))}
        </ol>
      </div>

      <div className="weapon-sec">
        <h2>SMGs:</h2>
        <ol>
          {props.list.smgs.map((weapon, index) => (
            <li key={index}>{weapon}</li>
          ))}
        </ol>
      </div>

      <div className="weapon-sec">
        <h2>Rifles:</h2>
        <ol>
          {props.list.rifles.map((weapon, index) => (
            <li key={index}>{weapon}</li>
          ))}
        </ol>
      </div>

      <div className="weapon-sec">
        <h2>Sniper Rifles:</h2>
        <ol>
          {props.list.snipers.map((weapon, index) => (
            <li key={index}>{weapon}</li>
          ))}
        </ol>
      </div>

      <div className="weapon-sec">
        <h2>Heavy Weapons:</h2>
        <ol>
          {props.list.heavies.map((weapon, index) => (
            <li key={index}>{weapon}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WeaponList;
