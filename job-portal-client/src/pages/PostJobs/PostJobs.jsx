import { useForm } from "react-hook-form";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";

const PostJobs = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "ExpressJS", label: "ExpressJS" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "DBMS", label: "DBMS" },
  ];

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="max-w-screen-2xl cona tainer max-auto xl:px-24 px-4 h-[100vh] mt-24">
      {/* form  */}
      <div className="bg-gray-600 py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row  */}
          <div className="create-job-flex ">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="EX:Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* second row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimun Salary</label>
              <input
                type="text"
                placeholder="20K"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="120K"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 3rd row     */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Delhi"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2022-10-05"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Choose your experience</option>
                <option value="NoExperince">NoExperince</option>
                <option value="Internship">Internship</option>
                <option value="Workremotly">Work Remotly</option>
              </select>
            </div>
          </div>
          {/* 5th row  */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4 "
            />
          </div>
          {/* 6th row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste Your company logo url: htttps://logo.com/img1"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Select your job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/* 7th row  */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
            defaultValue={'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa'}
              {...register("description")}
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              placeholder="Job description"
            />
          </div>

          {/* last row  */}
          <div className="">
          <label className="block mb-2 text-lg">Job Posted by</label>
          <input
                type="email"
                placeholder="Your Email"
                {...register("postedby")}
                className="create-job-input"
              />

          </div>

          <input
            type="submit"
            className="block mt-12  bg-orange text-white font-semibold px-8  py-2 cursor-pointer rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
