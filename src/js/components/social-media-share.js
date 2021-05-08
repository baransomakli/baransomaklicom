function FacebookShare() {
  $('.facebook-share').on('click', function () {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${document.URL}`,
      '',
      'height=550,width=525,left=100,top=100,menubar=0',
    );
  });
}

function TwitterShare() {
  $('.twitter-share').on('click', function () {
    window.open(`https://twitter.com/share?url=${document.URL}`, 'twitter-popup', 'height=350,width=600');
  });
}

function WhatsAppShare() {
  $('.whatsapp-share').on('click', function (e) {
    var text = $(this).attr('data-text');
    var phone = $(this).attr('data-phone');

    var windowWidth = $(window).width();
    if (windowWidth >= 1024) {
      window.open(
        `https://web.whatsapp.com/send?phone=${phone}&text=${text}`,
        'whatsapp-popup',
        'height=768,width=1024',
      );
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=${phone}&text=${text}`,
        'whatsapp-popup',
        'height=768,width=1024',
      );
    }
  });
}

function LinkedInShare() {
  $('.linkedin-share').on('click', function () {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${document.URL}`, '', 'height=350,width=600');
  });
}

function SocialMediaShare() {
  return [FacebookShare(), TwitterShare(), WhatsAppShare(), LinkedInShare()];
}
