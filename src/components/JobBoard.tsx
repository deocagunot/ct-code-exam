import React, { useCallback, useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";
import Header from "./Header";
import useFetchJobs from "../hooks/useFetchJobs";

const JobBoard: React.FC = () => {
  const { jobs, loading } = useFetchJobs();
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const filterJobs = useCallback(() => {
    if (filters.length === 0) {
      setFilteredJobs(jobs);
      return;
    }
    setFilteredJobs(
      jobs.filter((job) =>
        filters.every((filter) =>
          [
            job.position,
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
          ].includes(filter)
        )
      )
    );
  }, [jobs, filters]);

  useEffect(() => {
    filterJobs();
  }, [filters, filterJobs]);

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="bg-grayish-cyan-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-6">
        <JobFilter
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
        {loading ? (
          <div className="text-center text-gray-700">Loading jobs...</div>
        ) : (
          <div className="flex flex-col gap-12 mt-12 sm:gap-6 sm:mt-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} addFilter={addFilter} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
