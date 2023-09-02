/** @param {NS} ns */
let quietMode = true; // Disables printing contracts to terminal; default: false
export function main(ns) {
  solveAllContracts(ns);
	ns.writePort(ns.pid,"")
}

function findMoreServers(ns, foundHosts) {
  foundHosts.forEach((host) => {
    let hostsToAdd = ns.scan(host);
    hostsToAdd.forEach((hostToAdd) => {
      if (!foundHosts.includes(hostToAdd)) {
        foundHosts.push(hostToAdd);
        findMoreServers(ns, foundHosts);
      }
    });
  });
  return foundHosts;
}

function getAllServers(ns) {
  let foundHosts = ["home"];
  foundHosts = ns.scan("home");
  findMoreServers(ns, foundHosts);
  return foundHosts;
}

export function solveAllContracts(ns) {
const /* Pretty Colours!*/ gr = "\x1b[32m";
  let solution = undefined;
  // Crawl servers and filter to those with cct files
  let contractServers = getAllServers(ns).filter((server) => ns.ls(server, ".cct").length > 0);
  if (contractServers.length == 0) {
    return;
  }
  // On each server with contracts...
  for (let k = 0; k < contractServers.length; k++) {
    // Get hostname value
    let host = contractServers[k];
    // Get array of contracts on host
    let contractsOnHost = ns.ls(host, ".cct");
    if (!quietMode) { // Print title bar for host
    }
    // For each contract found on host...
    for (let i = 0; i < contractsOnHost.length; i++) {
      // Get filename value
      let filename = contractsOnHost[i];
      let contractType = ns.codingcontract.getContractType(filename, host);
      solution = findSolution(ns, filename, host);
      // If solution is found, submit answer
      if (solution != undefined && solution != NaN) {
          ns.tprint(`${gr}Completed ${contractType} on ${host} ~ ${ns.codingcontract.attempt(solution, filename, host)}`);
      }
      // End of contract
    }
  }
  // End of solver script
}

function findSolution(ns, filename, host) {
  const data = ns.codingcontract.getData(filename, host);
  const contractType = ns.codingcontract.getContractType(filename, host);
  const solutions = {
    "Find Largest Prime Factor": findLargestPrimeFactor,
    "Subarray with Maximum Sum": subarrayWithMaximumSum,
    "Total Ways to Sum": totalWaysToSum,
    "Total Ways to Sum II": totalWaysToSum2,
    "Spiralize Matrix": spiralizeMatrix,
    "Array Jumping Game": arrayJumpingGame,
    "Array Jumping Game II": arrayJumpingGame2,
    "Merge Overlapping Intervals": mergeOverlappingIntervals,
    "Generate IP Addresses": generateIPAddresses,
    "Algorithmic Stock Trader I": algorithmicStockTrader,
    "Algorithmic Stock Trader II": algorithmicStockTrader2,
    "Algorithmic Stock Trader III": algorithmicStockTrader3,
    "Algorithmic Stock Trader IV": algorithmicStockTrader4,
    "Minimum Path Sum in a Triangle": minimumPathSumInATriangle,
    "Unique Paths in a Grid I": uniquePathsInAGrid,
    "Unique Paths in a Grid II": uniquePathsInAGrid2,
    "Shortest Path in a Grid": shortestPathInAGrid,
    "Sanitize Parentheses in Expression": sanitizeParenthesesInExpression,
    "Find All Valid Math Expressions": findAllValidMathExpressions,
    "HammingCodes: Integer to Encoded Binary": integerToEncodedBinary,
    "HammingCodes: Encoded Binary to Integer": encodedBinaryToInteger,
    "Proper 2-Coloring of a Graph": proper2ColoringOfAGraph,
    "Compression I: RLE Compression": compressionRLE,
    "Compression II: LZ Decompression": decompressionLZ,
    "Compression III: LZ Compression": compressionLZ,
    "Encryption I: Caesar Cipher": caesarCipher,
    "Encryption II: Vigenère Cipher": vigenereCipher,
  };
  // Return solution
  return solutions[contractType]?.(data);
}

//"Find Largest Prime Factor"
function findLargestPrimeFactor(number) {
  let divisor = 2;
  while (number > 1) {
    if (number % divisor === 0) { number /= divisor; }
    else { divisor++; }
  }
  return divisor;
}

//"Subarray with Maximum Sum"
function subarrayWithMaximumSum(array) {
  const size = array.length;
  const maxint = Math.pow(2, 53);
  let max_so_far = -maxint - 1;
  let max_ending_here = 0;

  for (let i = 0; i < size; i++) {
    max_ending_here = max_ending_here + array[i];
    if (max_so_far < max_ending_here) { max_so_far = max_ending_here; }
    if (max_ending_here < 0) { max_ending_here = 0; }
  }
  return max_so_far;
}

//"Total Ways to Sum"
function totalWaysToSum(number) {
  // Create an array to store the number of ways each number can be formed.
  let waysToFormNumber = new Array(number + 1).fill(0);
  // There is one way to form the number 0 (by not selecting any positive integers).
  waysToFormNumber[0] = 1;
  // Calculate the number of ways to form each number from 1 to the number.
  for (let currentInteger = 1; currentInteger <= number; currentInteger++) {
    // For each currentInteger, iterate from currentInteger to the number.
    // This way, we consider all possible ways to form the current number.
    for (let selectedInteger = currentInteger; selectedInteger <= number; selectedInteger++) {
      // Update the number of ways to form the selectedInteger.
      // The new value is obtained by adding the ways to form (selectedInteger - currentInteger).
      waysToFormNumber[selectedInteger] += waysToFormNumber[selectedInteger - currentInteger];
    }
  }
  // The final result is the number of ways to form the number, which is stored at waysToFormNumber[number].
  return waysToFormNumber[number] - 1;
}

//"Total Ways to Sum II"
function totalWaysToSum2(array) {
  const targetSum = array[0];
  const numSet = array[1];
  let dp = new Array(targetSum + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < numSet.length; i++) {
    for (let j = numSet[i]; j <= targetSum; j++) {
      dp[j] += dp[j - numSet[i]];
    }
  }
  return dp[targetSum];
}

//"Spiralize Matrix"
function spiralizeMatrix(matrix) {
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startColumn = 0;
  let endColumn = matrix[0].length - 1;
  let newArray = [];
  // While loop is used to spiral into the 2d array.
  while (startRow <= endRow && startColumn <= endColumn) {
    // Reading top row, from left to right
    for (let i = startColumn; i <= endColumn; i++) {
      newArray.push(matrix[startColumn][i]);
      if (matrix.length * matrix[0].length == newArray.length) { return newArray; }
    }
    startRow++; // Top row read.
    // Reading right column from top right to bottom right
    for (let i = startRow; i <= endRow; i++) {
      newArray.push(matrix[i][endColumn]);
      if (matrix.length * matrix[0].length == newArray.length) { return newArray; }
    }
    endColumn--; // Right column read
    // Reading bottom row, from bottom right to bottom left
    for (let i = endColumn; i >= startColumn; i--) {
      newArray.push(matrix[endRow][i]);
      if (matrix.length * matrix[0].length == newArray.length) { return newArray; }
    }
    endRow--; // Bottom row read
    // Reading left column, from bottom left to top left
    for (let i = endRow; i >= startRow; i--) {
      newArray.push(matrix[i][startColumn]);
      if (matrix.length * matrix[0].length == newArray.length) { return newArray; }
    }
    startColumn++; // left column now read.
  } // While loop will now spiral in the matrix.
  return newArray;
}

//"Array Jumping Game"
function arrayJumpingGame(array) {
  let farthestPosition = 0;
  for (let i = 0; i < array.length; i++) {
    if (i > farthestPosition) { return 0; }
    // If we cannot reach the current position, return false (0)
    farthestPosition = Math.max(farthestPosition, i + array[i]);
    if (farthestPosition >= array.length - 1) { return 1; }
    // If we can reach the last index, return true (1)
  }
  return 0;
  // If we reach the end of the array without reaching the last index, return false (0)
}

//"Array Jumping Game II"
function arrayJumpingGame2(array) {
  const n = array.length;
  if (n <= 1) { return 0; }
  // If the array has only one element or is empty, no jumps are needed.
  let currentLevelEnd = 0;
  let farthestJump = 0;
  let jumps = 0;
  for (let i = 0; i < n - 1; i++) {
    farthestJump = Math.max(farthestJump, i + array[i]);
    if (i === currentLevelEnd) {
      jumps++;
      currentLevelEnd = farthestJump;
      if (currentLevelEnd >= n - 1) { return jumps; }
      // If we can reach the end, return the minimum number of jumps.
    }
  }
  return 0; // If we cannot reach the end, return 0.
}

//"Merge Overlapping Intervals"
function mergeOverlappingIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals; // No need to merge if there are 0 or 1 intervals
  }
  // Sort the intervals based on their start values in ascending order
  intervals.sort((a, b) => a[0] - b[0]);
  // Initialize the merged intervals array with the first interval
  let mergedIntervals = [intervals[0]];
  // Iterate through the sorted intervals and merge overlapping intervals
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
    // Check for overlap with the last merged interval
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Merge the current interval with the last merged interval
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // Add the current interval to the merged intervals array
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}

//"Generate IP Addresses"
function generateIPAddresses(string) {
  function isValidComponent(component) {
    if (component.length > 1 && component[0] === '0') {
      return false; // To prevent leading zeros like "01", "001", etc.
    }
    let num = parseInt(component, 10);
    return num >= 0 && num <= 255;
  }
  if (string.length < 4 || string.length > 12) { return []; }
  let validIPs = [];
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        for (let d = 1; d <= 3; d++) {
          if (a + b + c + d === string.length) {
            let A = string.substring(0, a);
            let B = string.substring(a, a + b);
            let C = string.substring(a + b, a + b + c);
            let D = string.substring(a + b + c);
            if (isValidComponent(A) && isValidComponent(B) && isValidComponent(C) && isValidComponent(D)) {
              let ipAddress = `${A}.${B}.${C}.${D}`;
              validIPs.push(ipAddress);
            }
          }
        }
      }
    }
  }
  return validIPs;
}

//"Algorithmic Stock Trader I"
function algorithmicStockTrader(stockPrices) {
  if (!stockPrices || stockPrices.length < 2) {
    return 0; // If there are no prices or only one price, no profit can be made.
  }
  let minPrice = stockPrices[0];
  let maxProfit = 0;
  for (let i = 1; i < stockPrices.length; i++) {
    // Calculate the potential profit with the current price and the minimum price seen so far.
    let potentialProfit = stockPrices[i] - minPrice;
    // Update the maximum profit if the potential profit is greater.
    maxProfit = Math.max(maxProfit, potentialProfit);
    // Update the minimum price seen so far if the current price is lower.
    minPrice = Math.min(minPrice, stockPrices[i]);
  }
  return maxProfit;
}

//"Algorithmic Stock Trader II"
function algorithmicStockTrader2(stockPrices) {
  let maxProfit = 0;
  for (let i = 0; i < stockPrices.length - 1; i++) {
    if (stockPrices[i] < stockPrices[i + 1]) {
      // If the price is lower on the current day than the next day, buy the stock.
      // The maximum profit increases by the difference between the next day's price and the current day's price.
      maxProfit += stockPrices[i + 1] - stockPrices[i];
    }
  }
  return maxProfit;
}

//"Algorithmic Stock Trader III"
function algorithmicStockTrader3(stockPrices) {
  let n = stockPrices.length;
  if (n < 2) { return 0; }
  // Arrays to store the maximum profits with one transaction and two transactions at each day.
  let profitOneTransaction = new Array(n).fill(0);
  let profitTwoTransactions = new Array(n).fill(0);
  // Calculate the maximum profit with one transaction.
  let minPrice = stockPrices[0];
  for (let i = 1; i < n; i++) {
    minPrice = Math.min(minPrice, stockPrices[i]);
    profitOneTransaction[i] = Math.max(profitOneTransaction[i - 1], stockPrices[i] - minPrice);
  }
  // Calculate the maximum profit with two transactions.
  let maxPrice = stockPrices[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxPrice = Math.max(maxPrice, stockPrices[i]);
    profitTwoTransactions[i] = Math.max(profitTwoTransactions[i + 1], maxPrice - stockPrices[i]);
  }
  // Calculate the maximum overall profit by iterating through each day and calculating the total profit with two transactions.
  let maxProfit = 0;
  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, profitOneTransaction[i] + profitTwoTransactions[i]);
  }
  return maxProfit;
}

//"Algorithmic Stock Trader IV"
function algorithmicStockTrader4(array) {
  let k = array[0]; // k is number of transactions
  let prices = array[1];
  let n = prices.length;
  if (n === 0 || k === 0) return 0;
  // If k is greater than or equal to half of the number of days,
  // we can perform as many transactions as we want (as long as there is profit).
  if (k >= Math.floor(n / 2)) {
    let maxProfit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        maxProfit += prices[i] - prices[i - 1];
      }
    }
    return maxProfit;
  }
  // Initialize the DP array with 0 values.
  let dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0));
  // Fill in the DP array using the dynamic programming formula.
  for (let i = 1; i <= k; i++) {
    let maxDiff = -prices[0];
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
      maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
    }
  }
  return dp[k][n - 1];
}

//"Minimum Path Sum in a Triangle"
function minimumPathSumInATriangle(triangle) {
  let n = triangle.length;
  // Start from the second-to-last row and update values from bottom to top
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // Calculate the minimum path sum from the current element to the bottom row
      triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
    }
  }
  // The top element will now contain the minimum path sum
  return triangle[0][0];
}

//"Unique Paths in a Grid I"
function uniquePathsInAGrid(array) {
  let rows = array[0];
  let columns = array[1];
  // Create a 2D array to store the number of unique paths
  let dp = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  // There is only one way to reach the top-left corner
  dp[0][0] = 1;
  // Calculate the number of unique paths for each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i > 0) { dp[i][j] += dp[i - 1][j]; }
      // Add the number of paths from above
      if (j > 0) { dp[i][j] += dp[i][j - 1]; }
      // Add the number of paths from the left
    }
  }
  // The bottom-right corner contains the number of unique paths
  return dp[rows - 1][columns - 1];
}

//"Unique Paths in a Grid II"
function uniquePathsInAGrid2(grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  // Create a 2D array to store the number of unique paths
  let dp = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  // Set the number of unique paths for the top-left corner
  dp[0][0] = grid[0][0] === 0 ? 1 : 0;
  // Calculate the number of unique paths for each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 0) {
        if (i > 0) {
          dp[i][j] += dp[i - 1][j]; // Add the number of paths from above
        }
        if (j > 0) {
          dp[i][j] += dp[i][j - 1]; // Add the number of paths from the left
        }
      }
    }
  }
  // The bottom-right corner contains the number of unique paths
  return dp[rows - 1][columns - 1];
}

//"Shortest Path in a Grid"
function shortestPathInAGrid(grid) {
  let numRows = grid.length;
  let numCols = grid[0].length;
  let visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
  let directions = ['U', 'D', 'L', 'R'];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let queue = [{ x: 0, y: 0, path: '' }];
  visited[0][0] = true;
  while (queue.length > 0) {
    let { x, y, path } = queue.shift();
    if (x === numRows - 1 && y === numCols - 1) {
      return path; // Found the destination, return the path
    }
    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];
      if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols && grid[newX][newY] === 0 && !visited[newX][newY]) {
        visited[newX][newY] = true;
        queue.push({ x: newX, y: newY, path: path + directions[i] });
      }
    }
  }
  return ''; // No path found
}

//"Sanitize Parentheses in Expression"
function sanitizeParenthesesInExpression(string) {
  function isValid(str) {
    let count = 0;
    for (let char of str) {
      if (char === '(') { count++; }
      else if (char === ')') {
        count--;
        if (count < 0) return false;
      }
    }
    return count === 0;
  }
  let result = [];
  let queue = [string];
  let found = false;
  while (queue.length > 0) {
    let levelSize = queue.length;
    let visited = new Set();
    for (let i = 0; i < levelSize; i++) {
      let currentStr = queue.shift();
      if (isValid(currentStr)) {
        result.push(currentStr);
        found = true;
      }
      if (!found) {
        for (let j = 0; j < currentStr.length; j++) {
          if (currentStr[j] === '(' || currentStr[j] === ')') {
            let newStr = currentStr.slice(0, j) + currentStr.slice(j + 1);
            if (!visited.has(newStr)) {
              visited.add(newStr);
              queue.push(newStr);
            }
          }
        }
      }
    }
    if (found) break;
  }
  return result;
}

//"Find All Valid Math Expressions"
function findAllValidMathExpressions(array) {
  function evaluateExpression(expr) {
    let stack = [];
    let num = 0;
    let operator = '+';
    for (let i = 0; i < expr.length; i++) {
      let char = expr[i];
      if (!isNaN(parseInt(char))) {
        num = num * 10 + parseInt(char);
      }
      if (isNaN(parseInt(char)) || i === expr.length - 1) {
        if (operator === '+') { stack.push(num); }
        else if (operator === '-') { stack.push(-num); }
        else if (operator === '*') {
          let prevNum = stack.pop();
          stack.push(prevNum * num);
        }
        num = 0;
        operator = char;
      }
    }
    return stack.reduce((acc, val) => acc + val, 0);
  }
  function generateExpressions(currExpr, index) {
    if (index === digits.length) {
      if (evaluateExpression(currExpr) === target) {
        result.push(currExpr);
      }
      return;
    }
    let digit = digits[index];
    // Case 1: Add operator +
    generateExpressions(currExpr + '+' + digit, index + 1);
    // Case 2: Add operator -
    generateExpressions(currExpr + '-' + digit, index + 1);
    // Case 3: Add operator *
    generateExpressions(currExpr + '*' + digit, index + 1);
    // Case 4: Append digit to the previous number
    if (currExpr.length > 0 && currExpr[currExpr.length - 1] !== '0') {
      generateExpressions(currExpr + digit, index + 1);
    }
  }
  let digits = array[0];
  let target = array[1];
  let result = [];
  generateExpressions(digits[0], 1);
  return result;
}

//"HammingCodes: Integer to Encoded Binary"
function integerToEncodedBinary(integer) {
  // reverse the bits in the number
  let bigint = BigInt(integer);
  let reverse = 0n;
  let ibc = 0n; // integer bit count
  for (; bigint !== 0n; ++ibc) {
    reverse <<= 1n;
    reverse |= bigint & 1n;
    bigint >>= 1n;
  }
  // calculate parity bits, and partially calculate overall parity
  let parity = 0n;
  let op = 0n; // overall parity
  let tbc = 3n; // total bit count
  for (let i = 0n; i !== ibc; ++tbc) {
    // If tbc is not a power of 2
    if (tbc & (tbc - 1n)) {
      let bit = ((reverse >> i) & 1n);
      ++i;
      op ^= bit;
      if (bit) { parity ^= tbc; }
    }
  }
  // merge parity and integer bits, and finish overall parity calculation
  let enc = 0n;
  for (let i = 1n; i !== tbc; ++i) {
    enc <<= 1n;
    if (i & (i - 1n)) {
      enc |= (reverse & 1n);
      reverse >>= 1n;
    } else {
      let pbit = parity & 1n;
      op ^= pbit;
      enc |= pbit;
      parity >>= 1n;
    }
  }
  // set overall parity and conversion stop
  enc |= (op << (tbc - 1n));
  enc |= (1n << tbc);
  // convert to string and remove conversion stop
  return enc.toString(2).slice(1);
}

//"HammingCodes: Encoded Binary to Integer"
function encodedBinaryToInteger(data) {
  let powersoftwo = (new Array(Math.ceil(Math.log2(data)))).fill(0).map((_, i) => 2 ** i);
  let badbits = [];
  for (let i of powersoftwo.filter(x => x < data.length)) {
    let checksum = (new Array(data.length)).fill(0).map((_, i) => i).filter(x => x > i && (i & x)).map(x => parseInt(data.substring(x, x + 1))).reduce((a, b) => a ^ b);
    if (parseInt(data.substring(i, i + 1)) != checksum) {
      badbits.push(i);
    }
  }
  if (badbits.length == 0) { // No error in the data
    let checksum = data.substring(1).split("").map(x => parseInt(x)).reduce((a, b) => a ^ b);
    if (checksum == parseInt(data.substring(0, 1))) {
      let number = data.split("").map(x => parseInt(x));
      for (let i of powersoftwo.filter(x => x < data.length).reverse()) {
        number.splice(i, 1);
      }
      number.splice(0, 1);
      return number.reduce((a, b) => a * 2 + b);
    }
  }
  let badindex = badbits.reduce((a, b) => a | b, 0);
  return encodedBinaryToInteger(data.substring(0, badindex).concat(data.substring(badindex, badindex + 1) == "0" ? "1" : "0").concat(data.substring(badindex + 1)));
}

//"Proper 2-Coloring of a Graph"
function proper2ColoringOfAGraph(array) {
  let numVertices = array[0];
  let edges = array[1];
  let graph = new Array(numVertices).fill(null).map(() => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  let colors = new Array(numVertices).fill(-1);
  function isValidColor(vertex, color) {
    for (let neighbor of graph[vertex]) {
      if (colors[neighbor] === color) {
        return false;
      }
    }
    return true;
  }
  function colorGraphUtil(vertex) {
    for (let color = 0; color <= 1; color++) {
      if (isValidColor(vertex, color)) {
        colors[vertex] = color;
        for (let neighbor of graph[vertex]) {
          if (colors[neighbor] === -1) { colorGraphUtil(neighbor); }
        }
        return true;
      }
    }
    return false;
  }
  for (let vertex = 0; vertex < numVertices; vertex++) {
    if (colors[vertex] === -1 && !colorGraphUtil(vertex)) { return []; }
  }
  return colors;
}

//"Compression I: RLE Compression"
function compressionRLE(inputString) {
  function getCountString(count) {
    if (count <= 9) { return count.toString(); }
    else { return "9" + currentChar + getCountString(count - 9); }
  }
  if (!inputString) { return ""; }
  let encodedString = "";
  let currentChar = inputString[0];
  let count = 1;
  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === currentChar) {
      count++;
    } else {
      encodedString += getCountString(count) + currentChar;
      currentChar = inputString[i];
      count = 1;
    }
    // When we reach the end of the string, add the last run
    if (i === inputString.length - 1) {
      encodedString += getCountString(count) + currentChar;
    }
  }
  return encodedString;
}

//"Compression II: LZ Decompression"
function decompressionLZ(compressedString) {
  let plain = "";
  for (let i = 0; i < compressedString.length;) {
    let literal_length = compressedString.charCodeAt(i) - 0x30;
    if (literal_length < 0 || literal_length > 9 || i + 1 + literal_length > compressedString.length) {
      return null;
    }
    plain += compressedString.substring(i + 1, i + 1 + literal_length);
    i += 1 + literal_length;
    if (i >= compressedString.length) {
      break;
    }
    let backref_length = compressedString.charCodeAt(i) - 0x30;
    if (backref_length < 0 || backref_length > 9) {
      return null;
    } else if (backref_length === 0) {
      ++i;
    } else {
      if (i + 1 >= compressedString.length) {
        return null;
      }
      let backref_offset = compressedString.charCodeAt(i + 1) - 0x30;
      if ((backref_length > 0 && (backref_offset < 1 || backref_offset > 9)) || backref_offset > plain.length) {
        return null;
      }
      for (let j = 0; j < backref_length; ++j) {
        plain += plain[plain.length - backref_offset];
      }
      i += 2;
    }
  }
  return plain;
}

//"Compression III: LZ Compression"
function compressionLZ(plain) {
  // compress plaintest string
  // for state[i][j]:
  //      if i is 0, we're adding a literal of length j
  //      else, we're adding a backreference of offset i and length j
  let cur_state = Array.from(Array(10), () => Array(10).fill(null));
  let new_state = Array.from(Array(10), () => Array(10));

  function set(state, i, j, str) {
    const current = state[i][j];
    if (current == null || str.length < current.length) {
      state[i][j] = str;
    } else if (str.length === current.length && Math.random() < 0.5) {
      // if two strings are the same length, pick randomly so that
      // we generate more possible inputs to Compression II
      state[i][j] = str;
    }
  }

  // initial state is a literal of length 1
  cur_state[0][1] = "";

  for (let i = 1; i < plain.length; ++i) {
    for (const row of new_state) {
      row.fill(null);
    }
    const c = plain[i];

    // handle literals
    for (let length = 1; length <= 9; ++length) {
      const string = cur_state[0][length];
      if (string == null) {
        continue;
      }

      if (length < 9) {
        // extend current literal
        set(new_state, 0, length + 1, string);
      } else {
        // start new literal
        set(new_state, 0, 1, string + "9" + plain.substring(i - 9, i) + "0");
      }

      for (let offset = 1; offset <= Math.min(9, i); ++offset) {
        if (plain[i - offset] === c) {
          // start new backreference
          set(new_state, offset, 1, string + String(length) + plain.substring(i - length, i));
        }
      }
    }

    // handle backreferences
    for (let offset = 1; offset <= 9; ++offset) {
      for (let length = 1; length <= 9; ++length) {
        const string = cur_state[offset][length];
        if (string == null) {
          continue;
        }

        if (plain[i - offset] === c) {
          if (length < 9) {
            // extend current backreference
            set(new_state, offset, length + 1, string);
          } else {
            // start new backreference
            set(new_state, offset, 1, string + "9" + String(offset) + "0");
          }
        }

        // start new literal
        set(new_state, 0, 1, string + String(length) + String(offset));

        // end current backreference and start new backreference
        for (let new_offset = 1; new_offset <= Math.min(9, i); ++new_offset) {
          if (plain[i - new_offset] === c) {
            set(new_state, new_offset, 1, string + String(length) + String(offset) + "0");
          }
        }
      }
    }

    const tmp_state = new_state;
    new_state = cur_state;
    cur_state = tmp_state;
  }

  let result = null;

  for (let len = 1; len <= 9; ++len) {
    let string = cur_state[0][len];
    if (string == null) {
      continue;
    }

    string += String(len) + plain.substring(plain.length - len, plain.length);
    if (result == null || string.length < result.length) {
      result = string;
    } else if (string.length == result.length && Math.random() < 0.5) {
      result = string;
    }
  }

  for (let offset = 1; offset <= 9; ++offset) {
    for (let len = 1; len <= 9; ++len) {
      let string = cur_state[offset][len];
      if (string == null) {
        continue;
      }

      string += String(len) + "" + String(offset);
      if (result == null || string.length < result.length) {
        result = string;
      } else if (string.length == result.length && Math.random() < 0.5) {
        result = string;
      }
    }
  }

  return result ?? "";
}

//"Encryption I: Caesar Cipher"
function caesarCipher(array) {
  let plaintext = array[0];
  let shift = array[1];
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ciphertext = '';
  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i].toUpperCase();
    if (char === ' ') {
      ciphertext += ' ';
    } else {
      let index = alphabet.indexOf(char);
      let shiftedIndex = (index - shift + 26) % 26; // To handle negative values and wrap around the alphabet
      ciphertext += alphabet[shiftedIndex];
    }
  }
  return ciphertext;
}

//"Encryption II: Vigenère Cipher"
function vigenereCipher(array) {
  let plaintext = array[0];
  let keyword = array[1];
  // Remove any spaces from the plaintext and convert it to uppercase
  plaintext = plaintext.replace(/\s/g, '').toUpperCase();
  // Repeat the keyword to match the length of the plaintext
  keyword = (keyword.repeat(Math.ceil(plaintext.length / keyword.length))).substr(0, plaintext.length);
  // Create the Vigenère square
  let vigenereSquare = Array.from({ length: 26 }, (_, i) => {
    return Array.from({ length: 26 }, (_, j) => String.fromCharCode(((i + j) % 26) + 65));
  });
  // Encrypt the plaintext using the keyword
  let ciphertext = '';
  for (let i = 0; i < plaintext.length; i++) {
    let row = plaintext.charCodeAt(i) - 65;
    let col = keyword.charCodeAt(i) - 65;
    ciphertext += vigenereSquare[row][col];
  }
  return ciphertext;
}
