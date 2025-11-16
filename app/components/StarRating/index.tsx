import React from "react";
import SvgStar from "./svgStar";
import { starRatingDefaultTotalAmount, starRatingDefaultCss } from "@/config/components/starRating";

interface StarRatingProps {
  value: number;
  totalStars?: number;
  className?: string;
  onChange: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value = 0, totalStars, onChange, className }) => {
  return (
    <div className={className || starRatingDefaultCss}>
      {Array.from({ length: totalStars || starRatingDefaultTotalAmount }, (_, index) => (
        <div key={index} onClick={() => onChange(index + 1)} style={{ cursor: 'pointer' }}>
          <SvgStar  active={index < value} />
        </div>
      ))}
    </div>
  );
}

export default StarRating;