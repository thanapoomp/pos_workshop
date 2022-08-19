
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as swal from "../_common/components/SweetAlert";
import * as CONST from "../../../Constant";
import { encodeURLWithParams } from "../_common/functions/commonFunctions";
var flatten = require("flat");
const apiUrl = `${CONST.API_URL}/ProductGroup`;

const allQueryName = "ProductGroups";
const byIdQueryName = "ProductGroup";
const paginatedQueryName = "ProductGroupsPaginated";
const productQueryName = "ProductGroupsProduct";

//get all
const getAll = () => {
    return axios
      .get(apiUrl)
      .then((res) => {
        if (res.data.isSuccess) {
          return res.data.data;
        } else {
          throw Error(res.data.message);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  
  export const useGetAll = (
    onSuccessCallBack = () => {},
    onErrorCallBack = () => {}
  ) => {
    return useQuery([allQueryName], () => getAll(), {
      onSuccess: (data) => {
        onSuccessCallBack();
      },
      onError: (err) => {
        swal.swalError("Error", err.message).then((res) => {
          if (res.isConfirmed) {
            onErrorCallBack();
          }
        });
      },
      //ปิด Fetching บางเส้น
      refetchOnWindowFocus: false,
      //refetchInterval: false,
      //refetchIntervalInBackground: false,
      //refetchOnMount: false,
      //refetchOnReconnect: false,
    });
};