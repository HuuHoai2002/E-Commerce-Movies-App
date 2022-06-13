import { memo } from "react";
import { Grid } from "../components/grid";
import { Row } from "../components/row";
import ProductItemSmall from "./ProductItemSmall";

const ProductList = ({ isRow = false, movies, col }) => {
  return (
    <div className="list-product">
      {isRow ? (
        <Grid col="2" gap="10px">
          {movies.length > 0 &&
            movies.map((item) => (
              <Row key={item.id}>
                <ProductItemSmall data={item} />
              </Row>
            ))}
        </Grid>
      ) : (
        <Grid>
          <Row></Row>
        </Grid>
      )}
    </div>
  );
};

export default memo(ProductList);
