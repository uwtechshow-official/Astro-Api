const startTime = process.hrtime();

export function RunTime() {
   const diff = process.hrtime(startTime);
   const runtimeInSeconds = diff[0] + diff[1] / 1e9;
   return runtimeInSeconds.toFixed(3);
}
