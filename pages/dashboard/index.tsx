import type { NextPage } from "next";

import { AppPage, AppLayout } from "@shared/components/layout";

const Dashboard: NextPage = () => {
  return (
    <AppPage title="Dashboard">
      <AppLayout>
        <div>This is dashboard</div>
      </AppLayout>
    </AppPage>
  );
};

export default Dashboard;
