

const Imports = ({
  metaTitle = 'Undo Skincare Center',
  description = 'At Undo Skincare Center we want you to look and feel your best. Our team are experts here to provide a customized treatment plan to help you get there!'
}) => (
  <>
    <title>{metaTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={description} />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://codrobin33.github.io/undo2/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`https://codrobin33.github.io/undo2/img/office.jpg`} />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="codrobin33.github.io" />
    <meta property="twitter:url" content="https://codrobin33.github.io/undo2/" />
    <meta name="twitter:title" content={metaTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://codrobin33.github.io/undo2/img/office.jpg`} />

    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href={`${process.env.img_url}/favicon.ico`} />
    <script id="timelyScript" src="https://book.gettimely.com/widget/book-button-v1.5.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106878463-1"></script>
    <script dangerouslySetInnerHTML={{
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'UA-106878463-1');
        `}} />
    <script defer dangerouslySetInnerHTML={{
      __html: `
          (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
            'gtm.start':
          new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5623MWQ');
        `}} />
  </>
);

export default Imports;