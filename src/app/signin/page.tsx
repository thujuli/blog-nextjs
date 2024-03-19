"use client";
import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import { setSuccessLoginAction } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { BASE_URL } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IFormData {
  email: string;
  password: string;
}

const initialFormData: IFormData = {
  email: "",
  password: "",
};

const LoginPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  useEffect(() => {
    const token = localStorage.getItem("success-login");
    if (token) {
      router.replace("/");
    }
  }, []);

  const onHandleLogin: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      if (Object.values(formData).includes("")) {
        throw Error("All field is required");
      }

      const { email, password } = formData;
      const response = await axios.get<any[]>(
        BASE_URL + `/user?email=${email}&password=${password}`
      );

      if (response.data.length === 0) {
        throw new Error("Wrong email or password!");
      }

      alert(`Login successfully, Welcome back ${response.data[0].username}`);
      dispatch(setSuccessLoginAction(response.data[0]));
      router.replace("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex h-fit w-fit shadow-xl rounded-md overflow-hidden">
        <div className="flex items-center bg-black p-4 ">
          <Image src="/images/logo.png" alt="Logo" width={360} height={50} />
        </div>
        <form className="flex flex-col gap-2 w-96 px-4 py-12">
          <h1 className="w-fit mb-2 mx-auto text-lg font-bold text-center border-b-2 border-black">
            Login Page
          </h1>
          <InputForm
            id="email"
            label="Email:"
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <InputForm
            id="password"
            label="Password:"
            type="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <div className="mx-auto">
            <Button
              bgColor="bg-black"
              textColor="text-white"
              type="button"
              onClick={onHandleLogin}
            >
              Login
            </Button>
          </div>
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-bold underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
