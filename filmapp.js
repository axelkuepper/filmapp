var x=window.document.addEventListener("DOMContentLoaded", getHome)

function getHome() {
  var teasers_content = [
    {'datum' : '9. Oktober 2015',
     'headline' : 'Private: James Bond braucht Auszeit',
     'teaser_text' : 'In einem durchaus interessanten Interview ließ der Brite keine Zweifel daran, was er im Moment von James bond hält.',
     'link' : '#',
     'image_url' : 'img/teaser1.jpg',
     'alt_text' : ''},
    {'datum' : '7. Oktober 2015',
     'headline' : 'Offizieller Kinostart für Disneys "Die Unglaublichen 2" verkündet',
     'teaser_text' : 'Derweil müssen die Fans von "Toy Story" sich noch etwas länger für den vierten Teil gedulden, da dessen Release verschoben wurde.',
     'link' : '#',
     'image_url' : 'img/teaser2.jpg',
     'alt_text' : ''},
    {'datum' : '7. Oktober 2015',
     'headline' : '"Reboot" für den Terminator',
     'teaser_text' : 'Erfolgreich nur in China: Wegen des überschaubaren Ergebnisses in den USA wird es so schnell keine weiteren "Terminator"-Filme geben.',
     'link' : '#',
     'image_url' : 'img/teaser3.jpg',
     'alt_text' : ''},
    {'datum' : '2. Oktober 2015',
     'headline' : 'Private: "Cars" überholen "Toy Story',
     'teaser_text' : 'Disney lässt Lightning McQueen nd Co. früher als erwartet aus der Boxengasse. Teil drei des Animationserfolgs "Cars" wird bereits im Sommer 2017 in die US-Kinos kommen.',
     'link' : '#',
     'image_url' : 'img/teaser4.jpg',
     'alt_text' : ''}
    ];
  
  var banners_content = [
    {'banner_nummer' : 1,
     'banner_url' : 'img/bond.png',
     'alt_text' : ''
    },
  ];
  
  var banner_element = document.createElement('img');
  banner_element.setAttribute('id', 'main-banner');
  banner_element.setAttribute('src', banners_content[0].banner_url);
  banner_element.setAttribute('alt', banners_content[0].alt_text);
  document.getElementById('main-content').appendChild(banner_element);
  
  var section_element, img_element, article_element, h1_element, h2_element, p_element, br_element, a_element;
  for (var i=0; i<4; i++) {
    section_element = document.createElement('section');
    if (i%2 == 0) {
      section_element.setAttribute('class', 'teaser teaser-links');
    } else {
      section_element.setAttribute('class', 'teaser teaser-rechts');
    }
    img_element = document.createElement('img');
    img_element.setAttribute('src', teasers_content[i].image_url);
    img_element.setAttribute('alt', teasers_content[i].alt_text);
    section_element.appendChild(img_element);
    article_element = document.createElement('article');
    h2_element = document.createElement('h2');
    h2_element.innerHTML = teasers_content[i].datum;
    article_element.appendChild(h2_element);
    h1_element = document.createElement('h1');
    h1_element.innerHTML = teasers_content[i].headline;
    article_element.appendChild(h1_element);
    p_element = document.createElement('p');
    p_element.innerHTML = teasers_content[i].teaser_text;
    br_element = document.createElement('br');
    p_element.appendChild(br_element);
    a_element = document.createElement('a');
    a_element.setAttribute('href', teasers_content[i].link);
    a_element.innerHTML = 'mehr >>>';
    p_element.appendChild(a_element);
    article_element.appendChild(p_element);
    section_element.appendChild(article_element);
    document.getElementById('main-content').appendChild(section_element);
  }    
};

