import { FormEquipment, Layout, WithRole } from "../../../components/custom";

const UpdateEquipment = () => {
  return (
    <Layout section="Update Plant" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Update equipment
          </h1>
          <p>Please complete each input to update a equipment</p>
        </header>

        <div>
          <FormEquipment />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(UpdateEquipment, "admin");
