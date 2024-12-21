import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-8">
      <div className="relative">
        <div className="w-20 h-20 border-fuchsia-600 border-4 rounded-lg" />
        <div
          className="w-20 h-20 border-fuchsia-950 border-t-4 animate-ping rounded-lg absolute left-0 top-0"
          style={{ animationDuration: '1s' }}
        />
      </div>
      <div className="relative">
        <div className="w-12 h-12 border-fuchsia-600 border-4 rounded-lg" />
        <div
          className="w-12 h-12 border-fuchsia-600 border-t-4 animate-ping rounded-lg absolute left-0 top-0"
          style={{ animationDuration: '1.2s' }}
        />
      </div>
      <div className="relative">
        <div className="w-8 h-8 border-fuchsia-600 border-4 rounded-lg" />
        <div
          className="w-8 h-8 border-fuchsia-600 border-t-4 animate-ping rounded-lg absolute left-0 top-0"
          style={{ animationDuration: '1.5s' }}
        />
      </div>
    </div>
  );
};

export default Loader;
