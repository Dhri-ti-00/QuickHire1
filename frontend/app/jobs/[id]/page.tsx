"use client";

import Navbar from "../../../components/Navbar";
import { useParams } from "next/navigation";
import Link from "next/link";

const JobDetailPage = () => {
  const params = useParams();
  const jobId = params.id;

  // Dummy data for now
  const job = {
    id: jobId,
    title: "Frontend Developer",
    company: "Orbit Tech",
    location: "Sylhet",
    description:
      "Build modern UI using React.js, Tailwind CSS, integrate with backend APIs, and collaborate with team.",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <Link href="/jobs" className="text-blue-600 mb-4 inline-block">
          ← Back to Listings
        </Link>
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">
          {job.company} - {job.location}
        </p>
        <p className="bg-white p-4 rounded shadow">{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetailPage;