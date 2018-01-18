import test from "ava";
import fs from "fs";
import path from "path";

test("Didn't check in any secrets.", t => {
  const dotenv = fs.readFileSync(path.resolve("./.env"), "utf8");
  const hbconfig = fs.readFileSync(
    path.resolve("./homebridge/config/config.json"),
    "utf8"
  );
  t.regex(dotenv, /PWD=1234/, "Looks like .env contains some secrets. 👮🏻‍♂️");
  t.regex(
    hbconfig,
    /\${[A-Z]+_PWD}/,
    "Looks like homebridge/config/config.json contains some secrets. 👮🏻‍♂️"
  );
});
