import { useEffect, useState } from 'react';
import { Stack, Text } from '@fluentui/react';
import { auth } from '../../Database/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    const userRef = firebase.firestore().collection('users').doc(user.uid);

    userRef.get().then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
      } else {
        console.log('Document not found!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }, [user]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    }).catch((error) => {
      console.log(error);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <Text variant="xxLarge">Bem-vindo à Home Page</Text>
      {user && (
        <>
          <Text variant="large">Olá, {user.email}!</Text>
          <button onClick={handleLogout}>Sair</button>
        </>
      )}
      {!user && <Text variant="large">Você precisa fazer login para acessar esta página.</Text>}
      
    </Stack>
  );
}

export default Home;
