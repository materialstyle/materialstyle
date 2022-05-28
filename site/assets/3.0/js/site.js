function saveOffcanvasScrollPosition() {
  let offcanvas = document.querySelector("#siteOffcanvas .offcanvas-body");

  if (offcanvas) {
    var offcanvasHeight = offcanvas.clientHeight
    var offcanvasActiveLink = document.querySelector('.active')
    var offcanvasActiveLinkTop = offcanvasActiveLink.offsetTop
    var offcanvasActiveLinkHeight = offcanvasActiveLink.clientHeight
    var viewportTop = offcanvasActiveLinkTop
    var viewportBottom = viewportTop - offcanvasHeight + offcanvasActiveLinkHeight

    if (offcanvas.scrollTop > viewportTop || offcanvas.scrollTop < viewportBottom) {
      offcanvas.scrollTop = viewportTop - (offcanvasHeight / 2) + (offcanvasActiveLinkHeight / 2)
    }
  }
}

function lazyLoadImages() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  var active = false;

  const lazyLoad = function () {
    if (active === false) {
      active = true;

      setTimeout(function () {
        lazyImages.forEach(function (lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function (image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  lazyLoad();
  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#top-btn').css('display', 'inline-block');
  } else {
    $('#top-btn').css('display', 'none');
  }
}

function getHighlightedText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

function initComponents() {
  // TextField
  var textFieldList = [].slice.call(document.querySelectorAll('.form-control'))
  var textFields = textFieldList.map(function (textField) {
    return new materialstyle.TextField(textField)
  })

  // SelectField
  var selectList = [].slice.call(document.querySelectorAll('.form-select'))
  var selectFields = selectList.map(function (select) {
    return new materialstyle.SelectField(select)
  })

  // Shape
  var shapes = [].slice.call(document.querySelectorAll('.m-shape-container'))
  shapes.map(function (s) {
    new materialstyle.Shape(s)
  })

  // Initialize Ripple
  var rippleSurface = [].slice.call(document.querySelectorAll('.ripple-surface'))
  rippleSurface.map(function (s) {
    new materialstyle.Ripple(s)
  })

  var tabs = [].slice.call(document.querySelectorAll('.nav-tabs'))
  tabs.map(function (tab) {
    new materialstyle.MaterialTab(tab)
  })

  // Popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new materialstyle.Popover(popoverTriggerEl)
  })

  // Progress Bar
  var rainbowList = [].slice.call(document.querySelectorAll('.progress-bar-rainbow'))
  var progressList = rainbowList.map(function (rainbow) {
    return new materialstyle.Rainbow(rainbow)
  })

  // Toast
  var toastTrigger = document.getElementById('show-toast')
  var toastLiveExample = document.getElementById('live-toast')
  if (toastTrigger && toastLiveExample) {
    toastTrigger.addEventListener('click', function () {
      var toast = new materialstyle.Toast(toastLiveExample)

      toast.show()
    })
  }

  // Tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new materialstyle.Tooltip(tooltipTriggerEl)
  })

  // Modal
  var myModal = document.getElementById('myModal2')
  if (myModal) {
    myModal.addEventListener('shown.bs.modal', function (event) {
      // Redraw Text Field
      var textFields = this.querySelectorAll('.form-control');
      for (const [, value] of Object.entries(textFields)) {
        var textFieldInstance = materialstyle.TextField.getOrCreateInstance(value)
        textFieldInstance.redraw();
      }

      // Redraw Select Field
      var selectFields = document.querySelectorAll('.form-select');
      for (const [, value] of Object.entries(selectFields)) {
        var selectFieldInstance = materialstyle.SelectField.getOrCreateInstance(value)
        selectFieldInstance.redraw();
      }

      // Redraw Tabs
      var tabs = this.querySelectorAll('.nav-tabs');
      for (const [, value] of Object.entries(tabs)) {
        var tabInstance = materialstyle.MaterialTab.getOrCreateInstance(value)
        tabInstance.redraw();
      }

    })
  }
}

function populateShadows() {
  let shadowsContainer = document.getElementById('shadows-container');

  if (shadowsContainer) {
    for (i = 1; i <= 24; i++) {
      let shadowBox = document.createElement('div');
      shadowBox.className = 'shadows shadow-' + i + 'dp';
      shadowBox.innerHTML = 'class="shadow-' + i + 'dp"';
      shadowsContainer.append(shadowBox);
    }
  }
}

function populateColors() {
  let colorContainer = document.getElementById('defaultColorOptions');
  if (colorContainer) {
    let bgToColorMap = {
      "red,danger": "#dc3545,white",
      "pink": "#d63384,white",
      "purple": "#6f42c1,white",
      "indigo": "#6610f2,white",
      "blue,primary": "#0d6efd,white",
      "cyan,info": "#0dcaf0,black",
      "teal": "#20c997,black",
      "green,success": "#198754,white",
      "yellow,warning": "#ffc107,black",
      "orange": "#fd7e14,black",
      "gray-dark,dark": "#343a40,white",
      "gray,secondary": "#6c757d,white",
      "black": "#000,white",
      "white": "#fff,black"
    };

    for (const [key, value] of Object.entries(bgToColorMap)) {
      let colorClasses = key.split(',');
      let colors = value.split(',');

      let colorName = document.createElement('span');
      colorName.innerHTML = colorClasses.join(' | ');

      let color = document.createElement('span');
      color.className = 'user-select-all';
      color.innerHTML = colors[0];

      let colorBox = document.createElement('div');
      colorBox.className = 'color-box bg-' + colorClasses[0] + ' text-' + colors[1];
      colorBox.append(colorName);
      colorBox.append(color);

      colorContainer.append(colorBox);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  anchors.add('h2:not(.accordion-header):not(.badge-example-headings h2), h3:not(.badge-example-headings h3), h4:not(.badge-example-headings h4)');

  // Hide AdSpace
  let ad = document.querySelector('.adspace');
  if (ad) {
    ad.innerHTML = '';
    ad.style.display = 'none';
  }

  // Hide / Show "Scroll to top" button
  scrollFunction();
  window.addEventListener('scroll', () => {
    scrollFunction();
  }, {
    passive: true
  })

  lazyLoadImages()
  saveOffcanvasScrollPosition()

  initComponents()

  populateColors()
  populateShadows()
});

$(function () {
  $('.highlight').append('<span class="copy-btn p-1"><b>click</b> or <b>highlight</b> the code to copy</span>');

  $('.highlight').on('click', function () {
    var clip = $("<textarea>");
    $("body").append(clip);

    var highlightedText = getHighlightedText();

    if (highlightedText.length) {
      clip.val(highlightedText.replace(/\u00a0/g, " ")).select();
    } else {
      clip.val($(this).find('code').find('br').prepend('\r\n').end().text().replace(/\u00a0/g, " ")).select();
    }

    document.execCommand("copy");
    $(this).find('.copy-btn').html('<b>copied</b>');

    $(this).find('code').find('br').text('');

    clip.remove();
  });

  $('.highlight').on('mouseenter', function () {
    $(this).find('.copy-btn').html('<b>click</b> or <b>highlight</b> the code to copy');
  });

  $('#top-btn').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 300, 'swing');
  });
});
