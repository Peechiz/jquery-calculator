$(function(){
  var opType = null;
  var hasOp = false;

  function opToScreen(){
    var val = $('#screen').text();
    val += opType;
    $('#screen').text(val);
  }

  $('span').click(function(){
    console.log($(this).text());
    if ($(this).text() == '-') {
      opType = '-';
      opToScreen();
    }
    else if ($(this).text() == 'x') {
      opType = 'x';
      opToScreen();
    }
    else if ($(this).text() == '+') {
      opType = '+';
      opToScreen();
    }
    else if ($(this).html() == '\xf7') {
      opType = '\xf7';
      opToScreen();
      console.log('Divide?',opType);
    }
    else if ($(this).text() == 'C') {
      $('#screen').text('');
    }
    else if ($(this).text() == '=') {
      console.log('optype',opType);

      var vals = $('#screen').text().split(opType);
      if (opType === '+') {
        var result = parseInt(vals[0]) + parseInt(vals[1]);
        $('#screen').text(result);
      }
      else if (opType === '-') {
        var result = parseInt(vals[0]) - parseInt(vals[1]);
        $('#screen').text(result);
      }
      else if (opType === 'x') {
        var result = parseInt(vals[0]) * parseInt(vals[1]);
        $('#screen').text(result);
      }
      else if (opType === '\xf7') {
        var result = parseInt(vals[0]) / parseInt(vals[1]);
        $('#screen').text(result);
      }
      optype = null;
    }
    else {
      // So you're saying it's a number
      var val = $('#screen').text();
      val += $(this).text()
      $('#screen').text(val)
    }
  })
})
