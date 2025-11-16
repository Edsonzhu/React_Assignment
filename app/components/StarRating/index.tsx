import React from "react";
import SvgStar from "./svgStar";
import { starRatingDefaultTotalAmount, starRatingDefaultCss } from "@/config/components/starRating";

interface StarRatingProps {
  value: number;
  totalStars?: number;
  className?: string;
  iconClassName?: string;
  onChange: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value = 0, totalStars, onChange, className, iconClassName }) => {
  return (
    <div className={className || starRatingDefaultCss.ratingWrapper}>
      {Array.from({ length: totalStars || starRatingDefaultTotalAmount }, (_, index) => (
        <div key={index} onClick={() => index + 1 !== value && onChange(index + 1)} className={iconClassName || starRatingDefaultCss.iconWrapper}>
          <SvgStar  active={index < value} />
        </div>
      ))}
    </div>
  );
}

export default StarRating;