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

const ul = document.getElementsByTagName('ul')[0];
for (let i = 0; i < 100; i++) {
    let len = [3, 4, 5, 6][Math.floor(Math.random() * 4)];
		let word = gen_word(len);
		const li = document.createElement('li');
		li.textContent =  word[0].toUpperCase() + word.slice(1);
		ul.appendChild(li);
}
