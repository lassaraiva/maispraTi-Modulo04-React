import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  padding: 1rem;
  border-radius: 8px;
  width: 400px;
`;

const Field = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const CustomInput = styled(InputText)`
  width: 100%;
  height: 40px;
  font-size: 1.2rem;
  padding-right: 2.5rem;
  padding-left: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  z-index: 10;
`;

const CustomButton = styled.button`
    padding: 10px 20px;
    background-color: #28a745;
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer; 
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Aula38 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmaSenha, setMostrarConfirmaSenha] = useState(false);
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email Inválido';
    }

    if (!formData.password) {
      newErrors.password = 'O campo de senha é obrigatório';
    } else if (formData.password.length < 8) {
      newErrors.password = 'O campo de senha precisa de ao menos 8 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'O campo de confirmação de senha é obrigatório';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'O campo de confirmação de senha precisa coincidir';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      window.alert('Login efetuado com sucesso!');
      console.log('Formulário enviado com sucesso:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Área de login</h1>
        
        <Field>
          <Label htmlFor="name">Nome Completo</Label>
          <CustomInput
            id="name"
            type="text"
            placeholder="Insira seu nome completo"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
        </Field>
        
        <Field>
          <Label htmlFor="email">Email</Label>
          <CustomInput
            id="email"
            type="text"
            placeholder="email@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </Field>
        
        <Field>
          <Label htmlFor="password">Senha</Label>
          <InputContainer>
            <CustomInput
              id="password"
              type={mostrarSenha ? 'text' : 'password'}
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
            <InputIcon
              className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'}`}
              onClick={() => setMostrarSenha(!mostrarSenha)}
            />
          </InputContainer>
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </Field>
        
        <Field>
          <Label htmlFor="confirmPassword">Confirmação de Senha</Label>
          <InputContainer>
            <CustomInput
              id="confirmPassword"
              type={mostrarConfirmaSenha ? 'text' : 'password'}
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <InputIcon
              className={`pi ${mostrarConfirmaSenha ? 'pi-eye' : 'pi-eye-slash'}`}
              onClick={() => setMostrarConfirmaSenha(!mostrarConfirmaSenha)}
            />
          </InputContainer>
          {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
        </Field>
        
        <CustomButton type="submit" className="p-button p-component">
          Entrar
        </CustomButton>
      </Form>
    </Container>
  );
};

export default Aula38;