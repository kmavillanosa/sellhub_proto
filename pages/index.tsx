import AppPage from "@shared/components/layout/AppPage";
import { useOfferedServices } from "@shared/hooks/useServices";
import type { NextPage } from "next";
import Link from "next/link";
import {
  ToggleButton,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  ListGroup,
  CardGroup,
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Landing: NextPage = () => {
  const offeredServices = useOfferedServices();

  return (
    <AppPage title="Your maketplace for every needs">
      <div className={styles.container}>
        <Container>
          <Row>
            <Col>
              <Container className="mt-5">
                <Row>
                  <Col>
                    <div className="mt-5">
                      <h1>Pinoy Market Hub</h1>
                      <p>The marketplace for your every need.</p>
                      <Link href="/dashboard" passHref>
                        <Button className="m-1" size="lg">
                          See More
                        </Button>
                      </Link>
                      <Link href="/dashboard" passHref>
                        <Button
                          variant="outline-success"
                          className="m-1"
                          size="lg"
                        >
                          Sign in via google
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <ListGroup>
                      {offeredServices.map((item, idx) => {
                        return (
                          <Link href={item.link} key={idx}>
                            <ListGroup.Item action>
                              <h3>
                                <strong>{item.name}</strong>
                              </h3>
                              <i>{item.description}</i>
                            </ListGroup.Item>
                          </Link>
                        );
                      })}
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md="12" xl="6" xs="12">
              <Carousel variant="dark" interval={1500}>
                {offeredServices.map((item, idx) => {
                  return (
                    <Carousel.Item>
                      <img className="d-block w-100" src={item.imgSrc} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </AppPage>
  );
};

export default Landing;
