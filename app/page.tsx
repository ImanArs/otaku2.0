import { AuthProvider } from "@/context/AuthContext";
import MainPage from "@/pages/MainPage";
import { Loading } from "@/shared/ui/loading";
import { Suspense, useEffect } from "react";

export default function Home() {

  return (
    <Suspense fallback={<Loading />}>
      {/* <AuthProvider> */}
        <MainPage />
      {/* </AuthProvider> */}
    </Suspense>
  );
}
