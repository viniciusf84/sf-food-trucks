import { useState } from "react";

import styles from "./SearchList.module.css";

// components
import SearchItem from "../../components/SearchItem";
import LoadingContent from "../../components/LoadingContent";

const SearchList = ({ items, isLoading }) => {
  const [location, setLocation] = useState(false);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section className={styles.search_list}>
      {isLoading && <LoadingContent isLoading={isLoading} />}

      {!isLoading && items.length > 0
        ? items.map((item) => (
            <SearchItem
              key={item[":id"]}
              onClick={handleLocationClick}
              {...item}
            />
          ))
        : null}
    </section>
  );
};

export default SearchList;
