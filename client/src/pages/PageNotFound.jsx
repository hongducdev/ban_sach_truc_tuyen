import React, { Fragment } from "react";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="bg-white">
        <div className="container h-[70vh]">
          <div class="wrapper">
            <div class="error">
              <div class="number">4</div>
              <div class="illustration">
                <div class="circle"></div>
                <div class="clip">
                  <div class="paper">
                    <div class="face">
                      <div class="eyes">
                        <div class="eye eye__left"></div>
                        <div class="eye eye__right"></div>
                      </div>
                      <div class="cheeks cheeks__left"></div>
                      <div class="cheeks cheeks__right"></div>
                      <div class="mouth"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="number">4</div>
            </div>

            <div class="text">
              Oops. The page you're looking for doesn't exist.
            </div>
            <a class="button" href="/">
              Back Home
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
