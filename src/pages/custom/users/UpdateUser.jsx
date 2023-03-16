import { FormUser, Layout, WithRole } from "../../../components/custom";

const UpdateUser = () => {
  return (
    <Layout section="Update User" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Update user
          </h1>
          <p>Please complete each input to update an user</p>
        </header>

        <div>
          <FormUser />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(UpdateUser, "admin");
