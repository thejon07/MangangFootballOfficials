import React from "react";
import { useForm } from "react-hook-form";
import { handleblogPostrequest } from "../utils/handleaxios";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("content", data.content);
      formdata.append("tag", data.tag); // Add tag to form data
      formdata.append("file", data.file[0]);

      const postblog = await handleblogPostrequest(formdata);
      console.log("Post data successfully", postblog);
      if (postblog) {
        window.location.href = "/dashboard";
      }
      return postblog;
    } catch (error) {
      console.error(error);
    }
    reset(); // Reset the form after submission
  };

  return (
    <div className="max-w-lg mx-auto mt-4 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Create Post</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className={`mt-1 block w-full p-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Select Tag */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select a tag</label>
          <select
            {...register("tag", { required: "Tag is required" })} // Register the select input
            className={`mt-1 block w-full p-2 border ${
              errors.tag ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          >
            <option value="lifestyle">Lifestyle</option>
            <option value="technology">Technology</option>
            <option value="sports">Sports</option>
            <option value="travel">Travel</option>
            <option value="economy">Economy</option>
          </select>
          {errors.tag && (
            <p className="text-red-500 text-sm">{errors.tag.message}</p>
          )}
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            minLength={20}
            maxLength={100}
            {...register("content", { required: "Content is required" })}
            className={`mt-1 block w-full p-2 border ${
              errors.content ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Write your content here"
            rows="4"
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload File</label>
          <input
            type="file"
            {...register("file", { required: "File is required" })}
            className={`mt-1 block w-full text-gray-700 border ${
              errors.file ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
