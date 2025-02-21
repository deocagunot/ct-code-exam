import React from "react";
import { Job } from "../types/types";

interface JobCardProps {
  job: Job;
  addFilter: (filter: string) => void;
}
const JobCard: React.FC<JobCardProps> = ({ job, addFilter }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l-4 ${
        job.featured ? "border-primary" : "border-transparent"
      } relative`}
    >
      <img
        src={job.logo}
        alt={job.company}
        className="w-16 h-16 object-contain absolute sm:static top-[-33px] sm:top-0"
      />
      <div className="flex-1 mt-5 sm:mt-5">
        <div className="flex items-center gap-2 font-bold">
          <span className="me-2">{job.company}</span>
          {job.new && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full uppercase">
              New!
            </span>
          )}
          {job.featured && (
            <span className="bg-grayish-cyan-400 text-white text-xs px-2 py-1 rounded-full uppercase">
              Featured
            </span>
          )}
        </div>
        <h2
          className="font-bold text-lg text-gray-900 mt-1 cursor-pointer hover:text-primary"
          onClick={() => addFilter(job.position)}
        >
          {job.position}
        </h2>
        <p className="text-grayish-cyan-300 text-sm mt-1">
          {job.postedAt} • {job.contract} • {job.location}
        </p>
      </div>
      <hr className="block w-full sm:hidden border-t-grayish-cyan-300" />
      <div className="flex gap-2 mt-0 sm:mt-3 flex-wrap">
        {[job.role, job.level, ...job.languages, ...job.tools].map(
          (tag, index) => (
            <span
              key={index}
              className="bg-grayish-cyan-100 hover:bg-primary hover:text-grayish-cyan-100 px-3 py-1 rounded-sm text-sm font-semibold cursor-pointer"
              onClick={() => addFilter(tag)}
            >
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  );
};
export default JobCard;
