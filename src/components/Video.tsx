import { DiscordLogo, FileArrowDown, Image } from "phosphor-react";
import { Button } from "./Button";
import { External } from "./External";
import { gql, useQuery } from "@apollo/client";
import { Logo } from "./Logo";

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      description
      title
      teacher {
        avatarURL
        bio
        name
      }
      challenge {
        url
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    videoId: string;
    description: string;
    title: string;
    teacher: {
      name: string;
      avatarURL: string;
      bio: string;
    };
    challenge: {
      url: string | null;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data) {
    return (
      <div className="flex-1 h-[calc(100vh-75px)]">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 h-[calc(100vh-75px)] overflow-auto">
      <div className="bg-gray-600 flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[70vh] aspect-video">
          <iframe
            src={`//www.youtube.com/embed/${data.lesson.videoId}?autoplay=1`}
            frameBorder="0"
            title={data.lesson.videoId}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        </div>
      </div>

      <div className="p-8 pb-0 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt={data.lesson.teacher.name}
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              href="https://discord-service.rocketseat.dev/signin/ignite-lab"
              variant="primary"
            >
              <DiscordLogo size={24} />
              Comunidade no discord
            </Button>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          {data.lesson?.challenge?.url && (
            <External
              href={data.lesson.challenge.url}
              title="Material complementar"
              icon={<FileArrowDown size={40} />}
            >
              Acesse o material complementar para acelerar o seu desenvolvimento
            </External>
          )}
          <External
            href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR"
            title="Wallpapers exclusivos"
            icon={<Image size={40} />}
          >
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina
          </External>
        </div>
        <footer className=" flex items-center gap-4 mt-20 border-t">
          <div className=" flex items-center gap-4 py-5">
            <span className="text-sm">Desenvolvido no evento</span>
            <Logo w="120" h="37" />
          </div>
        </footer>
      </div>
    </div>
  );
}
