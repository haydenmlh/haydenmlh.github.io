var submitted=false;

$('#gform').on('submit', async function(e) {
    $('#gform *').fadeOut(2000);
    await sleep(2000);
    $('#gform').prepend('Your response has been processed.');
} );
