import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import Jobs from "../Jobs";
import Sidebar from "../../sidebar/Sidebar";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  //loading effect
  const [isLoading, setIsLoading] = useState(true);
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // loading data
  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // for banner component
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //-----------------radio based filtering-------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // --------------------button based filtering patterns -------
  // like month  year hour
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };
  //function for the next page

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for the previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // filterring Input filteredItems
    if (query) {
      filteredJobs = filteredItems;
    }
    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }
    // slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className=" ">
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* here we send a props query   and handle change function  */}

      <div className="bg-[#131642]  md:grid grid-cols-4 gap-6 lg:px-5 px-4 py-12">
        {/* left side  */}
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* this is for job card  */}
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-primary text-xl font-bold mb-2">
                {result.length} Jobs
              </h3>
              <p>No Data Found</p>
            </>
          )}
          {/* pagination bar here */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side  */}
        <div className="bg-white p-4 rounded ">Right</div>
      </div>
    </div>
  );
};

export default Home;
