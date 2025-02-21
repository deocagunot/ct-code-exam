interface JobFilterProps {
  filters: string[];
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

const JobFilter: React.FC<JobFilterProps> = ({
  filters,
  removeFilter,
  clearFilters,
}) => {
  if (filters.length === 0) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg py-4 px-6 flex items-center justify-between relative mt-[-55px]">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="bg-grayish-cyan-200 pl-2 rounded-sm text-sm font-semibold flex items-center"
          >
            {filter}
            <button
              className="ml-2 bg-primary text-grayish-cyan-100 text-[12px] px-2 py-1 rounded-e-sm font-bold hover:bg-grayish-cyan-400 cursor-pointer"
              onClick={() => removeFilter(filter)}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
      <button
        className="text-grayish-cyan-400 font-bold hover:underline hover:text-primary"
        onClick={clearFilters}
      >
        Clear
      </button>
    </div>
  );
};

export default JobFilter;
