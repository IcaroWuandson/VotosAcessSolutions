import { useState } from 'react';
import { PrimaryButton, Stack, TextField, Text, Link } from '@fluentui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Database/firebase'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <Stack tokens={{ childrenGap: 15 }} horizontalAlign="center">
      <Text variant="xxLarge">Faça o login ou cadastre-se</Text>
      <Stack tokens={{ childrenGap: 15 }} styles={{ width: '50%' }}>
        <TextField
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && (
          <div style={{ color: 'red' }}>
            {errorMessage}
          </div>
        )}
        <PrimaryButton text="Entrar" onClick={handleLogin} styles={{ width: '100%' }} />
      </Stack>
      <Link href="/register" style={{ textDecoration: 'underline', marginTop: 20 }}>Não tem uma conta? Cadastre-se aqui.</Link>
    </Stack>
  );
}

export default Login;
