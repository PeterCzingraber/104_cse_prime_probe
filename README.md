# Replication of "The selective use of punishments on congruent versus incongruent trials in the Stroop task" (Yang et al., 2022)
This repository contains the full experimental code used in a replication study conducted by the Metascience Lab at ELTE (https://ppk.elte.hu/en/metascience), led by Pítör Czingraber, Natalija Dokic, Julianna Harangozo, and Miklos Bognar.

---

## About the experimental code
The experiment is a web-based task built using HTML, JavaScript, and the jsPsych library. It is compatible with JATOS for online deployment and data collection.
To run the experiment locally:

1. Download this repository as a `.zip` file.
2. Unzip it to your desired location.
3. Open `experiment.html` in a web browser.

---

## About the Task
We implemented a prime-probe task (Weissman et al., 2014), designed to avoid common confounds in Stroop tasks such as feature integration and contingency learning.

The experimental conditions consisted of the following:

- P-FB-C – Punishment after congruent trial errors
- P-FB-I – Punishment after incongruent trial errors
- N-FB-C – No punishment, feedback follows congruent trials
- N-FB-I – No punishment, feedback follows incongruent trials
- Random Punishment – Feedback and monetary loss are random, not performance-contingent

Experimental Design:

- 5 sessions (1 per condition), presented in randomized order
- Each session: 3 blocks × 81 trials
- Practice session: 2 blocks × 16 trials (no punishment)
- Balanced presentation of trial types: cC, cI, iC, iI

Measurements:

- PANAS – Positive and Negative Affect Schedule, completed after each session
- VAS – Visual Analog Scale to rate dislike toward negative feedback
- Awareness – Final VAS to assess manipulation awareness

---

## More Information

For a full description of the replication project and its methodology, please visit the OSF repository: (https://doi.org/10.17605/OSF.IO/UHAFE)
