import React from 'react';

// context
import { ReviewListProvider } from '@/context/ReviewContext';

// components
import ReviewTable from '@/components/ReviewTable';

const LandingPage: React.FC = () => {
  return (
    <ReviewListProvider>
      <ReviewTable />
    </ReviewListProvider>
  );
}

export default LandingPage;
