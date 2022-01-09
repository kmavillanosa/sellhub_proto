import { useServices } from "@shared/hooks/useServices";
import { Service } from "@shared/types";
import { NextPage } from "next";
import Link from "next/link";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import AppLayout from "../../shared/components/layout/AppLayout";
import AppPage from "../../shared/components/layout/AppPage";

const ServicesPage: NextPage = () => {
  const services = useServices();

  return (
    <AppPage title="Mobile services">
      <AppLayout>
        <Container className="mt-3">
          <h1>Partners</h1>
          <Row xs={1} md={2} lg={4} className="g-4">
            {services.map((item, idx) => {
              return (
                <Col key={idx}>
                  <Link href={`/services/${item.id}`}>
                    <Card border="dark" className="m-1">
                      <Card.Img className="p-5" src={item.imgSrc} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {item.description}
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </AppLayout>
    </AppPage>
  );
};

export default ServicesPage;
