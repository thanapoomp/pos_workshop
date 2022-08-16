import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { ContentRoute } from "./ContentRoute";
import PrivateRoute from "./PrivateRoute";
import ErrorUnAuthorized from "../pages/ErrorUnAuthorized";
import Home from "../pages/Home";
import Test from "../pages/Test";
import { PERMISSIONS } from "../../Constant";
import AlertDemo from "../modules/_demo/pages/AlertDemo";
import FormDemo from "../modules/_demo/pages/formComponents/FormDemo";
import FormWithAutoComplete from "../modules/_demo/pages/formComponents/FormWithAutoComplete";
import FormWithCheckBox from "../modules/_demo/pages/formComponents/FormWithCheckBox";
import FormWithCheckboxGroup from "../modules/_demo/pages/formComponents/FormWithCheckboxGroup";
import FormWithDatePicker from "../modules/_demo/pages/formComponents/FormWithDatePicker";
import FormWithDateTimePicker from "../modules/_demo/pages/formComponents/FormWithDateTimePicker";
import FormWithDropdown from "../modules/_demo/pages/formComponents/FormWithDropdown";
import FormWithDropDownMultiple from "../modules/_demo/pages/formComponents/FormWithDropdownMultiple";
import FormWithDropdownCascade from "../modules/_demo/pages/formComponents/FormWithDropdownCascade";
import FormWithRadioGroup from "../modules/_demo/pages/formComponents/FormWithRadioGroup";
import FormWithRating from "../modules/_demo/pages/formComponents/FormWithRating";
import FormWithSlider from "../modules/_demo/pages/formComponents/FormWithSlider";
import FormWithSwitch from "../modules/_demo/pages/formComponents/FormWithSwitch";
import FormWithTextMaskCardId from "../modules/_demo/pages/formComponents/FormWithTextMaskCardId";
import FormWithTextField from "../modules/_demo/pages/formComponents/FormWithTextField";
import FormWithTextNumber from "../modules/_demo/pages/formComponents/FormWithTextNumber";
import FormWithTimePicker from "../modules/_demo/pages/formComponents/FormWithTimePicker";
import FormWithUploader from "../modules/_demo/pages/formComponents/FormWithUploader";
import pdfGenerrate from "../modules/_demo/pages/PdfGenerateDemo";
import QRGenerateDemo from "../modules/_demo/pages/QRGenerateDemo";
import QRReaderDemo from "../modules/_demo/pages/QRReaderDemo";
import BarcodeGenerateDemo from "../modules/_demo/pages/BarcodeGenerateDemo";
import ChartDemo from "../modules/_demo/pages/ChartDemo";
import ChartDrillDownDemo from "../modules/_demo/pages/ChartDrillDownDemo";
import PrintComponent from "../modules/_demo/pages/PrintComponent";
import DatatableListDemo from "../modules/_demo/pages/DatatableListDemo";
import TabBasic from "../modules/_demo/pages/TabBasic";
import ReduxDemo from "../modules/_demo/pages/ReduxDemo";
import FormWithCustomDateBE from "../modules/_demo/pages/formComponents/FormWithCustomDateBE";
import FormWithDateRangePicker from "../modules/_demo/pages/formComponents/FormWithDateRangePicker";

export const breadcrumbNameMap = {
  "/product": "Product Manage",
  "/product/new": "New Product",
  "/product/:id/edit": "Product edit",
  "/product/:id": "Product view",
  "/checkout": "Check out",
  "/productgroup": "Product Group manage",
  "/productgroup/:id/edit": "Product Group edit",
  "/productgroup/:id": "Product Group",
  "/purchase": "Purchase",
};

export default function BasePage(props) {
  return (
    <React.Fragment>
      <Switch>
        {/* <Redirect exact from="/" to="/home" /> */}
        <Route exact path="/errorUnAuthorized" component={ErrorUnAuthorized} />
        <ContentRoute exact path="/" component={Home} />
        <ContentRoute exact path="/home" component={Home} />
        <ContentRoute exact path="/test" component={Test} title="Test" />

        {/* Begin Demo */}

        <PrivateRoute exact path="/demo/alert" component={AlertDemo} />
        <PrivateRoute exact path="/demo/formDemo" component={FormDemo} />
        <PrivateRoute
          exact
          path="/demo/formWithCustomDateBE"
          component={FormWithCustomDateBE}
        />
        <PrivateRoute
          exact
          path="/demo/formWithAutoComplete"
          component={FormWithAutoComplete}
        />
        <PrivateRoute
          exact
          path="/demo/formWithCheckBox"
          component={FormWithCheckBox}
        />
        <PrivateRoute
          exact
          path="/demo/formWithCheckboxGroup"
          component={FormWithCheckboxGroup}
        />
        <PrivateRoute
          exact
          path="/demo/formWithDatePicker"
          component={FormWithDatePicker}
        />
        <PrivateRoute
          exact
          path="/demo/formWithDateTimePicker"
          component={FormWithDateTimePicker}
        />
        <PrivateRoute
          exact
          path="/demo/formWithDateRangePicker"
          component={FormWithDateRangePicker}
        />
        <PrivateRoute
          exact
          path="/demo/formWithDropdown"
          component={FormWithDropdown}
        />
        <PrivateRoute
          exact
          path="/demo/formWithDropdownMultiple"
          component={FormWithDropDownMultiple}
        />
        <PrivateRoute
          exact
          path="/demo/formWithDropdownCascade"
          component={FormWithDropdownCascade}
        />
        <PrivateRoute
          exact
          path="/demo/formWithRadioGroup"
          component={FormWithRadioGroup}
        />
        <PrivateRoute
          exact
          path="/demo/formWithRating"
          component={FormWithRating}
        />
        <PrivateRoute
          exact
          path="/demo/formWithSlider"
          component={FormWithSlider}
        />
        <PrivateRoute
          exact
          path="/demo/formWithSwitch"
          component={FormWithSwitch}
        />
        <PrivateRoute
          exact
          path="/demo/formWithTextMaskCardId"
          component={FormWithTextMaskCardId}
        />
        <PrivateRoute
          exact
          path="/demo/formWithTextField"
          component={FormWithTextField}
        />
        <PrivateRoute
          exact
          path="/demo/formWithTextNumber"
          component={FormWithTextNumber}
        />
        <PrivateRoute
          exact
          path="/demo/formWithTimePicker"
          component={FormWithTimePicker}
        />
        <PrivateRoute
          exact
          path="/demo/formWithUploader"
          component={FormWithUploader}
        />
        <PrivateRoute exact path="/demo/reduxDemo" component={ReduxDemo} />
        <PrivateRoute
          exact
          path="/demo/pdfGenerrate"
          component={pdfGenerrate}
        />
        <PrivateRoute
          exact
          path="/demo/QRGenerateDemo"
          component={QRGenerateDemo}
        />
        <PrivateRoute
          exact
          path="/demo/QRReaderDemo"
          component={QRReaderDemo}
        />
        <PrivateRoute
          exact
          path="/demo/BarcodeGenerateDemo"
          component={BarcodeGenerateDemo}
        />
        <PrivateRoute exact path="/demo/apexcharts" component={ChartDemo} />
        <PrivateRoute
          exact
          path="/demo/chartDrillDown"
          component={ChartDrillDownDemo}
        />
        <PrivateRoute
          exact
          path="/demo/PrintComponent"
          component={PrintComponent}
        />
        <PrivateRoute
          exact
          path="/demo/datatableList"
          component={DatatableListDemo}
        />
        <PrivateRoute exact path="/demo/tabBasic" component={TabBasic} />

        <PrivateRoute
          exact
          path="/permissionTest"
          permissions={[PERMISSIONS.employee_delete]}
          component={Test}
        />

        {/* End Demo part สามารถ comment ได้ */}

        {/* Begin Demo POS */}

        {/* nothing match - redirect to error */}
        <Redirect to="/error404" />

        {/* --- End Demo POS --- */}
      </Switch>
    </React.Fragment>
  );
}
