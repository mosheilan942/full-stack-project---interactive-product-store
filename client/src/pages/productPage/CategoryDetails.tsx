import { Typography } from "@mui/material";
import { CellPhoneType, RefrigeratorType, WashingMachineType } from "../../types/ProductTypes";

type ProductType = CellPhoneType | RefrigeratorType | WashingMachineType;

export const ProductDetails = ({ product }: { product: ProductType }) => {
  return (
    <>
      <Typography variant="body1">Category Details: </Typography>
      <ul>
        {('screenSize' in product.categoryDetails) && (
          <>
            <li>Height: {product.categoryDetails.height}</li>
            <li>Width: {product.categoryDetails.width}</li>
            <li>Weight: {product.categoryDetails.weight}</li>
            <li>Length: {product.categoryDetails.length}</li>
            <li>Screen size: {product.categoryDetails.screenSize}</li>
          </>
        )}
        {('freezerLocation' in product.categoryDetails) && (
          <>
            <li>Height: {product.categoryDetails.height}</li>
            <li>Width: {product.categoryDetails.width}</li>
            <li>Depth: {product.categoryDetails.depth}</li>
            <li>Weight: {product.categoryDetails.weight}</li>
            <li>Freezer location: {product.categoryDetails.freezerLocation}</li>
          </>
        )}
        {('energyRating' in product.categoryDetails) && (
          <>
            <li>Height: {product.categoryDetails.height}</li>
            <li>Width: {product.categoryDetails.width}</li>
            <li>Depth: {product.categoryDetails.depth}</li>
            <li>Weight: {product.categoryDetails.weight}</li>
            <li>Energy rating: {product.categoryDetails.energyRating}</li>
          </>
        )}
      </ul>
    </>
  );
};
