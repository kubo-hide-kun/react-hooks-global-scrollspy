import { FC, useMemo } from "react";
import {
  GlobalScrollSpyProvider,
  useGlobalScrollSpyOf,
} from "react-hooks-global-scrollspy";
import { Section } from "./components";
import "./App.css";

const App = () => {
  const sampleArticle = {
    title: "ScrollSpy",
    sections: [
      {
        title: "Sctions1",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions2",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions3",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions4",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions5",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions6",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions7",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions8",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
      {
        title: "Sctions9",
        content:
          "Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.Dolore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.olore iste eaque molestias. Eius iure ut eaque accusantium. Voluptas repellendus nobis. Saepe nam accusantium magni veniam qui enim mollitia excepturi sapiente.",
      },
    ],
  };

  return (
    <GlobalScrollSpyProvider>
      <div className="w-full max-w-8xl mx-auto">
        <div className="lg:flex lg:justify-center">
          {/* 記事のコンテンツ */}
          <div className="prose min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
              {sampleArticle.title}
            </h1>
            {sampleArticle.sections.map(({ title, content }) => {
              return <Section key={title} title={title} content={content} />;
            })}
          </div>

          {/* ナビゲーション */}
          <div className="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
            <div className="flex flex-col justify-between overflow-y-auto sticky pt-10 pb-6 top-0">
              <div className="mb-8">
                <ul className="overflow-x-hidden text-gray-500 font-medium">
                  {sampleArticle.sections.map(({ title }) => {
                    return <NavItem key={title} label={title} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalScrollSpyProvider>
  );
};

export default App;

const NavItem: FC<{ label: string }> = ({ label }) => {
  const [isActive] = useGlobalScrollSpyOf(label);

  const { labelColor, bgColor } = useMemo(
    () => ({
      labelColor: isActive ? "text-indigo-700" : "text-gray-500",
      bgColor: isActive ? "bg-indigo-50" : "opacity-0",
    }),
    [isActive]
  );

  return (
    <div
      className={`px-3 py-2 transition-colors duration-200 relative block ${labelColor}`}
    >
      <span className={`rounded-md absolute inset-0 ${bgColor}`}></span>
      <span className="relative">{label}</span>
    </div>
  );
};
