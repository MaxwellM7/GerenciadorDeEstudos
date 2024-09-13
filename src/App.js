import React, { useState } from 'react';
import './App.css';

function App() {
  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  const [estudos, setEstudos] = useState({
    'Segunda-feira': { manha: '', tarde: '', noite: '' },
    'Terça-feira': { manha: '', tarde: '', noite: '' },
    'Quarta-feira': { manha: '', tarde: '', noite: '' },
    'Quinta-feira': { manha: '', tarde: '', noite: '' },
    'Sexta-feira': { manha: '', tarde: '', noite: '' },
    'Sábado': { manha: '', tarde: '', noite: '' },
    'Domingo': { manha: '', tarde: '', noite: '' },
  });

  const [atividade, setAtividade] = useState('');
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-feira');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('manha');

  // Função para adicionar a atividade
  const adicionarAtividade = () => {
    if (!atividade) return;

    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: atividade,
      },
    }));

    setAtividade(''); // Limpa o campo após adicionar
  };

  // Função para remover a atividade
  const removerAtividade = (dia, periodo) => {
    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [dia]: {
        ...prevEstudos[dia],
        [periodo]: '', // Remove a atividade ao definir o valor como vazio
      },
    }));
  };

  return (
    <div className="app-container">
      <h1>Gerenciador de Estudos 2024</h1>

      <div className="input-container">
        <label>Dia:</label>
        <select value={diaSelecionado} onChange={(e) => setDiaSelecionado(e.target.value)}>
          {diasDaSemana.map(dia => (
            <option key={dia} value={dia}>{dia}</option>
          ))}
        </select>

        <label>Período:</label>
        <select value={periodoSelecionado} onChange={(e) => setPeriodoSelecionado(e.target.value)}>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>

        <label>Matéria:</label>
        <input
          type="text"
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
          placeholder="Ex: Matemática"
        />
        <button onClick={adicionarAtividade}>Adicionar Estudo</button>
      </div>

      {diasDaSemana.map(dia => (
        <div key={dia} className="dia-container">
          <h2>{dia}</h2>

          <div className="periodo-container">
            <strong>Manhã:</strong> {estudos[dia].manha || 'Nenhum estudo'}
            {estudos[dia].manha && (
              <button className="btn-remover" onClick={() => removerAtividade(dia, 'manha')}>X</button>
            )}
          </div>

          <div className="periodo-container">
            <strong>Tarde:</strong> {estudos[dia].tarde || 'Nenhum estudo'}
            {estudos[dia].tarde && (
              <button className="btn-remover" onClick={() => removerAtividade(dia, 'tarde')}>X</button>
            )}
          </div>

          <div className="periodo-container">
            <strong>Noite:</strong> {estudos[dia].noite || 'Nenhum estudo'}
            {estudos[dia].noite && (
              <button className="btn-remover" onClick={() => removerAtividade(dia, 'noite')}>X</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
