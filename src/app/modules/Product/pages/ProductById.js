import React from 'react'
import { useParams } from 'react-router-dom';
import * as productApi from "../productApi";

function ProductById() {
    let { id } = useParams();
    const selectedProduct = productApi.useGetById(id);
  return (
    <div>ProductById: {JSON.stringify(selectedProduct)}</div>
  )
}

export default ProductById