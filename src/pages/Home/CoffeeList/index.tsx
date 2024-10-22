import { coffees } from '../../../../data.json';

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

const CoffeeList = () => {
  return (
    <div>
      <h2>Nossos cafés</h2>
      {coffees.map((coffee: Coffee) => <h3>{coffee.title}</h3>)}
    </div>
  )
}

export default CoffeeList