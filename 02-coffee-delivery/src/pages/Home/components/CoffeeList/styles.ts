import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 0 10rem;
  margin-bottom: 9.8125rem;

  h2 {
    margin-bottom: 3.375rem;
    font-weight: 800;
    font-size: 2rem;
  }
`
export const CoffeeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;
`

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }
`
export const CoffeeTypes = styled.div`
  margin-bottom: 1rem;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 16px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 1rem;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Reboto', sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  line-height: 1.3;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
    line-height: 1.3;
  }
`

export const CoffeeCardActions = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

const BaseButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  svg {
    font-size: 1.375rem;
  }
`

export const AddToCartButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-dark']};

  &:hover {
    background: ${(props) => props.theme['purple']};
  }

  svg {
    color: ${(props) => props.theme['white']};
  }
`
