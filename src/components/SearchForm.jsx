import React from "react";
import searchIcon from "../assets/search.svg";

class SearchForm extends React.PureComponent {
  onTagsChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("searchByTags", event.target.value);
  };

  render() {
    const { values, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          id="next-button"
          className="absolute bn bg-transparent"
          disabled={values.searchByTags === ""}
        >
          <img src={searchIcon} alt="search icon" className="mt1" />
        </button>
        <label
          className="font-weight-bold d-flex justify-content-between"
          htmlFor="buildingUnit"
        />

        <input
          id="searchByTags"
          type="text"
          name="searchByTags"
          value={values.searchByTags}
          onChange={this.onTagsChange}
          placeholder="search by tags"
          className="pl4 bn h2"
        />
      </form>
    );
  }
}
export default SearchForm;
