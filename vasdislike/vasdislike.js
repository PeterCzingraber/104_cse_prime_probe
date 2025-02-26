
    // Hivatkozz rám úgy, hogy:
    //  <script src="vasdislike/vasdislike.js"></script>

    // <title>VAS Dislike</title>
    // <script src="../jspsych/jspsych.js"></script>
    // <script src="../jspsych/plugin-html-slider-response.js"></script>
  
    var vas_trial = {
      type: jsPsychHtmlSliderResponse,
      stimulus: `<p>Kérlek, jelöld be 0 (egyáltalán nem) és 100 (teljes mértékben) között, hogy milyen mértékben tapasztaltál
       negatív érzéseket a negatív visszajelzések kapcsán!</p>`,
      labels: ['egyáltalán nem (0)', 'teljes mértékben (100)'],
      min_label: 'egyáltalán nem',
      max_label: 'teljes mértékben',
      min: 0,
      max: 100,
      start: 50,
      step: 1,
      //slider_width: 200,
      require_movement: true,
      button_label: 'Tovább'
    };

    var vas_timeline = [vas_trial];

    var jsPsych = initJsPsych({
      timeline: timeline,
      on_finish: function(){
        jsPsych.data.displayData();
      }
    });

    // A master fileban ez sem fog kelleni, mert simán a vas_timeline lesz belerakva a fő timelineba,
    // és majd azt futtatja a jspsych

    jsPsych.run(vas_timeline);
