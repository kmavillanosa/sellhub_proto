import { AppLayout, AppPage } from "@shared/components/layout";
import { useServices } from "@shared/hooks/useServices";
import { Service } from "@shared/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

const ServiceDetail: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  const [currentService, setCurrentService] = useState<Service | undefined>();

  const services = useServices();

  useEffect(() => {
    const tempService = services.find((x) => x.id == Number(id));
    setCurrentService(tempService);
  }, []);

  return (
    <AppPage title={`${id} | Partner details`}>
      <AppLayout>
        <Container className="mt-5">
          <Row>
            <Col>
              <img className="w-25" src={currentService?.imgSrc} />
              <h1 className="mt-3">{currentService?.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tempore voluptates sapiente harum. Officiis sapiente
                beatae nihil aspernatur voluptatem magni perferendis, nobis
                itaque quasi cum eius minus corrupti, laudantium quidem.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/services">
                <Button variant="dark-outline" className="m-1">
                  Go Back
                </Button>
              </Link>
              <Button className="m-1">Place Request</Button>
            </Col>
          </Row>
        </Container>
      </AppLayout>
    </AppPage>
  );
};

export default ServiceDetail;
