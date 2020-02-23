import React from "react";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { FormWrapper } from '../styles'

//react component is function props are args
const SearchBar = props => {
  return (
    <FormWrapper inline>
    <FormGroup>
      <Label for="searchTerm" hidden>Location Search</Label>
      <Input
        type="text"
        name="searchTerm"
        id="searchTerm"
        placeholder="Location or Landmark"
        onChange={props.handleInputChange}
        value={props.searchTerm}
      />
      <Button>Search</Button>
    </FormGroup>
    </FormWrapper>
  )
}

export default SearchBar;