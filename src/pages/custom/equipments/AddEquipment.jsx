import { FormEquipment, Layout, WithRole } from "../../../components/custom";

const AddEquipment = () => {
  return (
    <Layout section="Add Equipment" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Create new equipment
          </h1>
          <p>Please complete each input to create a new equipment</p>
        </header>

        <div>
          <FormEquipment />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(AddEquipment, "admin");
