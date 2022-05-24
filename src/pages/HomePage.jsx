import { Banner } from "../layouts/banner";
import { Container } from "../layouts/components/container";
import { Row } from "../layouts/components/row";
import { Wrapper } from "../layouts/components/wrapper";
import { FlashSale } from "../layouts/flashsale";
import HomeProducts from "../layouts/home/HomeProducts";

const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <Wrapper>
          <Row>
            <Banner />
          </Row>
          <Row>
            <FlashSale />
          </Row>
          <Row>
            <HomeProducts />
          </Row>
        </Wrapper>
      </Container>
    </div>
  );
};

export default HomePage;
