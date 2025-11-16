import React from "react";

interface SvgStarProps {
  active: boolean;
}

const StarRating: React.FC<SvgStarProps> = ({ active }) => {
  // Values here are hardcoded and will not be able to be changed from external configuration
  // since this is a SVG component specifically for the star icon.
  // SVG path for a star icon
  return (
      <svg className={active ? "w-5 h-5 text-yellow-400" : "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
      </svg>
  );
}

export default StarRating;