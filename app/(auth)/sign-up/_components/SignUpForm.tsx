"use client";

import Button from "@/components/ui/Button";
import { signUpPost } from "@/lib/signUpPost";
import { login } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
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

      const data = await signUpPost("/api/auth/register", formData);

      if (data) {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        dispatch(login(data));
        toast.success("Register successfull");
        router.push("/");
      } else {
        setLoading(false);
        toast.error(
          "Please paste a photo URL from pexels/unsplash or cloudinary"
        );
      }
    },
    [formData, router, dispatch]
  );

  return (
    <div className="w-2/5">
      <div className='flex flex-col gap-10 w-full'>
      <div className='flex flex-col gap-1.5'>
        <h2 className='text-3xl '>Create an account</h2>
        <p className='text-light/50'>Please provide your details to register</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='name' className='cursor-pointer'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            id='name'
            placeholder='name'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
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
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
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
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <Button variant='secondary' type='submit' isLoading={loading}>
          Register
        </Button>

        <p>
          <span className='text-light/50'>Already have an account?</span>{" "}
          <Link href='/sign-in' className='text-blue'>
            Login
          </Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default SignUpForm;
