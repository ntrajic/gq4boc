# gq4boc
Graphical Queries for BOC Trip Data (gq4boc) - Angular SP to Query Trips {destinations, dates), hike leads, trip reports and trip photos}.

For the beginning, provide all trip data is implemented:
 
SELECT id, tdest, tdata, tlead, treport, tphotos FROM boc_trip_data;


<em>Instructions:</em>
    =============

<em>1.START the BACKEND (BE)</em>
    ========================

<em> c:\SRC\React\gq4boc\backend> npm run-script start:be  <enter>  </em>

> backend@1.0.0 start:be c:\SRC\React\gq4boc\backend
> nodemon api/index.js

[nodemon] 1.19.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node api/index.js`
<em>Server is listening on 3000 �</em>

<em>2. START the FRONTEND (FE) - Angular SPA</em>
    ========================================

<em>c:\SRC\React\gq4boc\frontend> npm run-script start:fe <enter> </em>

> angular-graphql@0.0.0 start:fe c:\SRC\React\gq4boc\frontend
> ng serve

 10% building 3/3 modules 0 activei  � unk {main} main.js, main.js.map (main) 21.6 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 251 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.09 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 4.57 MB [initial] [rendered]
Date: 2019-10-02T19:51:37.302Z - Hash: fecd285a43a7fe6251b5 - Time: 50729ms
<em>** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **</em>
i ��


<em>3. UI Look and Feel</em>
    ===================

at http://localhost:4200  in the Browser, a simple UI to list all trip data for BOC Trips appears:


<em>List of BOC Trips � </em>
* LynnCanyon - 20190324
* Buntzen - 20190331
*Galiano - 20190825

Trip Details
------------ (web link to all trip data details)


<em>When Trip Details Link is selected:</em>

OUTPUT in the Browser:

[
  {
    id: "20190324LynnCanyon",
    tdest: "LynnCanyon",
    tdate: "20190324",
    tlead: "Rimka Laman",
    treport: "2019-03-24-Lynn-Canyon-Report.pdf",
    tphotos: [
      {
      imgfile: "1-Lower Seymour-Lynn-Canyon-Loop.jpg"
      },
      {
      imgfile: "2-Lower Seymour-Lynn-Canyon-Loop.jpg"
      },
      {
      imgfile: "3-Lower Seymour-Lynn-Canyon-Loop.jpg"
      },
      {
      imgfile: "4-Lower Seymour-Lynn-Canyon-Loop.jpg"
      },
      {
      imgfile: "5-Lower Seymour-Lynn-Canyon-Loop.jpg"
      },
      {
      imgfile: "6-Lower Seymour-Lynn-Canyon-Loop.jpg"
      },
      {
      imgfile: "7-Lower Seymour-Lynn-Canyon-Loop.jpg"
      },
      {
      imgfile: "8-Lower Seymour-Lynn-Canyon-Loop.jpg"
      }
    ]
  },
  {
    id: "20190331Buntzen",
    tdest: "Buntzen",
    tdate: "20190331",
    tlead: "Su-Jane Liang",
    treport: "31-03-2019-Buntzen-Lake-Report.pdf",
    tphotos: [
      {
      imgfile: "01-Buntzen-Lake-1.jpg"
      },
      {
      imgfile: "02-Buntzen-Lake-2.jpg"
      },
      {
      imgfile: "03-Buntzen-Lake-3.jpg"
      },
      {
      imgfile: "04-Buntzen-Lake-4.jpg"
      },
      {
      imgfile: "05-Buntzen-Lake-5.jpg"
      },
      {
      imgfile: "06-Buntzen-Lake-6.jpg"
      },
      {
      imgfile: "07-Buntzen-Lake-7.jpg"
      },
      {
      imgfile: "08-Buntzen-Lake-8.jpg"
      },
      {
      imgfile: "09-Buntzen-Lake-9.jpg"
      },
      {
      imgfile: "10-Buntzen-Lake-10.jpg"
      },
      {
      imgfile: "11-Buntzen-Lake-11.jpg"
      },
      {
      imgfile: "12-Buntzen-Lake-12.jpg"
      }
    ]
  },
  {
    id: "20190825Galiano",
    tdest: "Galiano",
    tdate: "20190825",
    tlead: "David Cater",
    treport: "20190825GalianoTripReport.pdf",
    tphotos: [
      {
      imgfile: "01-Galiano.jpg"
      },
      {
      imgfile: "02-Galiano.jpg"
      },
      {
      imgfile: "03-Galiano.jpg"
      },
      {
      imgfile: "04-Galiano.jpg"
      },
      {
      imgfile: "05-Galiano.jpg"
      },
      {
      imgfile: "06-Galiano.jpg"
      },
      {
      imgfile: "07-Galiano.jpg"
      }
    ]
  }
]





