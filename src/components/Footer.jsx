import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__copyright">
          <div className="container">
            <div className="text-center py-4">
              <p className=" mb-0">
                Copyright © 2023{" "}
                <a href="index.html">
                  <strong>Rotten Us</strong>
                </a>{" "}
                All Rights Reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
