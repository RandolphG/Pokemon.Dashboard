import React from 'react';
import { useSelector } from 'react-redux';
import {
  getPokemonAbilities,
  getPokemonBasicDetails,
  getPokemonStats,
  getPokemonTypes,
} from '../../../../../../store';

const Description = () => {
  const pokemonDetails = useSelector(getPokemonBasicDetails);
  const abilities = useSelector(getPokemonAbilities);
  const stats = useSelector(getPokemonStats);
  const types = useSelector(getPokemonTypes);

  const StatsInfo = ({ name, stats }) => (
    <div className="character-info">
      <span className="info-purple">{name}</span> {stats}
    </div>
  );

  const CharacterInfo = ({ id, value }) => (
    <div className="character-info">
      <span className="info-purple">{id}</span>
      <span> {value}</span>
    </div>
  );

  return (
    <div className="received-files-info">
      <div className="profile">
        <div className="basic-info-list">
          <span className="subtitle">Info:</span>
          {pokemonDetails.map(({ id, value }, i) => (
            <CharacterInfo key={`basic-details-${i}`} id={id} value={value} />
          ))}
        </div>
        <div className="stats-info-list">
          <span className="subtitle">Stats:</span>
          {stats &&
            stats.map(({ name, stats }, i) => (
              <StatsInfo key={`basic-details-${name}`} name={name} stats={stats} />
            ))}
        </div>
      </div>

      <div className="attributes" style={{ display: 'flex' }}>
        <div className="abilities-info-list">
          <span className="subtitle">Abilities:</span>
          {abilities &&
            abilities.map(({ ability }, i) => (
              <div className="character-info" key={i}>
                {ability}
              </div>
            ))}
        </div>
        <div className="types-info-list">
          <span className="subtitle">Types:</span>
          {types &&
            types.map(({ name }, i) => (
              <div className="character-info" key={i} style={{ paddingLeft: '8px' }}>
                {name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
