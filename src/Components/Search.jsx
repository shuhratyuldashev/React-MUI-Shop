import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      sx={{ mb: 1 }}
      fullWidth
      label="Search"
      variant="outlined"
      type="search"
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
