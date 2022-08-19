/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Grid, Button } from "@material-ui/core/";
import {
  FormikTextField,
  FormikDropdown,
} from "../../_common/components/CustomFormik";
import FormikRouterPrompt from "../../_common/components/CustomFormik/FormikRouterPrompt";
import * as swal from "../../_common/components/SweetAlert";
import * as productRedux from "../productRedux";
import { useHistory } from "react-router-dom";

function ProductToolbar() {
  const [filterList] = React.useState([
    { name: "Product", value: "ProductName" },
    { name: "Group", value: "ProductGroupName" },
  ]);

  const dispatch = useDispatch();
  const history = useHistory()
  const productReducer = useSelector(({ product }) => product);

  const formik = useFormik({
    enableReinitialize: true,

    validate: (values) => {
      const errors = {};

      // if (!values.searchText) {
      //   errors.searchText = "Please fill search text";
      // }

      return errors;
    },

    //get initial from redux
    initialValues: {
      filterColumn: productReducer.searchValues.filterColumn,
      searchText: productReducer.searchValues.value,
    },

    onSubmit: (values) => {
      //submit ....
      //   swal.swalInfo("info", JSON.stringify(values, null, 2)).then((res) => {
      //     //reset submitting
      //     formik.setSubmitting(false);
      //     formik.resetForm();
      //   });

      //dispatch redux
      let valueToDispatch = {};

      valueToDispatch.filterColumn = values.filterColumn;
      valueToDispatch.value = values.searchText;

      dispatch(productRedux.actions.updateSearch(valueToDispatch));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Start SearchBy */}
        <Grid item xs={12} lg={3}>
          <FormikDropdown
            formik={formik}
            disableFirstItem={true}
            name="filterColumn"
            label="ค้นหาจาก"
            valueFieldName="value"
            displayFieldName="name"
            data={filterList}
            firstItemText="กรุณาเลือก"
          />
        </Grid>

        {/* Start SearchText */}
        <Grid item xs={12} lg={3}>
          <FormikTextField formik={formik} name="searchText" label="Search" />
        </Grid>

        <Grid item xs={12} lg={3}>
          <Button
            name="searchButton"
            type="submit"
            disabled={formik.isSubmitting}
            fullWidth
            color="primary"
            variant="contained"
          >
            Search
          </Button>
        </Grid>

        <Grid item xs={12} lg={3}>
            <Button
              fullWidth
              //   onClick={handleClickAdd}
              color="primary"
              variant="contained"
              onClick={()=> {
                history.push('/product/new')
              }}
            >
              Add +
            </Button>
        </Grid>
      </Grid>
      <FormikRouterPrompt formik={formik}></FormikRouterPrompt>
      {/* <br></br>
      values: {JSON.stringify(formik.values)}
      <br></br>
      error: {JSON.stringify(formik.errors)}
      <br></br>
      touched: {JSON.stringify(formik.touched)}
      <br></br>
      dirty: {JSON.stringify(formik.dirty)} */}
    </form>
  );
}

export default ProductToolbar;
