import { randomColor } from '../GlobalStyle';
import { StatItem } from '../StatItem/StatItem';
import { List, Section, Tittle, Item } from './Statistics.styled';

export const Statistics = ({ items, title }) => {
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
