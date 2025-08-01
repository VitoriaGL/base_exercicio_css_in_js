// src/components/Vaga/styles.ts
import styled from 'styled-components'

export const Item = styled.li`
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;

  ul {
    padding: 0;
    list-style: none;
    margin: 12px 0;
  }

  ul li {
    margin-bottom: 4px;
    font-size: 14px;
  }
`

export const Titulo = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: #004aad;
`

export const Link = styled.a`
  display: inline-block;
  margin-top: 12px;
  background-color: #004aad;
  color: #fff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: #00307a;
  }
`
