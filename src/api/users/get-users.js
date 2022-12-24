import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { USER_STORE_CONSTANTS } from "../../store/helpers/store.constants";
import { API_ENDPOINTS } from "../endpoints/api-endpoints";

const getAllusers = async () => {
  const data = await axios.get(API_ENDPOINTS.GET_ALL_USERS,);
  return data?.data;
};

export const useGetAllUsers = () => {
  const dispatch = useDispatch();
  return useQuery([API_ENDPOINTS.GET_ALL_USERS], getAllusers, {
    onSuccess: (data) => {
      dispatch({
        type: USER_STORE_CONSTANTS.GET_USERS,
        payload: data,
      });
    },
  });
};
