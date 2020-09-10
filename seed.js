const db = require("./models");

const propos = [
  {
    name: "Prop 1457",
    details: "Hello my honey hello my baby hello my ragtime gal",
    url: "www.WTF.com",
  },
  {
    name: "Prop 612",
    details: "And behold I am become death",
    url: "www.WTF.com",
  },
];

const presOffcials = [
  {
    name: "Lawrence “Chunk” Cohen",
    photo: "../public/images/people/01.png",
    info: { 
      intro: "Chunk Cohen is the 2020 Libertarian Party presidential nominee. He was nominated at the Libertarian National Convention on May 23, 2020.", 
      rest: 'Cohen framed his campaign as an alternative to the Democratic and Republican policies. He believes these policies have created trillion-dollar deficits and led to involvement in expensive and deadly foreign wars. "Big government mandates and programs created these problems. To solve them, we need to make government smaller – much, much smaller."Lorem ipsum dolor sit amet, evertitur definiebas signiferumque has ei, vix ut aperiam qualisque honestatis, eum wisi nullam ne. Probo adipisci constituam no mea, nominati theophrastus ius an. Et mei viris electram, at vix etiam elitr corpora, vix movet verterem et. Duo cu quas quaerendum, ius recusabo consulatu te.'},
    runningMate: { name: "Richard “Data” Wang", photo: "../public/images/people/02.png", title: "entrepreneur and inventor"},
    party: { name: "Libertarian",},
  },
  {
    name: "Lotney “Sloth” Fratelli",
    photo: "../public/images/people/03.png",
    info: { 
      intro: "Sloth Fratelli is the 2020 Green Party Presidential nominee. He was nominated on June 21, 2020, after winning more than 176 delegates across Green Party primaries and caucuses.", },
    runningMate: { name: "Michael Walsh", title: "labor activist" },
    party: { name: "Green",},
  },
  {
    name: "Clark “Mouth” Devereaux",
    photo: "../public/images/people/04.png",
    info: { 
      intro: "Mouth Devereaux is a former Democratic Vice President of the United States. He became the presumptive Democratic nominee on April 8, 2020.", },
    runningMate: { name: "Stephanie Steinbrenner",  },
    party: { name: "Democrat", },
  }
];

const locations =
    {
        zipCode: 97103,
        name: 'Clatsop County, Oregon',
        presCandidates: [],
        propositions: []
    }

db.Location.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log(`Cleared ${result.deletedCount} locations`);
})

  .then(() =>
    db.Official.deleteMany({}, (err, result) => {
      if (err) {
        console.log(err);
        process.exit();
      }

      console.log(`Cleared ${result.deletedCount} Officials`);
    })
  )

  .then(() =>
    db.Proposition.deleteMany({}, (err, result) => {
      if (err) {
        console.log(err);
        process.exit();
      }

      console.log(`Cleared ${result.deletedCount} Propositions`);
    })
  )

  .then(() =>
    db.Location.create(locations, (err, newLocations) => {
      if (err) {
        console.log(err);
        process.exit();
      }

      db.Proposition.create(propos, (err, newPropos) => {
        let location = newLocations;
        if (err) {
          console.log(err);
          process.exit();
        }
        location.propositions.push(...newPropos);
        location.save((err, savePropos) => {
          if (err) {
            console.log(err);
            process.exit();
          }

          console.log(
            `added ${newPropos.length} propositions to ${location.name}`
          );
        });

        db.Official.create(presOffcials, (err, newOfficials) => {
          let location = newLocations;
          if (err) {
            console.log(err);
            process.exit();
          }
          location.presCandidates.push(...newOfficials);
          location.save((err, saveOfficials) => {
            if (err) {
              console.log(err);
              process.exit();
            }
          });
          console.log(
            `added ${newOfficials.length} officials to ${location.name}`
          );
        });
      });
      console.log(`Added all loclations`);
    })
  );

  setTimeout(function() {process.exit()}, 3000);