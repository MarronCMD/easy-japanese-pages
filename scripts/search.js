var articleList = [
    {
        name: 'When introducing yourself',
        number: '01',
        img: '01/art01.jpg'
    },
    {
        name: 'When conveying your Japanese language ability',
        number: '02',
        img: '01/art02.jpg'
    },
    {
        name: 'When asking someone to repeat or confirm something',
        number: '03',
        img: '01/art03.jpg'
    },
    {
        name: 'When seeking help',
        number: '04',
        img: '01/art04.jpg'
    },
    {
        name: 'When being guided or moving',
        number: '05',
        img: '01/art05.jpg'
    },
    {
        name: 'When closing',
        number: '06',
        img: '01/art06.jpg'
    },
    {
        name: 'When you can\'t hear or understand',
        number: '07',
        img: '02/art01.jpg'
    },
    {
        name: 'When you want the explanation changed',
        number: '08',
        img: '02/art02.jpg'
    },
    {
        name: 'When talking about blackboard writing, notes, and handouts',
        number: '09',
        img: '02/art03.jpg'
    },
    {
        name: 'When talking about assignments or homework',
        number: '10',
        img: '02/art04.jpg'
    },
    {
        name: 'When speaking or participating',
        number: '11',
        img: '02/art05.jpg'
    },
    {
        name: 'When feeling unwell',
        number: '12',
        img: '02/art06.jpg'
    }
]

arts = document.getElementById('arts');
var addLists = function (contents) {
    const path ="../images/sect/"
    var html = '';
    for (i = 0; i < contents.length; i++) {
        html += '<label class="art-label" for="art' + contents[i].number + '-popup"><div class="art" id="art' + contents[i].number + '"><img class="art-img" src="' + path + contents[i].img + '"><h3 class="art-heading">' + contents[i].name + '</h3></div></label>';
    }
    arts.insertAdjacentHTML('afterbegin', html);
}
addLists(articleList);

const searchBox = document.getElementById('main-search-box');
const wrapperContents = document.querySelectorAll('.art-label');

function convertString(str) {
    return str
        .replace(/[\u30a1-\u30f6]/g, match => String.fromCharCode(match.charCodeAt(0) - 0x60))
        .normalize('NFKC')
        .toLowerCase();
}

searchBox.addEventListener('input', function () {
    const query = convertString(searchBox.value);
    const inputwords = query.split(/[\s\u3000]+/).filter(inputword => inputword);

    if (query.trim() === '') {
        for (i = 0; i < wrapperContents.length; i++) {
            wrapperContents[i].classList.remove('hidden');
        }
    } else {
        for (i = 0; i < wrapperContents.length; i++) {
            const contentName = convertString(wrapperContents[i].textContent);
            const hit = inputwords.some(inputword => contentName.includes(inputword));
            if (hit) {
                wrapperContents[i].classList.remove('hidden');
            } else {
                wrapperContents[i].classList.add('hidden');
            }
        }
    }
});

var humberger = document.getElementById('header-humberger');
var humbergerClose = document.getElementById('nav-close');
var nav = document.getElementById('nav');
var navBackground = document.getElementById('nav-bg');
humberger.onclick = function () {
    if (nav.style.left == "0")
    {
        nav.style.left = "-100%";
        navBackground.style.display = "none";
    }
    else {
        nav.style.left = "0";
        navBackground.style.display = "unset";
    }
}

humbergerClose.onclick = function () {
    nav.style.left = "-100%";
    navBackground.style.display = "none";
}
navBackground.onclick = function () {
    nav.style.left = "-100%";
    navBackground.style.display = "none";
}