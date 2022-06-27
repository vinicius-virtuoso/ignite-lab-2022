import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { NavLink } from "react-router-dom";

interface PROPS {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: PROPS) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE '•' d MMMM '•' HH'h'mm",
    { locale: ptBR }
  );

  return (
    <NavLink
      to={`/event/lessons/${props.slug}`}
      className={({ isActive }) => (isActive ? "group active_link" : "group")}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className="sub-div rounded border border-gray-500 p-4 mt-2 shadow-lg group-hover:border-blue-300 transition-colors">
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span className="flex gap-1 text-blue-300 text-sm font-medium items-center">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex gap-1 text-orange-500 text-sm font-medium items-center">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="flex item-center py-[0.25rem] px-2 text-xs border border-blue-300 rounded text-white font-bold">
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </NavLink>
  );
}
