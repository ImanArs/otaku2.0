"use client";
import Error404 from "@/components/Error/Error404";
import { Loading } from "@/shared/ui/loading";
import { Suspense } from "react";

function NotFoundPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Error404 />
    </Suspense>
  )
}

export default NotFoundPage;
