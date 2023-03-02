$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  })
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  })
})
console.log(2)
console.log(3)

// $(function () {
//   $('.header__btn').on('click', function () {
//     $('.rightside-menu').removeClass('rightside-menu--close')
//   })
//   $('.rightside-menu__close').on('click', function () {
//     $('.rightside-menu').addClass('rightside-menu--close')
//   })
// })