import { FormUser, Layout, WithRole } from "../../../components/custom";

const AddUser = () => {
  return (
    <Layout section="Add User" obs="Management">
      <section>
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
            Create new user
          </h1>
          <p>Please complete each input to create a new user</p>
        </header>

        <div>
          <FormUser />
        </div>
      </section>
    </Layout>
  );
};

export default WithRole(AddUser, "admin");
