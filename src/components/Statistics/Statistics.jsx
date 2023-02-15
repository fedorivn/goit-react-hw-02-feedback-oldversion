import { Container, SectionTitle, StatList, StatEl } from './Statistics.styled';

export const Statistics = ({ allStates, total, positivePersentage }) => (
 <Container>
<SectionTitle>Statistics</SectionTitle>
    <StatList>
    
        <StatEl>Good: {allStates.good}</StatEl>
        <StatEl>Bad: {allStates.bad} </StatEl>
        <StatEl>Neutral: {allStates.neutral} </StatEl>
        <StatEl>Total: {total}</StatEl>
        <StatEl>Positive percentage: {positivePersentage}</StatEl>
  
    </StatList>
    </Container>
)


