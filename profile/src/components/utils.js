const navBarScrolled = () => {
    var navbar = document.querySelector('custom-nav-bar')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
}




export default navBarScrolled;