window.addEventListener('load', onVrViewLoad)
function onVrViewLoad() {
  var vrView = new VRView.Player('#vrview', {
    image: 'https://vrchive.com/e/0/?code=upload&auto_rotate=1&position=0',
    is_stereo: true,
    width: '600px'
  });
}
