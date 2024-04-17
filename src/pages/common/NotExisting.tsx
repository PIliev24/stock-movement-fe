import { useTranslation } from "react-i18next";

const NotExisting = () => {
  const { t } = useTranslation();

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-layout-first">
      <p className="bg-purple-400 px-2 py-2 font-medium text-sm rounded rotate-12 absolute">
        {t("page_not_found")}
      </p>
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
    </main>
  );
};

export default NotExisting;
