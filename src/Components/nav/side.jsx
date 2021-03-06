import React from 'react';
import {Link} from 'react-router-dom';
import logoSVG from './svg/logo.svg';
import SideMenu from './sideNav';

const side = () => (
  <div class="side zoom-9 ">
    <div class="pt-5 cursor-pointer">
      <Link to="/">
      <img class="m-auto" src={logoSVG} alt="logoSVG" />
      </Link>
    </div>
    <div class="-mt-5 border-gray-400 ">
      <SideMenu />
    </div>
  </div>
);

export default side;
