import React from "react";
import { useSelector } from "react-redux";
import {
  // getPokemonAbilities,
  getPokemonBasicDetails,
  getPokemonStats,
  getPokemonTypes,
} from "../../../../../../store";
import { Stat } from "../../../../Notifications";

interface CharacterInfoProps {
  name: string;
  value: number;
}

interface StatsInfoProp {
  stat: Stat;
}

const Description = () => {
  const details = useSelector(getPokemonBasicDetails);
  // const abilities = useSelector(getPokemonAbilities);
  const stats = useSelector(getPokemonStats);
  const types = useSelector(getPokemonTypes);

  const StatsInfo = ({ stat }: StatsInfoProp) => (
    <div className="character-info">
      <span className="info-purple">{stat.name}</span> {stat.baseStat}
    </div>
  );

  const CharacterInfo = ({ name, value }: CharacterInfoProps) => (
    <div className="character-info">
      <span className="info-purple">{name}</span>
      <span> {value}</span>
    </div>
  );

  return (
    <div className="received-files-info">
      <div className="profile">
        <div className="basic-info-list">
          <span className="subtitle">Info:</span>
          {details.map(({ name, value }, i) => (
            <CharacterInfo key={`basic-details-${i}`} name={name} value={value} />
          ))}
        </div>
        <div className="stats-info-list">
          <span className="subtitle">Stats:</span>
          {stats &&
            stats.map((stat, i) => (
              <StatsInfo key={`basic-details-${stat.name}-${i}`} stat={stat} />
            ))}
        </div>
      </div>

      <div className="attributes" style={{ display: "flex" }}>
        <div className="abilities-info-list">
          <span className="subtitle">Abilities:</span>
          {/*  {abilities &&
            abilities.map((ability, i) => (
              <div className="character-info" key={i}>
                {ability}
              </div>
            ))}*/}
        </div>
        <div className="types-info-list">
          <span className="subtitle">Types:</span>
          {types &&
            types.map((name, i) => (
              <div className="character-info" key={i} style={{ paddingLeft: "8px" }}>
                {name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
