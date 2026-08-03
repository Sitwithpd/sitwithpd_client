import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getPayments,
  createPayment,
  verifyPaystackPayment,
} from "../../services/payments/payments.services";
import { showSuccessToast, showErrorToast } from "@/lib/toast-helpers";

export const useGetPayments = (params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ["payments", params],
    queryFn: () => getPayments(params),
    retry: false,
  });
};

export const useCreatePayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPayment,
    onSuccess: (data) => {
      showSuccessToast(data.message);
      queryClient.invalidateQueries({ queryKey: ["payments"] });
    },
    onError: (error: any) => {
      showErrorToast(error.message);
    },
  });
};


//  ================== VERIFY PAYSTACK PAYMENT ===================
export const useVerifyPaystackPayment = (reference: string) => {

  return useQuery({
    queryKey: ["payment-verification", reference],
    queryFn: () => verifyPaystackPayment(reference),
     enabled: Boolean(reference),
    retry: false,
  })
}