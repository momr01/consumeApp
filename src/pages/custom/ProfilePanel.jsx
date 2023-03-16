import { Layout, Panel, Sidebar } from "../../components/custom";

const ProfilePanel = () => {
  return (
    <Layout section="Profile" obs="My Profile">
      <main>
        <div className="px-1 w-full max-w-9xl mx-auto">
          <div className="bg-white shadow-lg rounded-sm mb-8">
            <div className="flex flex-col md:flex-row md:-mr-px">
              <Sidebar />
              <Panel />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfilePanel;
