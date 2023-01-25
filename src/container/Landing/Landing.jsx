import React, { useEffect, useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import logoImg from "../../assets/watchMenLogoTransparent.png";
import SearchBar from "../../components/Search";
import SearchResults from "../../components/SearchResults";
import { Input, Spin } from "antd";
import "./styles.scss";
import { configFile } from "../../config/config";

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#ff325d",
    }}
  />
);

const Landing = (props) => {
  const { history } = props;
  const [loading, setLoading] = useState(false);
  const [searchResponse, setSearchResponse] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
    }
  }, []);

  const _onSearch = (value) => {
    setLoading(true);
    fetch(configFile.apis.search, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search_keyword: value }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setSearchResponse(resp);
        setLoading(false);
        setSearchValue("");
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setSearchValue("");
      });
  };

  function goToWatchPage() {
    history.push("/watch");
  }

  const _onChange = (e) => setSearchValue(e.target.value);
  const SearchResult =
    searchResponse.length > 0 ? (
      <SearchResults data={searchResponse} clickfun={goToWatchPage} />
    ) : (
      <div>No torrent found</div>
    );
  let searchResultHeight = 200;
  if (ref.current) {
    const searchResultElement = ref.current;
    searchResultHeight = Math.round(
      window.innerHeight - searchResultElement.getBoundingClientRect().top - 10
    );
  }

  return (
    <main className="landing-container">
      <Spin spinning={loading}>
        <header>
          <img src={logoImg} alt="watch men" />
        </header>
        <div className="search-body">
          <SearchBar
            placeholder="Search Torrents"
            prefix={prefix}
            buttonText="Search"
            onSearch={_onSearch}
            onChange={_onChange}
            value={searchValue}
          />
        </div>
        <section
          className="search-result"
          style={{ height: searchResultHeight }}
          ref={ref}
        >
          <article>{SearchResult}</article>
        </section>
      </Spin>
    </main>
  );
};

export default Landing;
