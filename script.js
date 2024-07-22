function calculateImpressionScore(candidateId) {
  const gender = document.getElementById(`gender${candidateId.slice(-1)}`).value;
  const confidence = parseFloat(document.getElementById(`confidence${candidateId.slice(-1)}`).value);
  const empathy = parseFloat(document.getElementById(`empathy${candidateId.slice(-1)}`).value);
  const authenticity = parseFloat(document.getElementById(`authenticity${candidateId.slice(-1)}`).value);
  const determination = parseFloat(document.getElementById(`determination${candidateId.slice(-1)}`).value);

  const α = 0.8, β = 1, δ = 0.9, γ = 1;
  let impressionScore = Math.pow(confidence, α) * Math.pow(empathy, β) * Math.pow(authenticity, δ) * Math.pow(determination, γ);

  if (gender === 'female') {
      impressionScore *= 1.1;
  }

  document.getElementById(`score${candidateId.slice(-1)}`).innerText = `Impression Score: ${impressionScore.toFixed(2)}`;
}

function compareScores() {
  const score1 = parseFloat(document.getElementById('score1').innerText.split(': ')[1]);
  const score2 = parseFloat(document.getElementById('score2').innerText.split(': ')[1]);

  let resultText;
  if (score1 > score2) {
      resultText = "Candidate 1 has a higher impression score.";
  } else if (score1 < score2) {
      resultText = "Candidate 2 has a higher impression score.";
  } else {
      resultText = "Both candidates have the same impression score.";
  }

  document.getElementById('comparison-result').innerText = resultText;
}