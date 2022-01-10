import { AppLayout, AppPage } from "@shared/components/layout";
import Link from "next/link";
import { Button, Row, Col, Container, Card } from "react-bootstrap";

export default function FourOhFour() {
  return (
    <AppPage title="Page Unavailable">
      <AppLayout>
        <div>Page not found</div>
      </AppLayout>
    </AppPage>
  );
}
