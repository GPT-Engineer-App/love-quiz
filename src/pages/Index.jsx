import { useState } from "react";
import { Container, VStack, Text, Button, Radio, RadioGroup, Stack, Box, Heading, IconButton, Image } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    question: "What's your favorite animal?",
    options: ["Dog", "Cat", "Bird", "Fish"],
  },
  {
    question: "What's your favorite hobby?",
    options: ["Reading", "Traveling", "Cooking", "Gaming"],
  },
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFinalQuestion, setShowFinalQuestion] = useState(false);

  const handleAnswerChange = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalQuestion(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowFinalQuestion(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        {!showFinalQuestion ? (
          <>
            <Heading as="h2" size="lg">
              {questions[currentQuestion].question}
            </Heading>
            <RadioGroup onChange={handleAnswerChange} value={answers[currentQuestion]}>
              <Stack direction="column">
                {questions[currentQuestion].options.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
            <Button onClick={handleNextQuestion} colorScheme="teal">
              Next
            </Button>
          </>
        ) : (
          <>
            <Heading as="h2" size="lg">
              Would you like to be my girlfriend?
            </Heading>
            <Box>
              <IconButton aria-label="Yes" icon={<FaHeart />} size="lg" colorScheme="red" onClick={() => alert("Yay! ❤️")} />
              <Button ml={4} onClick={handleReset} colorScheme="teal">
                Restart
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1591969851586-adbbd4accf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZXxlbnwwfHx8fDE3MTc1ODAzNjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Romantic Couple" mt={4} />
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
