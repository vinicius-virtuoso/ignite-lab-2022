import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 max-w-[1440px] mx-auto w-full">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex flex-1"></div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
