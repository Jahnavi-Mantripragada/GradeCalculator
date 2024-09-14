function calculateGrade() {
    const subject = document.getElementById('subject').value;
    const quiz = parseFloat(document.getElementById('quiz').value);
    const quizTotal = parseFloat(document.getElementById('quizTotal').value);
    const mid = parseFloat(document.getElementById('mid').value);
    const midTotal = parseFloat(document.getElementById('midTotal').value);
    const project = parseFloat(document.getElementById('project').value);
    const projectTotal = parseFloat(document.getElementById('projectTotal').value);
    const cp = parseFloat(document.getElementById('cp').value);
    const cpTotal = parseFloat(document.getElementById('cpTotal').value);
    const credits = parseFloat(document.getElementById('credits').value);

    const quizWeight = 0.10;
    const midWeight = 0.20;
    const projectWeight = 0.20;
    const cpWeight = 0.10;

    const quizPercentage = (quiz / quizTotal) * quizWeight * 100;
    const midPercentage = (mid / midTotal) * midWeight * 100;
    const projectPercentage = (project / projectTotal) * projectWeight * 100;
    const cpPercentage = (cp / cpTotal) * cpWeight * 100;

    const total = quizPercentage + midPercentage + projectPercentage + cpPercentage;
    const weightedScore = total * credits;

    document.getElementById('result').innerHTML = `
        <table>
            <tr>
                <th>Component</th>
                <th>Score</th>
                <th>Total</th>
                <th>Weight</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>Quiz</td>
                <td>${quiz}</td>
                <td>${quizTotal}</td>
                <td>${quizWeight * 100}%</td>
                <td>${quizPercentage.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Mid</td>
                <td>${mid}</td>
                <td>${midTotal}</td>
                <td>${midWeight * 100}%</td>
                <td>${midPercentage.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Project</td>
                <td>${project}</td>
                <td>${projectTotal}</td>
                <td>${projectWeight * 100}%</td>
                <td>${projectPercentage.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Class Participation</td>
                <td>${cp}</td>
                <td>${cpTotal}</td>
                <td>${cpWeight * 100}%</td>
                <td>${cpPercentage.toFixed(2)}%</td>
            </tr>
            <tr>
                <td colspan="4">Total Weighted Score</td>
                <td>${total.toFixed(2)}%</td>
            </tr>
            <tr>
                <td colspan="4">Weighted Score (with Credits)</td>
                <td>${weightedScore.toFixed(2)}</td>
            </tr>
        </table>
    `;
}
