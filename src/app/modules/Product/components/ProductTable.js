/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import {ColumnDateTime,ColumnIsActive,ColumnNumber} from "../../_common/components/DataTable";
import {ViewButton,EditButton,DeleteButton} from '../../_common/components/Buttons'
import StandardDataTable from "../../_common/components/DataTable/StandardDataTable";
import * as productApi from "../productApi";
import * as productRedux from '../productRedux'
import * as swal from '../../_common/components/SweetAlert'

function ProductTable() {

  const productReducer = useSelector(({ product }) => product);
  const history = useHistory();
  const dispatch = useDispatch();

  const productDelete = productApi.useDeleteById(null);

  const productData = productApi.useGetPaginated(
    productReducer.paginated,
    productReducer.searchValues
  );

  const updatePaginated = (paginated) => {
    dispatch(productRedux.actions.updatePaginated(paginated))
  }

  const handleDelete = (data) => {
    swal.swalConfirm(`delete ${data.productName}?`).then((result) => {
      if (result.isConfirmed) {
         productDelete.mutate(data.productId,onDeleteSuccess,onDeleteErrorCallBack)
      }
    })
  }

  const onDeleteSuccess = (data) => {
    // alert('deleted')
  }

  const onDeleteErrorCallBack = (err) => {

  }

  const columns = [
    {
      name: "productGroupName",
      label: "group",
    },
    {
      name: "productName",
      label: "name",
    },
    {
      name: "price",
      label: "Price",
      options: {
        sort: false,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnNumber
              value={productData.data.data[dataIndex].price}
            ></ColumnNumber>
          );
        },
      },
    },
    {
      name: "isActive",
      label: "IsActive",
      options: {
        sort: false,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnIsActive
              value={productData.data.data[dataIndex].isActive}
            ></ColumnIsActive>
          );
        },
      },
    },
    {
      name: "Expiry",
      label: "Expiry",
      options: {
        sort: false,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnDateTime
              value={productData.data.data[dataIndex].expiryDate}
            ></ColumnDateTime>
          );
        },
      },
    },
    {
      name: "created",
      label: "createdDate",
      options: {
        sort: false,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnDateTime
              value={productData.data.data[dataIndex].createdDate}
            ></ColumnDateTime>
          );
        },
      },
    },
    {
      name: "createdByUserId",
      label: "created  by",
    },
    {
      name: "",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Grid
              style={{ padding: 0, margin: 0 }}
              container
              spacing={1}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {productData.data.data[dataIndex].isActive && (
                <React.Fragment>
                  <Grid item xs={12} lg={4}>
                    <ViewButton
                      onClick={() => {
                        history.push(
                          `/product/${productData.data.data[dataIndex].productId}`
                        );
                      }}
                    ></ViewButton>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <EditButton
                      onClick={() => {
                        history.push(
                          `/product/${productData.data.data[dataIndex].productId}/edit`
                        );
                      }}
                    ></EditButton>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <DeleteButton
                      onClick={() => {
                        let data = productData.data.data[dataIndex];
                        handleDelete(data);
                      }}
                    ></DeleteButton>
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
          );
        },
      },
    },
  ];

  return (
    <Paper  elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <StandardDataTable
            name="Product"
            denseTable
            title="Manage Product"
            loading={productData.isLoading}
            columns={columns}
            data={productData.data?.data}
            paginated={productReducer.paginated}
            setPaginated={updatePaginated}
            totalRecords={productData.data?.totalAmountRecords}
          ></StandardDataTable>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductTable;
