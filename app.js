        $(document).ready( function(){

          var boardNumberOne = $('#contenInput'),
              boardNumberTwo = $('#contenInput1'),
              dateOne = $(".mytext"),
              dateTwo = $(".mytext1"),
              result

          dateTwo.keyup(function() {
                  boardNumberTwo.text(dateTwo.val());
          });
          dateOne.keyup(function() {
                   boardNumberOne.text(dateOne.val());
          });
          dateOne.on('input', function() {
                  $('#canvas1').empty();
                  $('#first').css('display','block');
                  $('#first').css('left',(parseInt(dateOne.val())-1)*19+46 + 'px');
                  $('#canvas1').curvedArrow({
                      p0x: 46,
                      p0y: 328,
                      p1x: (46 + (dateOne.val()*38)/2),
                      p1y: 130,
                      p2x: 46+(dateOne.val()*38),
                      p2y: 328,
                  });
          });
          $('#first').on('input', function() {
            if ($('#first').val() == boardNumberOne.text()){
                    $('#first').replaceWith('<p id="first1">'+ boardNumberOne.text()+'</p>')
                    $('#first1').css('left',(parseInt($(".mytext").val())-1)*19+60 + 'px');
                    boardNumberOne.css('background','white')
                    $('#second').css('display','block');
                    $('#canvas2').curvedArrow({
                      p0x: 46+(dateOne.val()*38),
                      p0y: 328,
                      p1x: (46+(dateOne.val()*38)+(dateTwo.val()*38)/2),
                      p1y: 200,
                      p2x: 46+(dateOne.val()*38)+(dateTwo.val()*38),
                      p2y: 328,
                      size: 10,
                  });
                    $('#second').css('left',(parseInt(dateOne.val())* 38 + parseInt(dateTwo.val())*19)+26 + 'px');
            }
            else{
              $('#first').css('color','red')
              boardNumberOne.css('background','yellow')
            }
          });
          $('#second').on('input', function() {
            if ($('#second').val() == boardNumberTwo.text()){
                    $('#second').replaceWith('<p id="second1">'+ boardNumberTwo.text()+'</p>')
                    $('#second1').css('left',(parseInt($(".mytext").val())* 38 + parseInt(dateTwo.val())*19)+ 40 + 'px');
                    boardNumberTwo.css('background','white')
                    $('#second').css('display','block');
                    $('#contenInput2').replaceWith('<input id="result" type="text" autocomplete="off">')
                    $('#result').on('input',function() {
                      if ($('#result').val() == parseInt(dateTwo.val()) + parseInt(dateOne.val())){
                          $('#result').replaceWith('<div id="contenInput2" style="float:left">'+$('#result').val()+'</div>')
                        }
                      else {
                          $('#result').css('color','red')
                      }
                    });
                    boardNumberTwo.on('input',function() {
                              location.reload();     
                      });
                    dateOne.on('input',function() {
                              location.reload();
                    });
            }
            else{
              $('#second').css('color','red')
              boardNumberTwo.css('background','yellow')
            }
          });
          boardNumberTwo.on('input',function() {
                  $('#canvas2').empty();     
          });
          
        });