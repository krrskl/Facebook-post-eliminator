var position = 0;
var cont = 0;
var numPosts = 0;

function scrapePage() {
  try {
    document.getElementsByClassName("_2e42 _2yi0 _2yia")[position].click();
    position += 9;
    console.info(
      `%cMarcando contenido #${numPosts + 1}`,
      "border-radius: 5px;background: #4CAF50;padding: .5rem;width: 80%;color: white;font-weight: bold;font-size: medium;"
    );
    numPosts++;
    setTimeout(() => {
      scrapePage();
    }, 700);
  } catch (error) {
    document.getElementsByClassName("_43rl")[4].click();

    try {
      document
        .getElementsByClassName(
          "layerCancel _4jy0 _4jy3 _4jy1 _51sy selected _42ft"
        )
        [cont].click();
      cont++;
    } catch (e) {
      console.warn(" XXXXXX " + e + " XXXXXX");
    }

    position = 0;

    setTimeout(() => {
      scrapePage();
    }, 10000);
    console.log(
      "%cEliminando contenido...",
      "border-radius: 5px;background: #ff3628;padding: .5rem;width: 80%;color: white;font-weight: bold;font-size: medium;"
    );
  }
}

function start() {
  console.info(
    `%cIniciando...`,
    "border-radius: 5px;background: #4CAF50;padding: .5rem;width: 80%;color: white;font-weight: bold;font-size: medium;"
  );

  numPosts = cont = position = 0;
  scrapePage();
}
