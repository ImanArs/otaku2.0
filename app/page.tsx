import MainPage from "@/pages/MainPage";
import { Loading } from "@/shared/ui/loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MainPage />
    </Suspense>
  );
}
