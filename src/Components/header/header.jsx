import React, {useState, useContext} from 'react';
// import './header.style.css'
import Dropdown from './dropdown';
import Links from './links';
import Search from './search/search';
import {AuthContext} from '../../Context/authContext';

const styles = {
  links: 'hover:underline cursor-pointer hover:font-bold',
  absent:
    'rounded-full w-32  p-1 h-10 mt-2 font-medium color5-bg text-xs flex items-center justify-around',
};

const Header = ({history}) => {
  const [toggle, setToggle] = useState(false);
  const {user} = useContext(AuthContext);
  console.log('User is ', user);
  const toggled = () => {
    setToggle(!toggle);
  };

  return (
    <div class="bord head zoom-8">
      <div class="bord-left px-32">
        <div class="border flex items-start rounded-lg w-50p p-1 m-2">
          <div class="mx-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.49"
              height="17.49"
              viewBox="0 0 17.49 17.49"
            >
              <path
                class="searchIcon"
                d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
                transform="translate(-3 -3)"
              />
            </svg>
          </div>
          <Search />
        </div>
      </div>
      {user ? (
        <UserPresent
          toggle={toggle}
          onToggle={toggled}
          links={Links}
          setToggle={setToggle}
        />
      ) : (
        <UserAbsent history={history} />
      )}
    </div>
  );
};

const UserPresent = ({toggle, onToggle, links, setToggle}) => (
  <>
    <div class=" cursor-pointer">
      <svg class="m-auto mt-3" width="21" height="22.5" viewBox="0 0 25 26.5">
        <g transform="translate(-1095 -21)">
          <path
            class="a_notify"
            d="M12,22a2.006,2.006,0,0,0,2-2H10A2,2,0,0,0,12,22Zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.63,5.36,6,7.92,6,11v5L4,18v1H20V18Z"
            transform="translate(1091 25.5)"
          />
          <g transform="translate(-42 5)">
            <circle
              class="b_notify"
              cx="8.5"
              cy="8.5"
              r="8.5"
              transform="translate(1145 16)"
            />
            <text class="c_notify" transform="translate(1150 16)">
              <tspan x="0" y="12">
                2
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
    <div class="cursor-pointer">
      <img
        src="./avatar.png"
        class="p-2 rounded-full"
        alt=""
        onClick={onToggle}
      />
      <Dropdown active={toggle} links={links} setToggle={setToggle} />
    </div>
  </>
);

const UserAbsent = ({history}) => (
  <div className={styles.absent}>
    <a href="/login" className={styles.links}>
      Sign In
    </a>
    <div>|</div>
    <a href="/register" className={styles.links}>
      Sign Up
    </a>
  </div>
);

export default Header;
