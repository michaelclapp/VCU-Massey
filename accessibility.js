// Remove presentational attributes from all iframes
function formatIframes() {
    // Grab all iframes on the page
    var iframes =    $('iframe'),
        attributes = [
            'align', 'background', 'bgcolor',
            'border', 'cellpadding', 'cellspacing',
            'color', 'face', 'height',
            'hspace', 'marginheight', 'marginwidth',
            'noshade', 'nowrap', 'valign',
            'vspace', 'width', 'vlink',
            'alink', 'text', 'link',
            'frame', 'frameborder', 'clear',
            'scrolling', 'style'
        ];
    // If there are no iframes, return
    if (!iframes.length) return;
    // Remove each presentational attribute in the above blacklist
    function removeAttributes() {
        // Grab the iframe
        var iframe = $(this);
        // For each attribute in the above blacklist...
        $.each(attributes, function(i, attribute) {
            // ... remove it from the iframe
            iframe.removeAttr(attribute);
        });
    }
    // For each iframe, remove presentational attributes
    iframes.each(removeAttributes);
}

// Format the mobile menu to add unique title tags
function formatMobileMenu() {
    // Grab all mobile links
    var links = $('#rufio nav ul.multilevel-linkul-1 a:not(.back,.close,.more)');
    // If there are no mobile links, return
    if (!links.length) return;
    // Get parent section's link text
    function breadcrumbs(element) {
        function siblingText(element) {
            return element.siblings().not('.more').text();
        }
        var grandparent = element.parent().parent(),
            gpText =      siblingText(grandparent),
            output =      [gpText];
        if (!grandparent.hasClass('multilevel-linkul-1')) {
            output.unshift(breadcrumbs(grandparent));
        }
        return output.join(' > ');
    }
    // Update a link's title
    function updateTitle() {
        // Grab the link and its text...
        var link = $(this),
            text = link.text();
        // ... and format its title attribute
        link.attr('title', breadcrumbs(link) + ' > ' + text);
    }
    // For each mobile link, update its title
    links.each(updateTitle);
}

// Method to run accessibility fixes
function accessibility() {
    formatIframes();    // Remove presentational attributes from all iframes
    formatMobileMenu(); // Format the mobile menu to add unique title tags
}

// When the document is ready, run the accessibility fixes
$(window).load(accessibility);