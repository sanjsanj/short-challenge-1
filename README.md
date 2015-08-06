#The Starting Line

Task was to make a quick prototype of a landing page for a sports shop. [On Heroku](https://young-plateau-3659.herokuapp.com/).

![Screenshot](/public/img/screenshot.png)

Specs were to:
- Inform visitors that the full website is launching soon.
- Show them how to find the bricks and mortar store.
- Be slimline, it's a very simple prototype, don't overdo it.
- Look good.

I used Sinatra to provide a simple backend. Bootstrap provided most of the styling, and the Google Maps API gave me a mockup of a map.

To use locally, clone this repo and run ```bundle``` in the command line. Run ```rackup``` to start the local server. You will need to add your own API key to a .env file to make the google maps plugin work.
