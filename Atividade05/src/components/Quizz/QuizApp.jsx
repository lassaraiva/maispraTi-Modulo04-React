// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from 'react';
import { Container, Title, Question, CustomButton, Score } from './QuizzAppStyles';
// Define o componente funcional QuizApp.
const QuizApp = () => {
  // Usa o hook useState para criar variáveis de estado para a pontuação e a pergunta atual.
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameOver, setGameOver] = useState(false); // Estado para controlar se o jogo acabou.

  // Define um array de perguntas, cada uma com a pergunta, opções e resposta correta.
  const questions = [
    {
      question: "What is 2+2?", // Pergunta da primeira questão.
      options: ["3", "4", "5", "6"], // Opções de resposta para a primeira questão.
      answer: "4", // Resposta correta para a primeira questão.
    },
    {
      question: "What is 3+3?", // Pergunta da segunda questão.
      options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
      answer: "6", // Resposta correta para a segunda questão.
    },
    {
      question: "What is 3+7?", // Pergunta da terceira questão.
      options: ["15", "20", "10", "18"], // Opções de resposta para a terceira questão.
      answer: "10", // Resposta correta para a terceira questão.
    },
    {
      question: "What is 9+5?", // Pergunta da quarta questão.
      options: ["16", "14", "15", "13"], // Opções de resposta para a quarta questão.
      answer: "14", // Resposta correta para a quarta questão.
    },
    {
      question: "What is 5-2?", // Pergunta da quinta questão.
      options: ["5", "1", "4", "3"], // Opções de resposta para a quinta questão.
      answer: "3", // Resposta correta para a quinta questão.
    },
    {
      question: "What is 4+13?", // Pergunta da sexta questão.
      options: ["15", "16", "17", "18"], // Opções de resposta para a sexta questão.
      answer: "17", // Resposta correta para a sexta questão.
    },
    {
      question: "What is 7-6?", // Pergunta da sétima questão.
      options: ["5", "3", "2", "1"], // Opções de resposta para a sétima questão.
      answer: "1", // Resposta correta para a sétima questão.
    },
  ];

  // Função que é chamada quando o usuário responde uma pergunta.
  const handleAnswer = (answer) => {
    // Verifica se a resposta fornecida está correta.
    if (answer === questions[currentQuestion].answer) {
      // Se a resposta estiver correta, aumenta a pontuação em 1.
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      // Passa para a próxima pergunta.
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true); // Marca o jogo como terminado se não houver mais perguntas.
    }
  };

  // Função que reseta o estado do jogo para permitir uma nova partida.
  const handlePlayAgain = () => {
    setScore(0); // Reseta a pontuação.
    setCurrentQuestion(0); // Reseta a pergunta atual.
    setGameOver(false); // Marca o jogo como não terminado.
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Quiz App</Title>
      {gameOver ? (
        <div>
          <Score>Your score: {score}</Score> {/* Exibe a pontuação final após responder todas as perguntas */}
          <CustomButton onClick={handlePlayAgain}>Play Again</CustomButton> {/* Botão para reiniciar o jogo */}
        </div>
      ) : (
        <div>
          <Question>{questions[currentQuestion].question}</Question> {/* Exibe a pergunta atual */}
          {questions[currentQuestion].options.map((option) => (
            <CustomButton key={option} onClick={() => handleAnswer(option)}>
              {option} {/* Renderiza os botões de opções de resposta */}
            </CustomButton>
          ))}
        </div>
      )}
    </Container>
  );
};

// Exporta o componente QuizApp para que possa ser utilizado em outras partes da aplicação.
export default QuizApp;