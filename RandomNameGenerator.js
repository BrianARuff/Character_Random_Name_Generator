function gen_word(len) {
    const v = "aeiou";
    const c = "bcdfghjklmnpqrstvwxyz";
    let new_word = "";
    for (let i = 0; i < len; i++) {
        if (i == 0) {
            new_word += c[Math.floor(Math.random() * c.length)];
        }
        if (i % 2 === 0 || i % 5 === 0) {
            new_word += v[Math.floor(Math.random() * v.length)];
        } else {
            new_word += c[Math.floor(Math.random() * c.length)];
        }
    }
    return new_word;
}

for (let i = 0; i < 100; i++) {
    let len = [3, 4, 5, 6][Math.floor(Math.random() * 4)];
    console.log(gen_word(len));
}
