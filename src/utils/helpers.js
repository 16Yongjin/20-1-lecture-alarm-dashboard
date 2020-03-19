export const rank = arr => Object.entries(arr.reduce((acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), {})).sort(([_1, v1], [_2, v2] ) => v2 - v1);

export const groupBy = (arr, key) => {
  return arr.reduce((acc, v) => {
    (acc[v[key]] = acc[v[key]] || []).push(v);
    return acc;
  }, {});
};

export const rankGroup = arr => {
  return Object.entries(groupBy(rank(arr), 1))
    .map(([count, items]) => ([count, items.map(i => i[0])]))
    .sort(([v1], [v2] ) => v2 - v1)
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
} 

function intToRGB(i){
  const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export const rgbaFromString = (str) => `#${intToRGB(hashCode(str))}60`

export const delay = n => new Promise(r => setTimeout(r, n));