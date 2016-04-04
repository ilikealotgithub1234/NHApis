var get$ = $('#get');
var po$t = $('#post');
var priv_key = 'JqyGxekAvyT6dKe4BaAX';
var name = 'erik';
var score = 56;
var publicKey = 'QGy3xKqXmySZy3QX1lgj'
score
po$t.on('click',function(){
    $.ajax({
      url: `http://data.sparkfun.com/input/${publicKey}?private_key=${priv_key}&name=${name}&score=${score}
`,
      method: "POST"
    }).done((response) => {
      console.log(response);

      })
})

