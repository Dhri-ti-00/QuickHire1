import Navbar from "../components/Navbar";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center h-[90vh]">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to QuickHire 🚀
        </h1>
      </div>
    </div>
  );
};

export default Home;