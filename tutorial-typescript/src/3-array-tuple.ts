/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

//typeinfrence
let list1_1 = [1, 2, 3, 4];

//square bracket
let list1_2: number[];
list1_2 = [1, 2, 3, 4];

//generic array
let list1_3: Array<number>;
list1_3 = [1, 2, 3, 4];
/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */
//typeinfrence
let list2_1 = ['Adi', 'Tono', 'wahyudi', 'lazam'];

//square bracket
let list2_2: string[];
list2_2 = ['Adi', 'Tono', 'wahyudi', 'lazam'];

//generic array
let list2_3: Array<string>;
list2_3 = ['Adi', 'Tono', 'wahyudi', 'lazam'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */
//typeinfrence
let list3_1 = ['hallo', 1, 2, 3];

//square bracket
let list3_2: (string | number)[];
list3_2 = ['hallo', 1, 2, 3];

//generic array
let list3_3: Array<string | number>;
list3_3 = ['hallo', 1, 2, 3];

/**
 * 4. Tuple (array for fixed)
 * ['cordinat', 2, 4, 7]
 */
//tupple cannot  type inference for tuple
let list4_1: [number, string, string, number];
list4_1 = [3, 'abc', 'abc', 4];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

//inline interface
let list5_1: { color: string; index: number }[];

list5_1 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

//generic array

let list5_2: Array<{ color: string; index: number }>;
list5_2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];
/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */
// square bracket
let matrix: number[][];
matrix = [
    [1, 2],
    [3, 4],
];
//generic array
let matrix2: Array<Array<number>>;
matrix2 = [
    [1, 2],
    [3, 4],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

//typeinfrence
let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
