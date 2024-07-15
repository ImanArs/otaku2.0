import MainPage from "@/pages/MainPage";
import { Loading } from "@/shared/ui/loading";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MainPage />
      <ToastContainer />
    </Suspense>
  );
}
