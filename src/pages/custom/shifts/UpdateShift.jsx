import { FormShift, Layout, WithRole } from "../../../components/custom";

const UpdateShift = () => {
  return (
    <Layout section="Update Shift" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Update shift
          </h1>
          <p>Please complete each input to update the shift</p>
        </header>

        <div>
          <FormShift />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(UpdateShift, "admin");
