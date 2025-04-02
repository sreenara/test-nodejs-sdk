import WebexNode from 'webex-node';

const webex = WebexNode.init({
    credentials: {
      access_token: 'token'
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