
    // Hivatkozz rám úgy, hogy:
    //  <script src="vasmanipulation/vasmanipulation.js"></script>

    // <title>VAS Manipulation</title>
    // <script src="../jspsych/jspsych.js"></script>
    // <script src="../jspsych/plugin-html-slider-response.js"></script>
  
    var vas2_trial = {
        type: jsPsychHtmlSliderResponse,
        stimulus: `<p>Kérlek, jelöld be 0 (egyáltalán nem) és 100 (teljes mértékben) között, hogy milyen mértékben vetted észre a kísérleti manipulációt!</p>`,
        labels: ['egyáltalán nem (0)', 'teljes mértékben (100)'],
        min_label: 'egyáltalán nem',
        max_label: 'teljes mértékben',
        min: 0,
        max: 100,
        start: 50,
        step: 1,
        //slider_width: 500,
        require_movement: true,
        button_label: 'Tovább'
      };
  
      var vas2_timeline = [vas2_trial]
      // A master fileban ez sem fog kelleni, mert simán a vas2_timeline lesz belerakva a fő timelineba,
      // és majd azt futtatja a jspsych
  

  