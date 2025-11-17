import React, { createContext, useContext, useState, type ReactNode } from 'react';

// config
import { type ReviewProps } from '@/config/interfaces/reviewProps';

interface ReviewListType {
  value: ReviewProps[];
  setValue: React.Dispatch<React.SetStateAction<ReviewProps[]>>;
}

const ReviewList = createContext<ReviewListType | undefined>(undefined);

export const ReviewListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState([] as ReviewProps[]);

  return (
    <ReviewList.Provider value={{ value, setValue }}>
      {children}
    </ReviewList.Provider>
  );
};

export function useReviewListContext() {
  const context = useContext(ReviewList);
  if (context === undefined) {
    throw new Error('useReviewListContext must be used within a ReviewListProvider');
  }
  return context;
}
