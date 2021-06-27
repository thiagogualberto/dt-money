import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); //Grid terá 3 colunas
  gap: 2rem; //espaçamento entre cada elemento do grid
  margin-top: -10rem;

  div {
    background: var(--shape); //Fundo branco
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; //Por padrão o strong vem com display inline. Colocando 'block' faz o strong funcionar como uma div.
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {  //Utilização de classes. Onde tem 'highlight-background' no className, ele aplica a formatação.
      background: var(--green);
      color: #FFF;
    }
  }
`;