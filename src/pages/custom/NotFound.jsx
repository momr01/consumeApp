import { t } from "i18next";
import { Link } from "react-router-dom";
import routes from "../../helpers/routes";
import NotFoundImage from "../../images/404-illustration.svg";

const NotFound = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="max-w-2xl m-auto mt-16">
              <div className="text-center px-4">
                <div className="inline-flex mb-8">
                  <img
                    src={NotFoundImage}
                    width="176"
                    height="176"
                    alt="404 illustration"
                  />
                </div>
                <div className="mb-6">{t("notFound.description")}</div>
                <Link
                  to={routes.index}
                  className="btn bg-primary hover:bg-indigo-600 text-white"
                >
                  {t("notFound.btn")}
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
