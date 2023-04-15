import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./PostForm.module.css";
import LoginForm from "../LoginForm/LoginForm";
import { User } from "../SignupForm/SignupForm";
import apiClient from "../../services/api-client";

const postSchema = z.object({
  username: z.string(),
  price: z.number(),
  lastPurchase: z.date(),
  title: z.string(),
  verifiedBy: z.number(),
  description: z.string(),
  image: z
    .any()
    .refine((files) => files?.length === 1, {
      message: "Image is required",
      path: ["image"],
    })
    .refine((files) => files?.[0].size <= 5000000, {
      message: "Max file size is 5MB.",
      path: ["image"],
    })
    .refine(
      (files) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          files?.[0].type
        ),
      {
        message: "File format must be one of .jpeg, .jpg, .png and .webp.",
        path: ["image"],
      }
    ),
  city: z.string(),
});

export type Post = z.infer<typeof postSchema>;

interface PostFormProps {
  user: User | null;
}

const PostForm = ({ user }: PostFormProps) => {
  const onSubmit: SubmitHandler<Post> = (postData) => {
    const formData = new FormData();
    for (const key in postData) {
      if (key === "image") {
        formData.append(key, postData[key][0]);
      } else {
        formData.append(key, postData[key as keyof Post]);
      }
    }
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);
    console.log(formDataObject);

    apiClient.post("/post/submit", formData).then((res) => console.log(res));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Post>({ resolver: zodResolver(postSchema) });

  return (
    <div className={styles["post-form"]}>
      <a className={styles.close} href="/">
        ×
      </a>
      <div className={styles.header}>
        <p className={styles["header-line"]}>Contribute the latest news for</p>
        <p className={styles["header-line-logo"]}>sNeaKeR</p>
        <p className={styles["header-line-logo"]}>PapAraZzi</p>
      </div>
      <form className={styles["form-group"]} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles["input-item"]}
          id="title"
          required
          placeholder="Title"
          {...register("title")}
        />
        <input
          className={styles["input-item"]}
          id="price"
          type="number"
          required
          placeholder="Price"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && <p>{errors.price.message}</p>}
        <select
          className={styles["input-item"]}
          id="city"
          {...register("city")}
        >
          <option className={styles["option-item"]} value="Melbourne">
            Melbourne
          </option>
          <option className={styles["option-item"]} value="Sydney">
            Sydney
          </option>
          <option className={styles["option-item"]} value="Brisbane">
            Brisbane
          </option>
          <option className={styles["option-item"]} value="Other_city">
            Other City
          </option>
        </select>
        <textarea
          className={`${styles["input-item"]} ${styles["description"]}`}
          id="description"
          required
          placeholder="Description"
          {...register("description")}
        />
        <input
          className={errors.image ? styles.invalid : ""}
          type="file"
          required
          {...register("image")}
        />
        <button
          className={styles.submit}
          onClick={() => {
            console.log(user);
            setValue("username", user ? user.username : "");
            setValue("lastPurchase", new Date());
            setValue("verifiedBy", 0);
          }}
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
