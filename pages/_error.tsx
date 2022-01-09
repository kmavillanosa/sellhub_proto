import { AppLayout, AppPage } from "@shared/components/layout";

interface ErrorProps {
  statusCode: any;
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <AppPage title="Page has a problem">
      <AppLayout>
        <div>This page has an error</div>
      </AppLayout>
    </AppPage>
  );
};

export default Error;
