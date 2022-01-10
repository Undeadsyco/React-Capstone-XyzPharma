import { Card } from '../../Components';
import { HomeContainer, TitleContainer, InfoContainer } from './styles';

const Home = () => {
  return (
    <HomeContainer className="" rows='55% 45%' >
      <TitleContainer >
        <h1>Your Health, Our Care</h1>
      </TitleContainer>
      <InfoContainer justify='space-between'>
        <Card
          subject="Mission"
          heading="Our Mission"
          info="To be the lead pharmaceutical company of the country as a manufacturer of high quality affordable medicines"
        />
        <Card
          subject="Vision"
          heading="Our Vision"
          info="To add value to our society and act as a driven force of our humanity with then help of the highest level of innovation and technology"
        />
        <Card
          subject="Why Us?"
          heading="We Are Leading"
          info=" We are one of the leading pharmaceutical companies of the country dedicated solely for the people in need"
          link="/about"
        />
      </InfoContainer>
    </HomeContainer>
  );
}

export default Home;
