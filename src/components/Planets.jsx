import React, {useEffect, useContext}  from 'react';
import { useFetch } from '../hooks/fetch';
import Planetcard from './Planetcard';
import {GlobalContext} from '../common/contexts'


const Planets = props => {
  const {state: {planets, loading}, dispatch} = useContext(GlobalContext)
  // const { setItem } = props;

  useEffect(() => {
    dispatch({type: 'SET_LOADING'});

    fetch('https://swapi.co/api/planets')
    .then(results => results.json())
    .then(data => {
      const planetsToSave = data
        ? data.results.map((item, index) => ({
            name: item.name,
            id: index + 1,
            url: item.url,
            diameter: item.diameter
          }))
        : [];
      // const [isLoading, fetchedData] = useFetch('https://swapi.co/api/planets', []);

        dispatch({type: 'SET_PLANETS', payload: planetsToSave})
    })

  }, [dispatch])


  let content = <p>Loading planets...</p>;

  if (!loading && planets && planets.length > 0) {
    content = (
        <ul className="planets__list articles__list">
            {planets.map((planet, index) =>
                <li className="planets__list--item articles__list--item" key={index}>
                    <Planetcard planetName={planet.name} planetId={planet.id} planetUrl={planet.url} planetDiameter={planet.diameter}  />
                </li>
            )}
        </ul>
    );
  } else if (
    !loading &&
    (!planets || planets.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Planets;