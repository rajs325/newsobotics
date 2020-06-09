var px;

function myClean() {
  //px.style.display = "block";
  var children = document.getElementById("all-sections").children
  for (var i = 0; i < children.length; i++) {
      children[i].style.display = "none";
  }
  window.px = 'TopStories';
  var x = document.getElementById(window.px);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction(elementId) {
  //px.style.display = "block";
  var children = document.getElementById("all-sections").children
  for (var i = 0; i < children.length; i++) {
      children[i].style.display = "none";
  }
  var x = document.getElementById(elementId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  window.px = elementId;
}

function myFunction2(elementId, data, heading, reload) {
}
function fetch(elementId, data, heading) {
  const app = document.getElementById(elementId);

  //const logo = document.createElement('img');
  //logo.setAttribute('class', 'center');
  //logo.setAttribute('style', 'height:20%;padding-bottom:10px;');
  //logo.src = 'logo.png';

  const container = document.createElement('div');
  container.setAttribute('class', 'container-fluid');

  const card_columns = document.createElement('div');
  card_columns.setAttribute('class', 'card-columns');
  card_columns.setAttribute('style', 'padding:10px 20px');

  const h1div = document.createElement('div');
  h1div.setAttribute('style', 'width:100%; border-bottom: 1px solid #707070;');
  const h1 = document.createElement('h1');
  h1div.appendChild(h1);

  h1.textContent = '\xa0\xa0' + heading;
  //app.appendChild(logo);
  app.appendChild(container);
  container.appendChild(h1div);
  container.appendChild(card_columns);

  //var request = new XMLHttpRequest();
  //request.withCredentials = true;
  //request.open('GET', 'https://x9lx3yf7sr:h3yas5ptyy@newsobotics-4731548659.us-east-1.bonsaisearch.net:443/news/_search?q='+term+'&sort=_seq_no&from=0&size=20', true);
  //request.onload = function () {

    // Begin accessing JSON data here
    //var data = JSON.parse(this.response);
    //data = data.hits.hits;
    //if (request.status >= 200 && request.status < 400) {
  //data.forEach(item => {
  var max = data.length;
  var damp = max > 100 ? 3 : 2;
  var max25 = max / (4 * damp) /*6*/;
  var max50 = max / (2 * damp)/*12*/;
  var max75 = max * 3 / (4 * damp) /*18*/;
  var start = Math.floor(Math.random() * 100);
  start = start < 33 ? 0 : start < 66 ? Math.floor(max / 3) : Math.floor(max * 2 / 3);
  //var start = 0;
  //alert("start:"+ start);
  for(index = 0; index < max; index++) {
    var item = data[(start + index) % max];
    var newsItem = item;
    const card = document.createElement('div');
    card.setAttribute('class', 'card border-top-0 border-left-0 border-right-0 border-2');

    //const h1 = document.createElement('h5');
    //h1.textContent = newsItem.title;

    const h4 = document.createElement('h4');

    const p4 = document.createElement('p');
    p4.setAttribute('class', 'card-text small');

    //const p5 = document.createElement('p');
    //p5.setAttribute('class', 'card-text small');
    const p5 = document.createElement('ul');
    p5.setAttribute('class', 'card-text small');
    var children = newsItem.children;
    if(children != null) {
      var clength = children.length;
      for( ci = 0; ci < clength; ci++) {
        var child = children[ci];
        const li = document.createElement('li');
        const cahref = document.createElement('a');
        cahref.setAttribute('href', child.link);
        cahref.setAttribute('target','_blank');
        cahref.textContent = ' ' + child.title;
        li.appendChild(cahref);
        p5.appendChild(li);
      }
      //p5.appendChild(ul);
    }

    const ahref = document.createElement('a');
    ahref.setAttribute('href', newsItem.link);
    ahref.setAttribute('target','_blank');
    ahref.textContent = ' ' + newsItem.title;


    const img = document.createElement('img');
    if(newsItem.mediaURL != 'null') {
      img.setAttribute('class', 'card-image-top');
      img.setAttribute('style', 'width:100%;padding-bottom:10px;');
      img.src = newsItem.mediaURL;
    }

    const source = document.createElement('span');
    source.setAttribute('class', 'badge badge-primary');
    source.textContent = newsItem.source;

    const ago = document.createElement('span');
    ago.setAttribute('class', 'badge ago');
    ago.textContent = newsItem.ago;

    const p1 = document.createElement('p');
    p1.appendChild(source);
    p1.appendChild(ago);

    const p2 = document.createElement('p');
    p2.setAttribute('class', 'card-text h5');
    p2.textContent = newsItem.description + '\n';
    const br = document.createElement('br');

    if(index < max25) {
      h4.appendChild(ahref);
      card.appendChild(img);
      card.appendChild(h4);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p5);
      card.appendChild(br);
    } else if(index < max50) {
      p4.appendChild(ahref);
      card.appendChild(img);
      card.appendChild(p4);
      card.appendChild(p5);
    } else if(index < max75) {
      h4.appendChild(ahref);
      card.appendChild(h4);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p5);
      card.appendChild(br);
    } else {
      //card.appendChild(p1);
      //card.appendChild(p2);
      //card.appendChild(br);
      p4.appendChild(ahref);
      card.appendChild(p4);
      card.appendChild(p5);
    }

    card_columns.appendChild(card);
  }

  //myFunction(elementId);
}

function fetch2(element, term, heading) {
}

function fetch2x(element, term, heading) {
  const app = document.getElementById(element);

  //const logo = document.createElement('img');
  //logo.setAttribute('class', 'center');
  //logo.setAttribute('style', 'height:20%;padding-bottom:10px;');
  //logo.src = 'logo.png';

  const container = document.createElement('div');
  container.setAttribute('class', 'container-fluid');

  const card_columns = document.createElement('div');
  card_columns.setAttribute('class', 'card-columns');
  card_columns.setAttribute('style', 'padding:10px 20px');

  const h1 = document.createElement('h1');
  h1.textContent = '\xa0\xa0' + heading;
  //app.appendChild(logo);
  app.appendChild(container);
  container.appendChild(h1);
  container.appendChild(card_columns);

  var request = new XMLHttpRequest();
  request.withCredentials = true;
  request.open('GET', 'https://x9lx3yf7sr:h3yas5ptyy@newsobotics-4731548659.us-east-1.bonsaisearch.net:443/news/_search?q='+term+'&from=0&size=40', false);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.responseText);
    data = data.hits.hits;
    if (request.status >= 200 && request.status < 400) {
      //var index = 0;
      //data.forEach(movie => {
      for(index = 0; index < data.length; index++) {
        //var movie = data[index];
        movie = data[index];
        var newsItem = movie._source;
        const card = document.createElement('div');
        card.setAttribute('class', 'card border-top-0 border-left-0 border-right-0 border-3');

        //const h1 = document.createElement('h5');
        //h1.textContent = newsItem.title;

        const h4 = document.createElement('h4');
        const ahref = document.createElement('a');
        ahref.setAttribute('href', newsItem.link);
        ahref.textContent = ' ' + newsItem.title;
        h4.appendChild(ahref);


        if(newsItem.mediaURL != 'null') {
          const img = document.createElement('img');
          img.setAttribute('class', 'card-image-top');
          img.setAttribute('style', 'width:100%;padding-bottom:10px;');
          img.src = newsItem.mediaURL;
          card.appendChild(img);
        }

        const source = document.createElement('span');
        source.setAttribute('class', 'badge badge-primary');
        source.textContent = newsItem.source;

        const ago = document.createElement('span');
        ago.setAttribute('class', 'badge ago');
        ago.textContent = newsItem.ago;

        const p1 = document.createElement('p');
        p1.appendChild(source);
        p1.appendChild(ago);

        const p2 = document.createElement('p');
        p2.setAttribute('class', 'card-text h5');
        p2.textContent = newsItem.description + '\n';
        const br = document.createElement('br');

        card.appendChild(h4);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(br);
        card_columns.appendChild(card);
        //index++;
      //});
      }
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }

  request.send();
}