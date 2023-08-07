"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./ui/button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { postReview } from "@/actions/post-review";
import { useRouter } from "next/navigation";

const defaultValues = { firstName: "", lastName: "", message: "" };

interface Props {
  productId: string;
  url: string;
}

function ReviewForm({ productId, url }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      const review = await postReview(url, productId, {
        firstName: data.firstName,
        lastName: data.lastName,
        message: data.message,
      });

      toast.success("Success! Thanks for your message.");
      router.refresh();
    } catch (e) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          First name
        </label>
        <input
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          disabled={isLoading}
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Last name
        </label>
        <input
          type="text"
          disabled={isLoading}
          {...register("lastName", { required: true })}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Message
        </label>
        <textarea
          {...register("message", { required: true })}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </Button>
    </form>
  );
}

export default ReviewForm;
