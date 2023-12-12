import { userType } from "@/types/user.type";
import axios from "axios";
import toast from "react-hot-toast";

export const signUpPost = async (
  endpoint: string,
  data: Pick<userType, "email" | "password" >,
  token: string = ""
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
      data,
      {
        headers: {
          Authorization: `Bearer${token}`,
        },
      }
    );

    if (res.data) {
      return res.data;
    }
  } catch (error: any) {
    toast.error(error.response?.data?.message);
  }
};
