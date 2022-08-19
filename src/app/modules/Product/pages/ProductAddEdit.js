import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import {
  FormikDropdown,
  FormikTextNumber,
  FormikTextField,
  FormikDatePicker,
  FormikUploader,
} from "../../_common/components/CustomFormik";
import * as productGroupApi from "../../ProductGroup/productGroupApi";
import * as productApi from "../productApi";

require("dayjs/locale/th");
var utc = require("dayjs/plugin/utc");
var dayjs = require("dayjs");
dayjs.locale("th");
dayjs.extend(utc);

function ProductAddEdit() {
  const history = useHistory();
  const urlWhenAddEditSuccess = '/product';
  const { id } = useParams();

  const productGroupList = productGroupApi.useGetAll();
  const selectedProduct = productApi.useGetById(id);

  const handleAddSuccess = () => {
    history.push(urlWhenAddEditSuccess)
  };


  const handleUpdateSuccess = () => {
    history.push(urlWhenAddEditSuccess)
  };


  const productCreate = productApi.useCreate(
    null,
    handleAddSuccess,
  );

  const productUpdate = productApi.useUpdate(
    null,
    handleUpdateSuccess,
  );

  const handleClose = () => {};

  const formik = useFormik({
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};

      //validate selected productGroup
      if (!values.productGroupId) {
        errors.productGroupId = "required";
      }

      //validate name
      if (!values.productName) {
        errors.productName = "required";
      }

      //validate price
      if (values.price < 0) {
        errors.price = "must > or = 0";
      }

      //validate expiry date
      if (!values.expiryDate) {
        errors.expiryDate = "required";
      }

      //validate thumbnail
      if (!id) {
        if (!values.thumbnail) {
          errors.thumbnail = "กรุณาเลือกรูป";
        }
      }

      return errors;
    },
    initialValues: {
      productGroupId: selectedProduct.data
        ? selectedProduct.data.productGroupId
        : 0,
      productName: selectedProduct.data ? selectedProduct.data.productName : "",
      price: selectedProduct.data ? selectedProduct.data.price : 0,
      expiryDate: selectedProduct.data ? selectedProduct.data.expiryDate : null,
      thumbnail: selectedProduct.data ? selectedProduct.data.thumbnail : null,
    },
    onSubmit: (values) => {
      //bind value
      let payload = {
        productId: id,
        productGroupId: values.productGroupId,
        productName: values.productName,
        price: values.price,
        expiryDate: dayjs(values.expiryDate).local().format(),
        thumbnail: values.thumbnail,
      };

      //check add or edit
      if (id) {
        //update
        productUpdate.mutate(payload);
      } else {
        //add
        productCreate.mutate(payload);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: 10 }}>
      <Grid container spacing={2}>
        {id && (
          <Grid item xs={12} md={12} lg={12}>
            <Typography>id: {id}</Typography>
          </Grid>
        )}

        {/* group */}
        <Grid item xs={12} md={12} lg={12}>
          <FormikDropdown
            formik={formik}
            disableFirstItem={true}
            name="productGroupId"
            label="ProductGroup*"
            displayFieldName="productGroupName"
            valueFieldName="productGroupId"
            data={productGroupList.data}
            firstItemText="กรุณาเลือก"
          />
        </Grid>

        {/* Start name */}
        <Grid item xs={12} md={12} lg={12}>
          <FormikTextField
            formik={formik}
            name="productName"
            label="Product Name*"
          />
        </Grid>

        {/* Start price */}
        <Grid item xs={12} md={12} lg={12}>
          <FormikTextNumber formik={formik} name="price" label="Price*" />
        </Grid>

        {/* expiry date */}
        <Grid item xs={12} md={12} lg={12}>
          <FormikDatePicker
            autoOk
            disablePast
            formik={formik}
            name="expiryDate"
            label="Expiry Date*"
          />
        </Grid>
        {/* Thumbnail */}
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={6} lg={6}>
            <FormikUploader
              formik={formik}
              name="thumbnail"
              label="วางไฟล์ (jpg/png)"
              required
              acceptedFiles={[".jpg", ".png"]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            {selectedProduct?.data?.thumbnail && (
              <img alt="" src={selectedProduct.data.thumbnail} />
            )}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={3} lg={3}>
            <Button
              fullWidth
              name="btnSubmit"
              type="submit"
              color="primary"
              variant="contained"
              disabled={formik.isSubmitting || !formik.dirty}
              // fullWidth
              onClick={formik.handleSubmit}
            >
              Ok
            </Button>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Button name="btnCancel" fullWidth variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default ProductAddEdit;
