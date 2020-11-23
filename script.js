const playerInstance = jwplayer("player").setup({
  controls: true,
  displaytitle: false,
  fullscreen: "true",
  primary: "html5",
  stretching: "uniform",
  aspectratio: "16:9",
  renderCaptionsNatively: false,
  autostart: false,
  abouttext: "Creator Website",
  aboutlink: "https://www.facebook.com/Sickboy.LoL",

  skin: {
    name: "netflix"
  },

  logo: {
    file: "#"
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      image:
        "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
      sources: [
        {
          file:
            "http://d10.uptofiles.site//files/Tamil%20Dubbed%20Movies/Angels%20Fallen%20(2020)/Angels%20Fallen%20(480x320)/Angels%20Fallen%202020.mp4",
          label: "1080p FHD",
          default: true
        },
        {
          file:
            "http://d10.uptofiles.site//files/Tamil%20Dubbed%20Movies/Angels%20Fallen%20(2020)/Angels%20Fallen%20(480x320)/Angels%20Fallen%202020.mp4",
          label: "720p HD"
        },
        {
          file:
            "http://d10.uptofiles.site//files/Tamil%20Dubbed%20Movies/Angels%20Fallen%20(2020)/Angels%20Fallen%20(480x320)/Angels%20Fallen%202020.mp4",
          label: "480p SD"
        }
      ],
      captions: [
        {
          file:
            "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
          label: "English",
          kind: "captions",
          default: true
        },
        {
          file:
            "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
          label: "Français",
          kind: "captions"
        }
      ]
    }
  ]
});

playerInstance.on("ready", function () {
  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);
});