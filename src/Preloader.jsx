function Preloader() {

    var loader = document.getElementById("preloader");
setTimeout(timeout, 7000);
function timeout() {
  endAnimation();
}
function endAnimation() {
    var loader = document.getElementById("preloader");
    loader.setAttribute("class", "afterloader");
}

    return(
        <>
        <div id="preloader" className="beforeloader">
            <main>
                <div className="preloader">
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                </div>
                <div className="status">
                    <h3>Dvinay</h3>
                    <br />
                    Loading
                    <span className="status__dot">.</span>
                    <span className="status__dot">.</span>
                    <span className="status__dot">.</span>
                </div>
            </main>
      </div>
      </>
    );
}
export default Preloader;