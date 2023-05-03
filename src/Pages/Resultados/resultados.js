import { useState, useEffect } from 'react';
import { database } from '../../Database/firebase';

function ResultsScreen() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const resultsRef = database.ref('votingResults');
    resultsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const resultsList = Object.entries(data).map(([key, value]) => {
        return { id: key, votes: value };
      });
      setResults(resultsList);
    });
    return () => resultsRef.off();
  }, []);

  return (
    <div>
      <h2>Resultados da Votação</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.id}: {result.votes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsScreen;
