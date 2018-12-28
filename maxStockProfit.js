// maxStockProfit = (pricesArr) => {
//   let buyingPrice = pricesArr[0];
//   let sellingPrice = pricesArr[0];
//   let maxProfit;
//   for (let price in pricesArr) {
//     if (pricesArr[price] < buyingPrice) buyingPrice = pricesArr[price];
//     if (pricesArr[price] > sellingPrice) sellingPrice = pricesArr[price];
//     if (sellingPrice - buyingPrice < 0) maxProfit = -1;
//     else maxProfit = sellingPrice - buyingPrice;
//   }
//   return maxProfit;
// }

// Big O (n)
maxStockProfit = (pricesArr) => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  
  let changeBuyPrice = true;
  
  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
    
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}
 
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);
