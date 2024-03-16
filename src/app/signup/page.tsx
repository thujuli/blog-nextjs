"use client";
import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import { BASE_URL } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const initialFormData: IFormData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "author",
};

const RegistrationPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const onHandleRegistration: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      if (Object.values(formData).includes("")) {
        throw new Error("Fill in all form");
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error("Password and Confirm Password not Match");
      }

      const response = await axios.get<any[]>(
        BASE_URL + `/user?email=${formData.email}`
      );
      if (response.data.length > 0) {
        throw new Error("Email has been registered!");
      }

      const { confirmPassword, ...rest } = formData;
      await axios.post(BASE_URL + "/user", rest);
      router.push("/login");
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
        <form className="flex flex-col gap-2 w-96 px-4 py-4">
          <h1 className="w-fit mb-2 mx-auto text-lg font-bold text-center border-b-2 border-black">
            Registration Page
          </h1>
          <InputForm
            id="username"
            label="Username:"
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
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
          <InputForm
            id="confirm-password"
            label="Confirm Password:"
            type="password"
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <div className="mx-auto">
            <Button
              bgColor="bg-black"
              textColor="text-white"
              type="button"
              onClick={onHandleRegistration}
            >
              Register
            </Button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link href="/signin" className="font-bold underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationPage;
