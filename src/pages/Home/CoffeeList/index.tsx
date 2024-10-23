import { coffees } from '../../../../data.json';
import Card from '../../../components/Card';
import { CoffeeListContainer, Container, Title } from './styles';

export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

const CoffeeList = () => {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CoffeeListContainer>
        {coffees.map(coffee => <Card key={coffee.id} {...coffee} />)}
      </CoffeeListContainer>
    </Container>
  )
}

export default CoffeeList