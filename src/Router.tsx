import { gql, useQuery } from "@apollo/client";
import { Navigate, Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

const GET_LESSON_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      slug
    }
  }
`;

interface Response {
  lessons: {
    slug: string;
  }[];
}

export function Router() {
  const { data } = useQuery<Response>(GET_LESSON_QUERY);

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lessons/:slug" element={<Event />} />
      {data && (
        <>
          <Route
            path="/event/"
            element={
              <Navigate to={`/event/lessons/${data.lessons[0].slug}`} replace />
            }
          >
            <Route
              path="/event/*"
              element={
                <Navigate
                  to={`/event/lessons/${data.lessons[0].slug}`}
                  replace
                />
              }
            />
          </Route>
        </>
      )}
    </Routes>
  );
}
