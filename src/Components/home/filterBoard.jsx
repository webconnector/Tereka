import React, {useEffect} from 'react';
import {Link, Route} from 'react-router-dom';

const style = {
  active: 'p-2 mx-1 rounded-full  bg-green-300',
  inactive: 'p-2  mx-1 rounded-full hover:bg-green-300',
};

const FilterBoard = ({fil_dispatch, ori, setOri}) => {
  const handleClick = () => {
    if (ori === 'Card') {
      setOri('List');
    } else {
      setOri('Card');
    }
  };

  return (
    <div class=" flex items-center justify-between mt-2  mr-3 border rounded-lg zoom-9 header">
      <div class="flex cursor-pointer p-2 items-center">
        <div class="flex items-center">
          <div
            className={ori === 'Card' ? style.active : style.inactive}
            onClick={handleClick}
          >
            <svg width="14" height="13" viewBox="0 0 16 15.999">
              <path
                class="alarge"
                d="M11,16a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v3a2,2,0,0,1-2,2Zm0-2h3V11H11ZM2,16a2,2,0,0,1-2-2V11A2,2,0,0,1,2,9H5a2,2,0,0,1,2,2v3a2,2,0,0,1-2,2Zm0-2H5V11H2Zm9-7A2,2,0,0,1,9,5V2a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2V5a2,2,0,0,1-2,2Zm0-2h3V2H11ZM2,7A2,2,0,0,1,0,5V2A2,2,0,0,1,2,0H5A2,2,0,0,1,7,2V5A2,2,0,0,1,5,7ZM2,5H5V2H2Z"
                transform="translate(16 15.999) rotate(180)"
              />
            </svg>
          </div>
          <div
            class="p-3 -ml-1 rounded-full hover:bg-green-300"
            className={ori === 'List' ? style.active : style.inactive}
            onClick={handleClick}
          >
            <svg width="12" height="10" viewBox="0 0 12 10">
              <path
                class="alist"
                d="M1,10A1,1,0,0,1,1,8H11a1,1,0,0,1,0,2ZM1,6A1,1,0,0,1,1,4H11a1,1,0,0,1,0,2ZM1,2A1,1,0,0,1,1,0H11a1,1,0,0,1,0,2Z"
                transform="translate(12 10) rotate(180)"
              />
            </svg>
          </div>
        </div>
        <div class="flex ml-3 py-1 px-3  rounded-full hover:bg-green-300 items-center">
          <div class=" text-gray-500 hover:text-gray-800 text-xs font-medium uppercase">
            sort
          </div>
          <div class="ml-2">
            <svg width="12" height="7" viewBox="0 0 12 7.41">
              <path
                class="a_dropdown"
                d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                transform="translate(-6 -8.59)"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="flex items-center text-gray-500 text-xs font-medium">
        <MenuLink value="Business" dispatch={fil_dispatch} exact={true} to={"/business"}/>
        <MenuLink value="History" dispatch={fil_dispatch} exact={true} to={"/history"}/>
        <MenuLink value="Economy" dispatch={fil_dispatch} exact={true} to={"/economy"}/>
        <MenuLink value="Fiction" dispatch={fil_dispatch} exact={true} to={"/fiction"}/>
        <MenuLink value="Fantacy" dispatch={fil_dispatch} exact={true} to={"/fantacy"}/>
        <MenuLink value="Philosopy" dispatch={fil_dispatch} exact={true} to={"/philosopy"}/>
      </div>
    </div>
  );
};

const MenuLink = ({value, to, exact, dispatch}) => {
  const styles = {
    active:
      'px-4 cursor-pointer hover:text-gray-800 hover:font-bold underline text-gray-800 font-bold',
    Inactive: 'px-4 cursor-pointer hover:text-gray-800 hover:font-bold',
  };
  return (
    <Route
      path={to}
      exact={exact}
      children={({match}) => {
        if (match && match.path.endsWith(value.toLowerCase())) {
          console.log('MenuLink -> Match ', match, '-> Value', value);
          dispatch({type: value.toUpperCase()});
        }
        return (
          <Link to={to}>
            <div className={match ? styles.active : styles.Inactive}>
              {value}
            </div>
          </Link>
        );
      }}
    />
  );
};

export default FilterBoard;
