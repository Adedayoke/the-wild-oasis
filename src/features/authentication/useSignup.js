import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/");
      toast.success(
        "Account created successfully! Please verify the new account from the user's email address."
      );
    },
    // onError: (err)=>{
    //     toast.error(err.message)
    // }
  });
  return { signup, isLoading };
}
