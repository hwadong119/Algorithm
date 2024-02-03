function d(n) {
    let result = n;
    let left = 0;
    while (n) {
        left += n % 10;
        n = Math.floor(n / 10);
    }

    return result + left;
}

function solution(number) {
    const map = new Map(new Array(10000).fill(0).map((_, i) => [i+1, true]));
    // Map(10000) {
    //     1 => true,
    //     2 => true,
    //     3 => true, ... 10000 => true }
    let answer = "";
    for (let i = 1; i <= number; i++) {
        map.delete(d(i));
    }
    for (const key of map.keys()) {
        answer += key + "\n";
    }

    return answer;
 }

console.log(solution(10000))
