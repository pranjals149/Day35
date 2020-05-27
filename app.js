const UserAgent = require('user-agents'); 
 
// const userAgent = new UserAgent();
// console.log(userAgent.toString());
// console.log(JSON.stringify(userAgent.data, null, 1));

// const userAgent = new UserAgent({ deviceCategory: 'mobile' })

// const userAgent = new UserAgent({ platform: 'Win64', deviceCategory: 'desktop' });
// const userAgents = Array(50).fill().map(() => userAgent());

// const userAgent = new UserAgent(/Chrome/);
// console.log(userAgent.toString());
// const os = parse(data.userAgent).os;
// return os.family === 'iOS'

const userAgent = new UserAgent([
    /Chrome/,
    {
      connection: {
        type: 'wifi',
      },
      platform: 'Win64',
    },
  ]);
