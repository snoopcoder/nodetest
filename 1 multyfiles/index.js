var fs = require("fs");
const files = [
  "data1",
  "data2",
  "data3",
  "data4",
  "data5",
  "data6",
  "data7",
  "data8",
  "data9",
  "data10",
  "data11"
];

readFileS = name => {
  console.time(name);
  fs.readFileSync(name);
  console.timeEnd(name);
};

readFile = name => {
  console.time(name);
  fs.readFile(name, function(err, contents) {
    if (!err) console.timeEnd(name);
    else console.log(name, err)
  });
};

readFileStreamed = name => {
  console.time(name);
  let getFirstData = false;
  let readStream = fs.createReadStream(name);
  readStream.on('data', () => {
    if (!getFirstData) {
      console.log('getFirstData for:', name);
      getFirstData = true;
    }
  });
  readStream.on('end', () => {
    console.timeEnd(name);
  });
};

const coutReq = 11;

for (let i =1; i <= coutReq; i++) {
  readFile(`data${i}`);
  // readFileS(`data${i}`);
  // readFileStreamed(`data${i}`);
}
