async function fetchQuestion(emotions, answerStreak, responseTime) {
    const response = await fetch("http://localhost:5000/get-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emotions, answerStreak, responseTime }),
    });
  
    const data = await response.json();
    if (data.error) {
      console.error(data.error);
    } else {
      console.log("Next Question:", data.question);
    }
  }
  
  