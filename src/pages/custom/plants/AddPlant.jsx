import { t } from "i18next";
import { FormPlant, Layout, WithRole } from "../../../components/custom";

const AddPlant = () => {
  return (
    <Layout section={t("plants.form.addPlant")} obs=  {t('sidebar.management')}>
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            {t("plants.form.createTitle")}
          </h1>
          <p> {t("plants.form.createDescription")}</p>
        </header>

        <div>
          <FormPlant />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(AddPlant, "admin");
