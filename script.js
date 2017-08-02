SC.initialize({
  client_id: 'kqy0xrp2dSWAkoDcFZYTSqwIBiFZOFky'
});

SC.stream('/tracks/288944959').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background1").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background1").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
    $("#background1").click(function(e) {
    scPlayer.pause();
  });
});

SC.stream('/tracks/293752762').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background2").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background2").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
    $("#background2").click(function(e) {
    scPlayer.pause();
  });
});

SC.stream('/tracks/295842614').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background3").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background3").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
    $("#background3").click(function(e) {
    scPlayer.pause();
  });
});

SC.stream('/tracks/297563696').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background4").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background4").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
    $("#background4").click(function(e) {
    scPlayer.pause();
  });
});

SC.stream('/tracks/300123736').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background5").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background5").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
    $("#background5").click(function(e) {
    scPlayer.pause();
  });
});

SC.stream('/tracks/302915987').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background6").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background6").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
    $("#background6").click(function(e) {
    scPlayer.pause();
  });
});

SC.stream('/tracks/304901526').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background7").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background7").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
    $("#background7").click(function(e) {
    scPlayer.pause();
  });
});

SC.stream('/tracks/304901526').then(function(scPlayer) {
    if (scPlayer.options.protocols[0] === 'rtmp') {
        scPlayer.options.protocols.splice(0, 1);
    }
    $("#background8").mouseover(function(e) {
    e.preventDefault();
    scPlayer.play();
  });
    $("#background8").mouseleave(function(e) {
    e.preventDefault();
    scPlayer.pause();
  });
});

  var controller = new ScrollMagic.Controller();  

  var tween = TweenMax.to('#background1', 0.5, {
  });
  
  var scene1 = new ScrollMagic.Scene({
      triggerElement: '#page1',
      triggerHook: 'onEnter',
      offset: 250
      
  })
  
  .setClassToggle('body', 'background-1-active')
  .setTween(tween)
  .addTo(controller);

  var tween = TweenMax.to('#background2', 0.5, {
  });
  
  var scene2 = new ScrollMagic.Scene({
      triggerElement: '#page2',
      triggerHook: 'onEnter',
      offset: 250
      
  })
  
  .setClassToggle('body', 'background-2-active')
  .setTween(tween)
  .addTo(controller);

  var tween = TweenMax.to('#background3', 0.5, {
  });
  
  var scene3 = new ScrollMagic.Scene({
      triggerElement: '#page3',
      triggerHook: 'onEnter',
      offset: 250
      
  })
  
  .setClassToggle('body', 'background-3-active')
  .setTween(tween)
  .addTo(controller);

  var tween = TweenMax.to('#background4', 0.5, {
  });
  
  var scene4 = new ScrollMagic.Scene({
      triggerElement: '#page4',
      triggerHook: 'onEnter',
      offset: 250
      
  })
  
  .setClassToggle('body', 'background-4-active')
  .setTween(tween)
  .addTo(controller);

  var tween = TweenMax.to('#background5', 0.5, {
  });
  
  var scene5 = new ScrollMagic.Scene({
      triggerElement: '#page5',
      triggerHook: 'onEnter',
      offset: 250
      
  })
  
  .setClassToggle('body', 'background-5-active')
  .setTween(tween)
  .addTo(controller);

var scene6 = new ScrollMagic.Scene({
      triggerElement: '#page6',
      triggerHook: 'onEnter',
      offset: 250
      
  })
  
  .setClassToggle('body', 'background-6-active')
  .setTween(tween)
  .addTo(controller);

var scene7 = new ScrollMagic.Scene({
      triggerElement: '#page7',
      triggerHook: 'onEnter',
      offset: 250
      
  })
  
  .setClassToggle('body', 'background-7-active')
  .setTween(tween)
  .addTo(controller);

//scene1.addIndicators();
//scene2.addIndicators();
//scene3.addIndicators();
//scene4.addIndicators();
//scene5.addIndicators();
//scene6.addIndicators();
//scene7.addIndicators();