import mixpanel from 'mixpanel-browser';
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_KEY, {
  debug: process.env.NEXT_PUBLIC_MIXPANEL_DEBUG === '1',
});

const track = (pageTitle) => {
  mixpanel.track(`${NEXT_PUBLIC_DOMAIN} - ${pageTitle}`);
};

export default track;
