module.exports = {
  cl: console.log.bind(console),
  cw: console.warn.bind(console),
  ce: console.error.bind(console),
  ci: console.info.bind(console),
  cd: console.dir.bind(console),
  ct: console.time.bind(console),
  cte: console.timeEnd.bind(console),
  ctr: console.trace.bind(console),
  ca: console.assert.bind(console),
  cC: console.Console.bind(console),
};