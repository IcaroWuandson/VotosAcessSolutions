import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../Database/firebase';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    // Busca todos os usuários cadastrados no banco de dados
    const unsubscribeUsers = firestore.collection('users').onSnapshot(snapshot => {
      setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Busca todas as votações cadastradas no banco de dados
    const unsubscribeVotes = firestore.collection('votes').onSnapshot(snapshot => {
      setVotes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Retorna uma função que é executada quando o componente é desmontado
    return () => {
      unsubscribeUsers();
      unsubscribeVotes();
    }
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      // Deleta o usuário do banco de dados
      await firestore.collection('users').doc(userId).delete();
      console.log('Usuário deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar usuário', error);
    }
  };

  const handleDeleteVote = async (voteId) => {
    try {
      // Deleta a votação do banco de dados
      await firestore.collection('votes').doc(voteId).delete();
      console.log('Votação deletada com sucesso');
    } catch (error) {
      console.error('Erro ao deletar votação', error);
    }
  };

  return (
    <div>
      <h2>Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Votações</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {votes.map(vote => (
            <tr key={vote.id}>
              <td>{vote.name}</td>
              <td>{vote.description}</td>
              <td>
                <button onClick={() => handleDeleteVote(vote.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
