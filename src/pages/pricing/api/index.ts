import dyaxios from "../../../utils/commons/dyaxios"

export const getFaqApi = (options: {organizationId: number}) => {
    const {organizationId} = options
    return dyaxios.get(`/user-address/billing/${organizationId}`)
  }
  