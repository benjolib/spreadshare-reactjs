 window.initOnOffSwitches = function() {
    var $NoSwitch = $('.NSwitch');
    var $YesSwitch = $('.YSwitch');

    $NoSwitch.click(function () {
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $this.toggleClass('active');
        $this.toggleClass('animated bounceIn');
        $this.prev().removeClass('active animated bounceIn');
        //$this.prop('disabled', true);
        //$this.prev().prop('disabled', false);
        $('input[name="' + $this.attr('data-name') + '"]').prop('value', '0');
      }
    });

    $YesSwitch.click(function () {
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $this.toggleClass('active');
        $this.toggleClass('animated bounceIn');
        $this.next().removeClass('active animated bounceIn');
        //$this.prop('disabled', true);
        //$this.next().prop('disabled', false);
        $('input[name="' + $this.attr('data-name') + '"]').prop('value', '1');
      }
    });
  }

  $(document).ready(function () {
    $('.__page__sidebar').stickySidebar({
      topSpacing: 60,
      bottomSpacing: 60
    });

    $(".__page__sidebar ul li").click(function () {
      $(".__page__sidebar ul li").removeClass('active');
      $(this).addClass('active');
    });

    var timer;
    var delay = 0; // 0.6 seconds delay after last input
    // autoCompleteHandler to handle response
    function autoCompleteHandler(response) {

      // search item list selector
      var searchItems = $('#search-items');
      // hits object
      // Insert total results value
      $('.result-count').html(response.data.hits.total + " RESULTS");
      // create item array
      var items = [];
      // empty the existing list
      $(searchItems).empty();
      // foreach array
      $.each(response.data.hits.hits, function (key, val) {
        // item
        items.push("<a href='/list/" + val._id + "'><div class='item'><div class='title'>" + val._source.title + "</div><div class='tagline'>" + val._source.tagline + "</div></div></a>");
      });
      // append list to array
      $(searchItems).append(items.join(''));

    }

    var searchFieldEl = $("input.navbar__search__field");
    var onSearchPopper = $('.search-autocomplete');
    // On change of the field

    var prevSearch = '';

    $(searchFieldEl).on("change keyup paste", function () {


      /* Popper */
      var searchReferenceElement = $(this);

      var searchEl = $(this).val();

      if (searchEl !== prevSearch ) {
        prevSearch = searchEl;
        if (searchEl.length > 0) {
          // append href link
          $(".all-results").attr('href', '/search?query=' + searchEl + '')
            window.clearTimeout(timer);
            timer = window.setTimeout(function () {
              // AJAX Query
              $.ajax({
                url: "/api/v1/search/",
                method: "GET",
                crossDomain: true,
                dataType: "JSON",
                data: { "query": searchEl.trim() },
                success: function (response) {
                  autoCompleteHandler(response)
                }
              });

            }, delay);

            onSearchPopper.addClass('show');

            new Popper(searchReferenceElement, onSearchPopper, {
              placement: 'bottom-start',
              modifiers: {
                offset: {
                  offset: -26
                }
              }
            });
        }
      }
    });

    //$('.navbar__search').focusout(function() { // if(!flag) onSearchPopper.removeClass('show') });

    /* Profile Menu Popper */
    var referenceElement;
    var popperProfileMenu = $('.profile-menu');

    /* Notifications Popper */
    var refElem;
    var popperNotifications = $('.dropdown--notifications');

    // initial state
    if (window.innerWidth < 1024) {
      referenceElement = $('.navbar__controls__add--menu');
      refElem = $('.navbar__controls__add--notification');
    } else {
      referenceElement = $('.navbar__controls__notification');
      refElem = $('.navbar__controls__add--notification');
    }

    if (popperProfileMenu.length > 0 && popperNotifications.length > 0) {
      // create poppers
      new Popper(referenceElement, popperProfileMenu, {
        placement: 'bottom'
      });
      new Popper(refElem, popperNotifications, {
        placement: 'bottom'
      });

      // event listener
      $(window).resize(function () {
        if (window.innerWidth < 1024) {
          referenceElement = $('.navbar__controls__add--menu');
          refElem = $('.navbar__controls__add--notification');
          popperNotifications.removeClass('left160');
        } else {
          referenceElement = $('.navbar__controls__notification');
          refElem = $('.navbar__controls__add--notification');
        }
        new Popper(referenceElement, popperProfileMenu, {
          placement: 'bottom'
        });
        new Popper(refElem, popperNotifications, {
          placement: 'bottom'
        });
      });

      //toggle menu
      $('#profileImage').click(function () {
        popperNotifications.removeClass('show');
        $(popperProfileMenu).toggleClass('show');
      });
      // toggle notifications
      $('#notificationButton').click(function (ev) {
        popperProfileMenu.removeClass('show');
        $(popperNotifications).toggleClass('show');

        $.get("/api/v1/notifications?p=" + 0, function (data) {
          $(popperNotifications).html(data);
          $('#notificationButton').find('span').remove()
        });
      });
    }

    $(document).bind('click', function (e) {
      var closestSearch = $(e.target).closest('.navbar__search');
      var closestControl = $(e.target).closest('.navbar__controls');
      // If not closest hide popper for search
      if (!closestSearch.length) {
        onSearchPopper.removeClass('show');
      }
      //console.log("closestControl", closestControl.length);
      if (!closestControl.length) {
        popperProfileMenu.removeClass('show');
        popperNotifications.removeClass('show');
      }

    });

    // flash messages timeout
    var time = 150;
    var $flashes = $('.flash__message');
    setTimeout(function () {
      $flashes.each(function (index, item) {
        var $flash = $(item);
        setTimeout(function () {
          $flash.addClass('flash__message--hide');
        }, time * index)
      });
    }, 7000);

    // search bar shadow
    var $searchBar = $('.navbar__search');
    $searchBar.on('focusin', function() {
      $(this).addClass('navbar__search--active');
    });
    $searchBar.on('focusout', function() {
      $(this).removeClass('navbar__search--active');
    });

    // {% if auth.loggedIn() %}
        /* Define API endpoints once and globally */
        $.fn.api.settings.api = {
          'upvote': '/api/v1/vote/{id}',
          'subscribe': '/api/v1/subscribe/{id}',
          'flag': '/table/{id}/flag/{flag}',
          'follow-user': '/api/v1/follow-user/{id}',
          'comment-upvote': '/api/v1/vote-comment/{id}',
          'change-request': '/api/v1/change-request/{id}',
          'staff-pick': '/api/v1/staff-pick/{id}',
        };

        $('a.comment-upvote').api({
          method: 'POST',
          onSuccess: function (response, button) {
            var span = button.find('span');
            if (response.data.voted) {
              span.text(parseInt(parseInt(span.text()) + 1));
            } else {
              span.text(parseInt(parseInt(span.text()) - 1));
            }
          },
        });

        $('div.upvote, button.upvote').api({
          method: 'POST',
          onSuccess: function (response, button) {
            var span = button.find('span');
            if (response.data.voted) {
              button.addClass('selected');
              button.find('.chevronUp').find('svg').find('.fillColor').addClass('white');
              span.text(parseInt(parseInt(span.text()) + 1));
            } else {
              button.removeClass('selected');
              button.find('.chevronUp').find('svg').find('.fillColor').removeClass('white');
              span.text(parseInt(parseInt(span.text()) - 1));
            }
          },
        });
        $('button.subscribe').api({
          method: 'POST',
          action: 'subscribe',
          onSuccess: function (response, button) {
            button.toggleClass('subscribed');
          },
        });
        $('button.follow-user').api({
          method: 'POST',
          action: 'follow-user',
          onSuccess: function (response, button) {
            $(button).toggleClass('selected').toggleClass('following-user').toggleClass('not-following-user');
          },
        });
        $('button.review-change-request').api({
          method: 'POST',
          action: 'change-request',
          beforeSend: function (settings) {
            settings.data = {
              comment: $('.changelog-comment-' + $(this).data('id')).val(),
              type: $(this).data('type')
            };
            return settings;
          },
          onSuccess: function (response, button) {
            location.reload();
          },
        });
        $('button.staff-pick').api({
          method: 'POST',
          action: 'staff-pick',
          onSuccess: function (response, button) {
            location.reload();
          },
        });
    // {% endif %}
  });

  if (window.location.pathname.includes('signup')) {
    var navControls = document.getElementsByClassName('navbar__controls')[0];
    navControls.style.visibility = 'hidden';
    var onboardButton = document.getElementById('continueOnboard');
    onboardButton.style.position = 'fixed';
    onboardButton.style.top = '36px';
    onboardButton.style.zIndex = '3';
    var navbar = document.getElementsByClassName('navbar')[0];
    navbar.style.position = 'fixed';
    navbar.style.zIndex = '2';
    var foundABug = document.getElementsByClassName('found-a-bug')[0];
    foundABug.style.display = 'none';
  };

  $(document).ready(function () {
    // pops

    window.bindPops = function () {
      $('.l-button:not(.bound)').each(function () {
        var $button = $(this);
        // default select l-dropdown under button
        var $dropdown = $button.next('.l-dropdown');
        // if specified use the target dropdown instead
        if ($button.data('dropdown-target')) {
          $dropdown = $($button.data('dropdown-target'));
        }

        new Popper($button, $dropdown, {
          placement: $button.data('dropdown-placement') || 'bottom-end',
          modifiers: {
            offset: {
              offset: Number($button.data('dropdown-offset')) || 0
            }
          }
        });

        $button.click(function () {
          console.log('open dropdown');
          $('.l-dropdown').removeClass('show');
          $dropdown.addClass('show');
          if ($button.data('dropdown-active-class')) {
            $button.addClass($button.data('dropdown-active-class'));
          }
        });

        $button.addClass('bound');
      });
    };

    window.bindPops();


    var hidePopover = function(element, e){
      if (!$(element).is(e.target) && $(element).has(e.target).length === 0 && !$('.l-button').is(e.target) && $('.l-button').has(e.target).length === 0){
        $(element).removeClass('show');
      }
    }

    $('body').on('click', function (e) {
      console.log('click anywhere close');
      $('.l-dropdown').each(function (index, el) {
        hidePopover(el, e);
      });
      $('.l-button').each(function (index, item) {
        var $item = $(item);
        if (!$item.is(e.target) && $item.has(e.target).length === 0 && !$('.l-dropdown').is(e.target) && $('.l-dropdown').has(e.target).length === 0){
          if ($item.data('dropdown-active-class') && $item.hasClass($item.data('dropdown-active-class'))) {
            $item.removeClass($item.data('dropdown-active-class'));
          }
        }
      });
    });

    $('.re-header__search').on('click', function (e) {
      e.preventDefault();
      $('.re-header__search-open').show();
      $("input.navbar__search__field").focus();
    });

    $('.search-close').on('click', function (e) {
      e.preventDefault();
      $('.re-header__search-open').hide();
      $("input.navbar__search__field").val("");
    });

    window.createAlert = function (type, heading, text, timeout) {
      if (type !== 'notice' && type !== 'warning' && type !== 'success' && type !== 'error') {
        console.error('createAlert fail: use a type (arg 0) of notice, warning, success or error');
        return;
      }

      if (!heading) {
        console.error('createAlert fail: supply a heading (arg 1)');
        return;
      }

      if (!text) {
        console.error('createAlert fail: supply text (arg 2)');
        return;
      }

      timeout = timeout || 5000;

      var $flashMessage = $(
        '<div class="flash__message flash__message--' + type + ' flash__message--hide">' +
          '<div class="flash__message__heading">' + heading + '</div>' +
          '<div class="flash__message__text">' + text + '</div>' +
        '</div>'
      );

      $('.flash').prepend($flashMessage);
      setTimeout(function () {
        $flashMessage.removeClass('flash__message--hide');
      }, 0);
      setTimeout(function () {
        $flashMessage.addClass('flash__message--hide');
        setTimeout(function () {
          $flashMessage.remove();
        }, 500);
      }, timeout);
    };
  });
