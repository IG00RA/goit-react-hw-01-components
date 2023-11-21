import { Data } from '../../types/dataBaseTypes';
import { randomColor } from '../GlobalStyle';
import { StatItem } from '../StatItem/StatItem';
import { List, Section, Tittle, Item } from './Statistics.styled';

interface StatisticsProps {
  items: Data[];
  title: string;
}

export const Statistics: React.FC<StatisticsProps> = ({ items, title }) => {
  return (
    <Section>
      {title && <Tittle>{title}</Tittle>}
      <List>
        {items.map(item => (
          <Item
            style={{
              backgroundColor: randomColor(),
            }}
            key={item.id}
          >
            <StatItem item={item} />
          </Item>
        ))}
      </List>
    </Section>
  );
};
