
import "./LandingPage.scss";
export const LandingPage = () => {
  return (
    <>
      <div className="main-container-landing">
        <div className="header-container-landing">
          <div className="header-text-container-landing">
            <h3 className="header-landing">A history of everything you copy</h3>
            <p className="header-text-landing">
              Clipboard allows you to track and organize everything you copy,
              instantly access your clipboard on all your devices.
            </p>
          </div>
          <div className="button-container-landing">
            <button className="button-ios-landing">Download for IOS</button>
            <button className="button-windows-landing">
              Download for Windows
            </button>
          </div>
        </div>
        <div className="first-container-landing">
          <div className="first-header-container-landing">
            <div className="first-header-text-container-landing">
              <h3 className="first-header-landing">
                Keep track of your snippets
              </h3>
              <p className="first-text-landing">
                Clipboard instantly stores any item you copy in the cloud,
                meaning you can access your snippets immediately on all your
                devices. Our Mac abd IOS apps help you organize everything.
              </p>
            </div>
          </div>
          <div className="first-prs-container-landing">
            <div className="first-image-container-landing">
              <img
                src="/image-computer.png"
                alt="computer"
                className="computer-landing"
              />
            </div>
            <div className="first-prs-text-header-landing">
            <div className="first-prs-text-container-landing">
              <h3 className="first-prs-header-landing">Quick Search</h3>
              <p className="first-prs-text-landing-quick">
                Easily search your snippets by content, category, web address,
                applications, and more
              </p>
            </div>
            <div className="first-prs-text-container-landing">
              <h3 className="first-prs-header-landing">ICloud Sync</h3>
              <p className="first-prs-text-landing-icloud">
                Instantly saves and syncs across all your devices.
              </p>
            </div>
            <div className="first-prs-text-container-landing">
              <h3 className="first-prs-header-landing">Complete History</h3>
              <p className="first-prs-text-landing-history">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="second-container-landing">
          <div className="second-header-container-landing">
            <h3 className="second-header-landing">Access Clipboard anywhere</h3>
            <p className="second-text-landing">
              Whether you're on the go, or at your computer, you can access all
              your Clipboards snippets in a few simple clicks.
            </p>
          </div>
          <img
            src="/image-devices.png"
            alt="devices"
            className="second-image-landing"
          />
        </div>
        <div className="third-container-landing">
          <div className="third-header-container">
            <h3 className="third-header-text-landing">
              Supercharge your workflow
            </h3>
            <p className="third-text-landing">
              We've got the tools to boost your productivity.
            </p>
          </div>
          <div className="third-desc-main-container-landing">
          <div className="third-desc-container-landing">
            <div className="third-desc-landing">
              <img
                src="/icon-blacklist.svg"
                alt="blacklist"
                className="third-desc-image-landing"
              />
              <h3 className="third-desc-header">Create blacklists</h3>
              <p className="third-desc-text">
                Ensure sensetive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
          </div>
          <div className="third-desc-container-landing">
            <div className="third-desc-landing">
              <img
                src="/icon-text.svg"
                alt="text"
                className="third-desc-image-landing"
              />
              <h3 className="third-desc-header">Plain text snippets</h3>
              <p className="third-desc-text">
                Remove unwanted formatting from compiled text for a consisnent
                look.
              </p>
            </div>
          </div>
          <div className="third-desc-container-landing">
            <div className="third-desc-landing">
              <img
                src="/icon-preview.svg"
                alt="previvew"
                className="third-desc-image-landing"
              />
              <h3 className="third-desc-header">Sneak preview</h3>
              <p className="third-desc-text-sneak">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
           </div>
         </div>
        </div>
        <div className="sponsor-container-landing">
          <img
            src="/logo-google.png"
            alt="google"
            className="sponsor-image-google"
          />
          <img src="/logo-ibm.png" alt="ibm" className="sponsor-image-ibm" />
          <img
            src="/logo-microsoft.png"
            alt="microsoft"
            className="sponsor-image-microsoft"
          />
          <img src="/logo-hp.png" alt="hp" className="sponsor-images-hp" />
          <img
            src="/logo-vector-graphics.png"
            alt="vector-graphics"
            className="sponsor-image-vector"
          />
        </div>
        <div className="clipboard-container-landing">
          <h3 className="clipboard-header-landing">
            Clipboard for IOS and Mac OS
          </h3>
          <p className="clipboard-text-landing">
            Avalible for free on the App Store. Download for Mac or IOS, sync
            with ICloud and you're ready to start adding to your clipboard
          </p>
          <div className="button-clipboard-container-landing">
            <button className="button-clipboard-ios-landing">
              Download for IOS
            </button>
            <button className="button-clipboard-windows-landing">
              Download for Mac
            </button>
          </div>
        </div>
        <div className="footer-container-landing">
          <img
            src="/logo.svg"
            alt="logo"
            className="footer-image-logo-landing"
          />
          <div className="footer-info-container-landing">
            <div className="info-landing">
            <p className="footer-info-landing">FAQs</p>
            <p className="footer-info-landing">Contact Us</p>
            </div>
            <div className="info-landing">
            <p className="footer-info-landing">Privacy Policy</p>
            <p className="footer-info-landing">Press Kit</p>
            </div>
            <div className="info-landing">
            <p className="footer-info-landing">Install Guide</p>
            </div>
          </div>
          <div className="footer-media-container-landing">
            <img
              src="/icon-facebook.svg"
              alt="facebook"
              className="image-media-landing"
            />
            <img
              src="/icon-twitter.svg"
              alt="twiter"
              className="image-media-landing"
            />
            <img
              src="/icon-instagram.svg"
              alt="instagram"
              className="image-media-landing"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
