import React from 'react'
import ProductTable from '../components/ProductTable'
import ProductToolbar from '../components/ProductToolbar'

function ProductManage() {
  
  React.useEffect(() => {
    return () => {
      //TODO: Reset product redux
    }
  }, [])
  
  return (
    <div>
        <ProductToolbar></ProductToolbar>
        <ProductTable></ProductTable>
    </div>
  )
}

export default ProductManage