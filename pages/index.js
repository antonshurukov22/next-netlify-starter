import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
	<script>
(function () {
  var trackingIdArr = document.URL.match(/trackingid=([^&]+)/);
 var frameSrc = 'https://lpl5.com/index.html?a=shurukov&l=ru&w=500&h=500&s=shurukov.maxoptra.com&e=0';
  if (trackingIdArr) {
       var trackingId = trackingIdArr[1];
      if (trackingId) {
          frameSrc += '&trackingid=' + trackingId;
      }
  }
   var frame = document.createElement('iframe');
    frame.src = frameSrc;
    frame.id = 'tracking-widget';
    frame.scrolling = 'no';
    frame.width = '500';
    frame.height = '500';
    frame.frameBorder = '0';
    var scriptTag = document.querySelector('#maxoptra-widget-script,#tracking-widget-script');
    scriptTag.parentNode.insertBefore(frame, scriptTag.nextSibling);
})();
</script> 

  )
}
