import React from "react";
import { Badge } from "./ui/badge";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Title</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                Positions
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                India
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
                LPA
              </Badge>
            </div>
          </div>
          <button
          disabled={isApplied}
          style={{ backgroundColor: "#F3F4F6", color: "#8E44AD" }}
          onClick={isApplied ? "Already Applied" : "Apply Now"}
        >
          {" "}
          {isApplied ? "Already Applied" : "Apply Now"}
        </button>
        </div>
        <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
        <div className='my-4'>
                <h2 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h2>
                <h2 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Delhi</span></h2>
                <h2 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Get Started here</span></h2>
                <h2 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h2>
                <h2 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>30 LPA</span></h2>
                <h2 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>200</span></h2>
                <h2 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>17-03-25</span></h2>
            </div>
      </div>
    </div>
  );
};

export default JobDescription;
