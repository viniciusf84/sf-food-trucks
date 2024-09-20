import styles from "./SearchItem.module.css";

// svg
import LocationIcon from "../../assets/location.svg?react";

const SearchItem = ({
  onClick,
  applicant,
  address,
  fooditems,
  latitude,
  longitude,
}) => {
  return (
    <div className={styles.search_item}>
      <div className={styles.title}>
        <LocationIcon />
        <h2>
          <a
            href={`https://google.com/maps?q=${latitude},${longitude}&z=15`}
            target="_blank"
          >
            {applicant}
          </a>
        </h2>
      </div>
      <p>{address}</p>

      {fooditems ? (
        <ul>
          {fooditems.split(":").map((food, index) => (
            <li key={`${food}-${index}`}>{food.trim()}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchItem;
