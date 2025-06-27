import Header from "@/components/Header";
import Search from "@/components/Search";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white p-8">
      <Header />
      <Search />
    </div>
  );
};

export default Home;
