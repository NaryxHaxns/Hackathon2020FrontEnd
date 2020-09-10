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
    runningMate: { name: "Richard “Data” Wang", photo: "../public/images/people/02.png", },
    party: { name: "Libertarian",},
  },
  {
    name: "Lotney “Sloth” Fratelli",
    photo: "../public/images/people/03.png",
    runningMate: { name: "Michael Walsh", },
    party: { name: "Green",},
  },
  {
    name: "Clark “Mouth” Devereaux",
    photo: "../public/images/people/04.png",
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