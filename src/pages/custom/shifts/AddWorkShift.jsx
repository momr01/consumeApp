import React from "react";
import { FormShift, Layout, WithRole } from "../../../components/custom";

const AddWorkShift = () => {
  return (
    <Layout section="Add Work Shifts" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Create new work shifts
          </h1>
          <p>Please complete each input to create a new work shift</p>
        </header>

        <div>
          <FormShift />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(AddWorkShift, "admin");
