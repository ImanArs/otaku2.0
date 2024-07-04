'use client'
import NewsPage from "@/pages/NewsPage";
import { Loading } from "@/shared/ui/loading";
import React, { Suspense, useEffect, useState } from "react";

const News = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <Suspense fallback={<Loading />}>
      <NewsPage />
    </Suspense>
  )
};

export default News;
