import React from "react";

const SearchResults = (props) => {
  const { data, clickfun } = props;
  return (
    <React.Fragment>
      {data.map((item) => (
        <TorrentTitle key={item.id} {...item} clickfun={clickfun} />
      ))}
    </React.Fragment>
  );
};

const TorrentTitle = (props) => {
  const { title, magnet, clickfun } = props;
  function setLocalStorage(link) {
    window.localStorage.setItem("magnet", link);
    clickfun();
  }
  return <h3 onClick={() => setLocalStorage(magnet)}>{title}</h3>;
};

export default SearchResults;
