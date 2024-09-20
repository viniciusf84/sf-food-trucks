import { useCallback, useState } from "react";

// services
import getFoodTruckFacilities from "./services/handler";

//components
import SearchInput from "./components/SearchInput";

// containers
import SearchList from "./containers/SearchList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [results, setResults] = useState([]);
  const [emptyResults, setEmptyResults] = useState(false);

  const onChangeInput = useCallback(
    (e) => {
      if (emptyResults) {
        setEmptyResults(false);
      }
      setInputVal(e.target.value);
    },
    [emptyResults]
  );

  const fetchResults = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getFoodTruckFacilities({
        search: inputVal,
        status: "APPROVED",
      });

      setResults(response);
      if (!response.length) {
        setEmptyResults(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [inputVal]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchResults();
    }
  };

  const onSearchClick = () => {
    fetchResults();
  };

  return (
    <main>
      <h1>Let's find something to eat</h1>

      <p>Find your favorite dishes at the best food trucks in San Francisco</p>

      <SearchInput
        value={inputVal}
        onChange={onChangeInput}
        onKeyPress={handleKeyPress}
        placeholder="What would you like to taste today?"
        onSearchClick={onSearchClick}
      />

      <SearchList items={results} isLoading={isLoading} />

      {emptyResults ? <p>Sorry, but we couldn't help you this time.</p> : null}
    </main>
  );
}

export default App;
