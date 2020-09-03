import React, { useEffect, useCallback } from 'react';

import CardList from './CardList';
import Search from './Search';

import './App.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
      };
    case 'SET':
      return {
        ...state,
        filtered: action.val,
        user: action.val,
      };
    case 'FILTER':
      return {
        ...state,
        filtered: action.val,
        // user: action.val,
      };
    default:
      return state;
  }
};

const App = () => {
  const [searchState, dispatch] = React.useReducer(inputReducer, {
    user: [],
    filtered: [],
    value: '',
  });

  const changeHandler = useCallback((e) => {
    dispatch({ type: 'CHANGE', val: e.target.value.trim().toLowerCase() });
  }, []);

  useEffect(() => {
    if (searchState.value) {
      dispatch({
        type: 'FILTER',
        val: searchState.user.filter(
          (x) =>
            x.name.first.toLowerCase().includes(searchState.value) ||
            x.name.last.toLowerCase().includes(searchState.value)
        ),
      });
    } else {
      dispatch({ type: 'SET', val: searchState.user });
    }
  }, [searchState.value, searchState.user]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=12');
      const data = await res.json();

      dispatch({ type: 'SET', val: data.results });
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div className="App">
        <div className="app-header">
          <h1>Random People</h1>
          <Search
            placeholder="search for random people"
            onChange={changeHandler}
          />
        </div>
        <CardList emp={searchState.filtered} />
      </div>
    </React.Fragment>
  );
};

export default App;
