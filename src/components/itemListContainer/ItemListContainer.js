import { Typography } from "@material-ui/core";
import "./ItemListContainer.css"

function ItemListContainer(props ) {
  return (
    <Typography className="slogan" variant="h3" color="initial">
      {props.message}
    </Typography>
  );
}
export default ItemListContainer;
