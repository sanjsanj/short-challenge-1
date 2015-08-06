#short-challenge-1

![](https://github.com/dan-bolger/short-challenge-1/blob/master/public/images/screenshot1.png)

###Task

"Create a landing page for an independent high street sports store"

#### Instructions:

- Fork this repo.
- Create the website in your repo.
- Host it on Heroku or any similar service

Your finished prototype should:

- Inform visitors that the full website is launching soon.
- Show them how to find the bricks and mortar store.
- Be slimline, it's a very simple prototype, don't overdo it.
- Look good.

### Tech Specs etc:

The challenge specifically suggests 'slimline'; to me this very obviously suggested Sinatra as the easiest way to structure the app - and it's been a while since I had to set one up, so it figured would be good bit of practice.

I took 'slimline' to its logical degree. The background image is responsive, but the text is not, and wraps around in a slightly ugly way.

I used several dependencies I didn't end up using - notably, rspec/cucmber etc testing, as well as DataMapper. Visual acceptance testing for such a 'site' (really only a page) seems sufficient for the moment.

### Get it running:

```
bundle install

rackup
```

visit http://localhost:9292/

...and you're golden!

### To do:

Make text responsive
erm...
...that's it