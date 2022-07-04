import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { MenuContext } from "../Context/menu";
import { Lesson } from "./Lessson";

const GET_LESSON_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;

interface Response {
  lessons: {
    id: string;
    title: string;
    slug: string;
    lessonType: "live" | "class";
    availableAt: string;
  }[];
}

export function Sidebar() {
  const { data } = useQuery<Response>(GET_LESSON_QUERY);
  const { isOpen } = useContext(MenuContext);

  return (
    <aside
      className={
        isOpen
          ? `absolute top-[75px] right-0 lg:static w-[95%] transition-all md:w-[348px] bg-gray-700 p-6 border-l border-gray-600 h-[calc(100vh-75px)] overflow-hidden`
          : `absolute bg-gray-700 opacity-0 right-0 transition-all w-0 h-[calc(100vh-75px)] overflow-hidden p-0 m-0 lg:opacity-100 md:w-[348px] lg:static lg:p-6 lg:overflow-auto whitespace-nowrap`
      }
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className={`flex flex-col gap-8 whitespace-normal`}>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            type={lesson.lessonType}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
}
