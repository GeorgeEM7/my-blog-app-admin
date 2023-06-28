import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LuPanelRightOpen, LuPanelRightClose } from "react-icons/lu/";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-14" : "w-56");

  return (
    <div className="flex">
      {/* nave section */}
      <div
        className={
          getNavWidth() +
          " h-screen bg-blue-100 sticky top-0 transition-width border-r-4 border-gray-700"
        }
      >
        <NavBar closed={closedNav} />

        <button
          className={
            closedNav
              ? "ml-10 absolute top-12 transition-all overflow-hidden"
              : "ml-52 absolute top-28 transition-all overflow-hidden"
          }
          onClick={toggleNav}
        >
          {closedNav ? (
            <LuPanelRightClose size={25} />
          ) : (
            <LuPanelRightOpen size={25} />
          )}
        </button>
        <SearchForm />
      </div>
      {/* content section */}
      <div className="flex-1 min-h-screen bg-blue-200">
        <div className="max-w-screen-md p-7 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post" element={<UpdatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
