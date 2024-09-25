export const transformRampsData = (data) => {
    let countedresults = Object.values(data.reduce((a,{algorithm}) => {
      let key = `${algorithm}`;
      a[key] = a[key] || {algorithm, count : 0};
      a[key].count++;
      a[key].percent = a[key].count / data.length * 100;
      return a;
    }, {}));
    const percentages = []
    countedresults.map(item => percentages.push(Math.round(item.percent)))
    return percentages
}