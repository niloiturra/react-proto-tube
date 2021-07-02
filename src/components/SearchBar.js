import React from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideoAsync } from '../redux/modules/search-video';

const SearchBar = (props) => {
  const getValueTerm = (e) => {
    if (e.keyCode === 13) {
      const valueTerm = e.target.value;
      props.searchVideoAsync(valueTerm);
    }
  };

  return (
    <div className="search-bar">
      <Segment stacked>
        <Input
          icon="search"
          onKeyDown={(e) => getValueTerm(e)}
          size="large"
          placeholder="React hot videos 😳"
        />
      </Segment>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchVideoAsync }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
