import React from 'react';
import ListItem from './listItem';

const styles = {
  active:
    ' font-normal dropdown shadow overflow-hidden rounded bg-gray-300 w-full border mt-2 py-1 right-0 z-50',
  hidden: 'hidden',
};

const SearchDropdown = ({active, selected, links, setToggle,setSearch}) => {
  return (
    <ul className={active ? styles.active : styles.hidden}>
      {links
        ? links.map(link => (
            <ListItem
              selected={selected}
              setToggle={setToggle}
              setSearch={setSearch}
              link={link}
            />
          ))
        : null}
    </ul>
  );
};

export default SearchDropdown;
