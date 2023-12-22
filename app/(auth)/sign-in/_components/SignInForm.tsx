"use client";

import Button from "@/components/ui/Button";
import { signUpPost } from "@/lib/signUpPost";
import { login } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);

      const data = await signUpPost("/api/auth/login", formData);

      if (data) {
        setLoading(false);
        setFormData({
          email: "",
          password: "",
        });
        dispatch(login(data));
        toast.success("Login successfull");
        router.push("/");
      } else {
        setLoading(false);
      }
    },
    [formData, router, dispatch]
  );

  return (
    <div className='w-2/5 h-full'>
      <div className='w-full flex flex-col gap-10'>
        <div className='flex flex-col gap-1.5 '>
          <h2 className='text-3xl'>Welcome back!</h2>
          <p className='text-light/50'>Please login to your account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex w-full flex-col gap-5 text-lg'
        >
          <div className='flex flex-col items-start gap-1.5 '>
            <label htmlFor='email' className='cursor-pointer'>
              Email address
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type='email'
              id='email'
              placeholder='hello@example.com'
              className='eq w-full rounded-xl border border-gray bg-transparent  px-5 py-3 outline-none focus:border-blue'
            />
          </div>

          <div className='flex flex-col items-start gap-1.5'>
            <label htmlFor='password' className='cursor-pointer'>
              Password
            </label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type='password'
              id='password'
              placeholder='Write your password'
              className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none  focus:border-blue'
            />
          </div>

          <Button variant='secondary' type='submit' isLoading={loading}>
            Login
          </Button>

          <p>
            <span className='text-light/50'>Do not have an account?</span>{" "}
            <Link href='/sign-up' className='text-blue'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
