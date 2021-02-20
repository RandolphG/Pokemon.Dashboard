import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getPokemonAbilities, getPokemonBasicDetails, getPokemonStats } from '../../../../../store';

const Details = () => {
  const pokemonDetails = useSelector(getPokemonBasicDetails);
  const abilities = useSelector(getPokemonAbilities);
  const stats = useSelector(getPokemonStats);

  const Images = () => (
    <div className="received-files">
      <div className="image-wrapper">
        <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
      </div>
      <div className="image-wrapper">
        <img src="https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
      </div>
      <div className="image-wrapper">
        <img src="https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
      </div>
    </div>
  );

  const StatsInfo = ({ name, stats }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '8px',
        width: '9.5vw',
      }}
    >
      <span className="info-purple">{name}</span> {stats}
    </div>
  );

  const CharacterInfo = ({ id, value }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '8px',
        width: '9vw',
      }}
    >
      <span className="info-purple">{id}</span> {value}
    </div>
  );

  const Description = () => (
    <div className="received-files-info">
      <div style={{ display: 'flex' }}>
        <div className="basic-info-list">
          <span className="info-list">Info:</span>
          {pokemonDetails.map(({ id, value }, i) => (
            <CharacterInfo key={`basic-details-${i}`} id={id} value={value} />
          ))}
        </div>
        <div className="stats-info-list">
          <span className="info-list">Stats:</span>
          {stats &&
            stats.map(({ name, stats }, i) => (
              <StatsInfo key={`basic-details-${name}`} name={name} stats={stats} />
            ))}
        </div>
      </div>

      <div className="info-list">
        <span className="info-list">Abilities:</span>
        {abilities &&
          abilities.map(({ ability }, i) => (
            <div key={i} style={{ paddingLeft: '8px' }}>
              {ability}
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <Fragment>
      <div className="received-item-line">
        <div className="progress-line">
          {/* <span className="time start">15:30</span>
          <span className="time end">18:30</span>*/}
        </div>
        <div className="received-items-content">
          <Images />
          <Description />
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
