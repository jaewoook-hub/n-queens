/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //debugger;
  var solution = new Board({n: n});

  // number of rooks is n
  var nRooks = n;
  // make nxn board
  var board = new Board({n: n});
  var allRows = board.rows();
  // for i = 0 to i = length of board
  for (var row = 0; row < board.get('n'); row++) {
    for (var col = 0; col < board.get('n'); col++) {
      allRows[row][col] = 1;
      if (board.hasColConflictAt(col) || board.hasRowConflictAt(row)) {
        allRows[row][col] = 0;
      }
    }
  }

  solution = board;
  // call colConflicts and rowConflicts on every cell
  // var newBoard = new Board(dimensions -> {n: x});
  // var newBoard = new Board(board -> [[0, 0], [0, 0]]);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  // call find N rooks solution for every space
  // if possible (somehow) don't double count solutions
  // n! possibilities
  // use hasAnyRooksConflicts
  var result = n;
  var factorial = function(num) {
    if (num === 1 || num === 0) { // if n = 0: return 1
      return 1; // if n = 1: return 1
    } else {
      return result = num * factorial(num - 1); // if n = 2: 2 * factorial(1) = 2 * 1 = 2
      // if n = 3: 3 * factorial(2) = 3 * 2 = 6
      // if n = 4: 3 * factorial(3) = 4 * 6 = 24
    }
  };
  factorial(n);
  solutionCount = result;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({n: n});
  var solution = board.rows();

  findSolution (0, n, board, 'hasAnyQueenConflicts', function() {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  });

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({n: n});

  findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


