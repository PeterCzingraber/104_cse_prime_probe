// Purpose: Define the demographic information survey.
var education = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "<strong>Mi a legmagasabb iskolai végzettséged?</strong>",
      name: "education",
      options: ["Általános iskola", "Szakközépiskola", "Szakgimnázium", "Gimnázium", "Főiskola", "Egyetem, alapképzés", "Egyetem, mesterképzés", "Doktori képzés"],
      required: true,
      },
      {
          prompt: "<strong>Melyik a nemmel azonosulsz?</strong>",
          name: "gender",
          options: ["Férfi", "Nő", "Nem-bináris", "Nem szeretném megosztani"],
          required: true
      }
  ],
  button_label: "Tovább"
};

var age_neptun = {
type: jsPsychSurveyText,
questions: [
  {prompt: "Hány éves vagy?", name: "age", required: true},
  {prompt: "Mi a NEPTUN kódod?", name: "neptun", required: true}
],
button_label: "Tovább"
};

var demographic_timeline = [age_neptun, education]