setInterval(() => {
	var element = document.querySelector('.content__circle'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

            element.style.background = color;
}, 500 );

setInterval(() => {
    var element2 = document.querySelector('.content__circle2'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

            element2.style.background = color;
}, 1000 );

setInterval(() => {
    var element = document.querySelector('.content'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

            element.style.background = color;
}, 1000 );

setInterval(() => {
    var element = document.querySelector('.content__border-figure'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

            element.style.background = color;
}, 1000 );

setInterval(() => {
    var element = document.querySelector('.content__border-figure2'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

            element.style.background = color;
}, 1000 );