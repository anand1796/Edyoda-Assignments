import React from "react";
import styles from "./search.module.css";

class Search extends React.Component {
  render() {
    return (
      <div className={styles.search}>
        <input
          id="sear"
          type="search"
          placeholder="Search your movie here..."
          onChange={this.props.fu}
          // value={this.props.value}
        />
      </div>
    );
  }
}

// const handleChange = (search) => {
//   setMovies(movies.filter((movie) => movie.Title === search));
// };

{
  /* <Search fu={handleChange} value={movies} /> */
}

export default Search;
