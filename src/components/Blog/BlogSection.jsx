import React from 'react';
import BlogDetails from './BlogDetails';
import Sidebar from './Sidebar';

function BlogSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start mt-8 lg:mt-16 px-4 gap-8">
      {/* Sidebar Section */}
      <div className="order-1 lg:order-2 w-full lg:w-1/3">
        <Sidebar />
      </div>

      {/* Blog Details Section */}
      <div className="order-2 lg:order-1 flex-1 w-full lg:ml-14">
        <BlogDetails />
      </div>
    </div>
  );
}

export default BlogSection;
