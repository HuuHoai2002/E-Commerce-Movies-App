import { Banner } from "../layouts/banner";
import { Container } from "../layouts/components/container";
import { Wrapper } from "../layouts/components/wrapper";
import { FlashSale } from "../layouts/flashsale";

const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <Wrapper>
          <Banner />
          <FlashSale />
        </Wrapper>
      </Container>
    </div>
  );
};

export default HomePage;
