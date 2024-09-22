//src/Utils/ListaCotacoes.js
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ListaCotacoes = ({ cotacoes,onDelete }) => {
  return (
    <ul className="lista-cotacoes">
      {cotacoes.map((cotacao, index) => (
        <li key={cotacao.id}>
          <div>
            <strong>Produtos:</strong>
            <ul>
              {cotacao.produtos.map((prod, prodIndex) => (
                <li key={prodIndex}>
                  {prod.nome} - R$ {prod.preco.toFixed(2)} (CNPJ: {prod.cnpj})
                </li>
              ))}
            </ul>
            <br />
            <strong>Data:</strong> {cotacao.data}
            <br />
            <strong>Total:</strong> R$ {cotacao.total.toFixed(2)}
            <br />
            <button onClick={() => onDelete(cotacao.id)}>
              <DeleteIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListaCotacoes;
