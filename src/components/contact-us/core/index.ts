import Toastify from "toastify-js";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createOneContactUs } from "../api";

export type ContactFormRequest = {
  fullName: string;
  email: string;
  countryId: number;
  description: string;
};

export const ContactUsCreateMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: any) => void;
} = {}) => {
  const queryKey = ["contactItem"];
  const queryClient = useQueryClient();
  const saveMutation = useMutation(
    async ({
      ...payloadProperties
    }: ContactFormRequest): Promise<ContactFormRequest> => {
      const { data } = await createOneContactUs(payloadProperties);
      return data.results;
    },
    {
      onMutate: async () => {
        await queryClient.invalidateQueries(queryKey);
        await queryClient.removeQueries(queryKey);
        if (onSuccess) {
          onSuccess();
        }
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries(queryKey);
        await queryClient.removeQueries(queryKey);
        if (onSuccess) {
          Toastify({
            text: "Contact message save successful.",
            className: "info",
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #3CB371, #3CB371)",
            },
          }).showToast();
          onSuccess();
        }
      },
      onError: async (error) => {
        await queryClient.invalidateQueries(queryKey);
        await queryClient.removeQueries(queryKey);
        if (onError) {
          Toastify({
            text: "An error has occurred.",
            className: "info",
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #FF0000, #FF0000)",
            },
          }).showToast();
          onError(error);
        }
      },
    }
  );

  return saveMutation;
};
