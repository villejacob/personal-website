$(document).ready(function() {
  bindEvents()
})

function bindEvents() {
  $('#me').on('click', function() {
    $('.about').toggle()
  })

  $('.links a').on('click', function() {
    $(this).css('color', '#FF404B')
  })
}
