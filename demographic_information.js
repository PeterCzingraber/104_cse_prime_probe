// Purpose: Define the demographic information survey.
var education = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "Mi a legmagasabb iskolai végzettséged?",
        name: "education",
        options: ["Általános iskola", "Szakközépiskola", "Szakgimnázium", "Gimnázium", "Főiskola", "Egyetem, alapképzés", "Egyetem, mesterképzés", "Doktori képzés"],
        required: true
        },
        {
            prompt: "Melyik a nemmel azonosulsz?",
            name: "gender",
            options: ["Férfi", "Nő", "Nem-bináris", "Gender-nonkomform", "Nem szeretném megosztani"],
            required: true
        }
    ],
};
  var education_timeline = [education];