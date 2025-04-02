import WebexNode from 'webex-node';

const webex = WebexNode.init({
    credentials: {
      access_token: 'N2Q0OGFjNTYtMjIzZS00ZDI4LTk5MDAtYjQ1ZTJkOGIwN2M0NDAzMWU4NzAtMmJk_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f'
    }
  });

webex.once('ready', () => {
    if (webex.canAuthorize) {
        console.log('webex is authorized');
        webex.rooms.create({
            title: 'Test Space from NodeJS'
        })
        .then(function(room) {
            console.log('room object', room);
            webex.messages.create({
                    text: 'Hello World!',
                    roomId: room.id
                });
        })
        // Make sure to log errors in case something goes wrong.
        .catch(function(reason) {
        console.error(reason);
        process.exit(1);
        });
    }
});