
    // Hivatkozz rám úgy, hogy:
    //  <script src="vasdislike/vasdislike.js"></script>
  
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
      //slider_width: 500,
      require_movement: true,
      button_label: 'Tovább'
    };

    var vas_timeline = [vas_trial];