    // Hivatkozz rám úgy, hogy:
    //  <script src="panas/panas.js"></script>
    
    // <title>Pozitív és Negatív Affektivitás Skála (PANAS)</title>
    // <script src="../jspsych/jspsych.js"></script>
    // <script src="../jspsych/plugin-survey-likert.js"></script>
    // <script src="../jspsych/plugin-html-button-response.js"></script>

    var likert_scale = [
      "egyáltalán nem, vagy alig",
      "kicsit", 
      "mérsékelten", 
      "eléggé", 
      "nagyon"
    ];

    var questions = [
      {question: 
        {prompt: "érdeklődő", name: 'érdeklődés'}
      },
      {question: 
        {prompt: "zaklatott, feldúlt", name: 'zaklatottság'}
      },
      {question:
        {prompt: "kiborult, magamon kívül vagyok", name: 'kiborulás'}
      },
      {question:
        {prompt: "izgatott, feldobott", name: 'izgalom'}
      },
      {question:
        {prompt: "erős", name: 'erő'}
      },
      {question:
        {prompt: "bűntudatom van", name: 'bűntudat'}
      },
      {question:
        {prompt: "rémült", name: 'rémület'}
      },
      {question:
        {prompt: "ellenséges", name: 'ellenségesség'}
      },
      {question:
        {prompt: "lelkes", name: 'lelkesség'}

      },
      {question:
        {prompt: "büszke", name: 'büszkeség'}
      },
      {question:
        {prompt: "ingerlékeny", name: 'ingerlékenység'}
      },
      {question:
        {prompt: "éber", name: 'éberség'}
      },
      {question:
        {prompt: "megszégyenült", name: 'szégyen'}
      },
      {question:
        {prompt: "elhivatott", name: 'elhivatottság'}
      },
      {question:
        {prompt: "ideges", name: 'idegesség'}
      },
      {question:
        {prompt: "elszánt, határozott", name: 'elszántság'}
      }, 
      {question:
        {prompt: "figyelmes", name: 'figyelem'}
      },
      {question:
        {prompt: "feszült", name: 'feszültség'}
      },
      {question:
        {prompt: "aktív, élénk", name: 'élénkség'}
      },
      {question:
        {prompt: "félénk", name: 'félelem'}
    }
    
    ];

    var panas_timeline = [];

    var intro = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<h3>A következő kifejezések érzéseket, állapotokat írnak le.</h3> 
                <p style="text-align: center; max-width: 800px; margin: auto; font-size: 20px">
                Jelöld be azt a számot, ami a legjobban kifejezi, hogy jelen pillanatban hogyan érzed magad. Nyomd meg a "Tovább" gombot a kezdéshez.</p>`,
      choices: ['Tovább']
    };


    panas_timeline.push(intro);

    
    var trial = {
        type: jsPsychSurveyLikert,
        questions: function(){
         
          console.log(jsPsych.evaluateTimelineVariable('question')['prompt'])
          question_object = jsPsych.evaluateTimelineVariable('question')
          question_object['labels'] = likert_scale
          question_object['required'] = true
          myarray = [jsPsych.evaluateTimelineVariable('question')]
          return myarray
        },
        button_label: 'Tovább',
      };

    var procedure = {
      timeline: [trial],
      timeline_variables: questions,
      randomize_order: true
    }
    
    panas_timeline.push(procedure)

