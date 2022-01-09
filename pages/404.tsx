import { AppLayout, AppPage } from "@shared/components/layout";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function FourOhFour() {
  return (
    <AppPage title="Page Unavailable">
      <AppLayout>
        <Container fluid>
          <img className="p-5" src="/assets/not_found.png" />
          <h1>404 - Page Not Found</h1>
          <small>Page appears to be unavailable or on maintainance</small>
          <Link href="/">
            <Button className="m-2">Go back to landing page</Button>
          </Link>
        </Container>
      </AppLayout>
    </AppPage>
  );
}
