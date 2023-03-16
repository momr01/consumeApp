import { t } from "i18next";
import React from "react";
import { FormSensor, Layout } from "../../../components/custom";

const AddSensor = () => {
  return (
    <Layout section="Add Sensor" obs={t("sidebar.management")}>
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Create new sensor
          </h1>
          <p>Please complete each input to create a new sensor</p>
        </header>

        <div>
          <FormSensor />
        </div>
      </section>
    </Layout>
  );
};

export default AddSensor;
