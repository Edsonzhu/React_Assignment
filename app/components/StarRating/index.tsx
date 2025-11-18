import React from "react";
import SvgStar from "@/assets/StarIcon";
import { starRatingDefaultTotalAmount, starRatingDefaultCss } from "@/config/components/starRating";
import { generateId } from '@/utils';

interface StarRatingProps {
  label?: string;
  value: number | undefined;
  totalStars?: number;
  starWrapperclassName?: string;
  labelClass?: string;
  iconClassName?: string;
  errorMessage?: string;
  errorTextClass?: string;
  onChange?: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  label, value = 0, totalStars, onChange, starWrapperclassName,
  iconClassName, labelClass, errorMessage, errorTextClass
}) => {
  const id = generateId();
  
  return (
    <div>
      {
        label
        ? <label className={labelClass || starRatingDefaultCss.label} htmlFor={id} >{label}</label>
        : null
      }
      <div id={id} className={starWrapperclassName || starRatingDefaultCss.ratingWrapper}>
        {Array.from({ length: totalStars || starRatingDefaultTotalAmount }, (_, index) => (
          <div key={index} onClick={() => typeof onChange === 'function' && index + 1 !== value && onChange(index + 1)} className={iconClassName || starRatingDefaultCss.iconWrapper}>
            <SvgStar active={index < value} />
          </div>
        ))}
      </div>
      {!!errorMessage
      ? (
        <p className={errorTextClass || starRatingDefaultCss.errorText} >{errorMessage}</p>
      ) : null}
    </div>
  );
}

export default StarRating;