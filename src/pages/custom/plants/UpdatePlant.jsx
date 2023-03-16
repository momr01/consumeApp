import { FormPlant, Layout, WithRole } from "../../../components/custom";

const UpdatePlant = () => {
  return (
    <Layout section="Update Plant" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Update plant
          </h1>
          <p>Please complete each input to update a plant</p>
        </header>

        <div>
          <FormPlant />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(UpdatePlant, "admin");
