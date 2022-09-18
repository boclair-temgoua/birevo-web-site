import dyaxios from "../../../utils/commons/dyaxios";
import { ContactFormRequest } from "../core/index";

export const createOneContactUs = (payload: ContactFormRequest) => {
  return dyaxios.post(`/contacts/create`, payload);
};

export const getCountries = () => {
  return dyaxios.get(`/countries`);
};
