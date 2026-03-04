import Navbar from "../../components/Navbar";
import Link from "next/link";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Orbit Tech", location: "Sylhet" },
  { id: 2, title: "Backend Developer", company: "Cloudly", location: "Dhaka" },
  { id: 3, title: "Fullstack Developer", company: "Qtec", location: "Remote" },
];

const JobListingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
        <ul className="space-y-3">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <Link href={`/jobs/${job.id}`}>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.company} - {job.location}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListingPage;