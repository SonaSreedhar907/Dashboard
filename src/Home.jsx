import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { TiCloudStorageOutline } from "react-icons/ti";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="h2">Choose a Plan that's just right for you !</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h2 className="basic">Basic</h2>
            <h4 className="discount-price">$ 89.9/mo</h4>
            <h2 className="original-price">$ 99.9/mo</h2>
            <button className="get-started-btn">Get Started →</button>

            <br />
            <hr />
            <h5 className="feature-title">What you'll get:</h5>
            <div className="three">
              <CiUser className="icon" />
              <span>Up to 25 Users</span>
              <br />
              <TiCloudStorageOutline className="icon" />
              <span>Up to 25GB Storage</span>
              <br />
              <MdOutlineMail className="icon" />
              <span>Email Support</span>
            </div>
            <h3 className="features">Explore Features →</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h2 className="basic">Basic</h2>
            <h4 className="discount-price">$ 89.9/mo</h4>
            <h2 className="original-price">$ 99.9/mo</h2>
            <button className="get-started-btn-two">Get Started →</button>

            <br />
            <hr />
            <h5 className="feature-title">What you'll get:</h5>
            <div className="three">
              <CiUser className="icon" />
              <span>Up to 25 Users</span>
              <br />
              <TiCloudStorageOutline className="icon" />
              <span>Up to 25GB Storage</span>
              <br />
              <MdOutlineMail className="icon" />
              <span>Email Support</span>
            </div>
            <h3 className="features">Explore Features →</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h2 className="basic">Basic</h2>
            <h4 className="discount-price">$ 89.9/mo</h4>
            <h2 className="original-price">$ 99.9/mo</h2>
            <button className="get-started-btn-three">Get Started →</button>

            <br />
            <hr />
            <h5 className="feature-title">What you'll get:</h5>
            <div className="three">
              <CiUser className="icon" />
              <span>Up to 25 Users</span>
              <br />
              <TiCloudStorageOutline className="icon" />
              <span>Up to 25GB Storage</span>
              <br />
              <MdOutlineMail className="icon" />
              <span>Email Support</span>
            </div>
            <h3 className="features">Explore Features →</h3>
          </div>
        </div>
      </div>

      <div className="main-cards">
        <div className="cards">
          <div className="card-inners">
            <div className="left">
              <button className="get-started-btn-new">Free Forever</button>
              <h2>Free Starter</h2>
              <p>
                The quickest and the easiest way to try <br />
                protocols with basic functionalities
              </p>
              <button>Get Started →</button>
            </div>
            <div className="right">
              <h6>What you'll get</h6>
              <div className="three">
                <CiUser className="icon" />
                <span>Up to 25 Users</span>
                <br />
                <TiCloudStorageOutline className="icon" />
                <span>Up to 25GB Storage</span>
                <br />
                <MdOutlineMail className="icon" />
                <span>Email Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card-inners">
            <div className="left">
              <button
                className="get-started-btn-new"
                style={{ backgroundColor: "cornflowerblue" }}
              >
                Free Forever
              </button>
              <h2>Free Starter</h2>
              <p>
                The quickest and the easiest way to try <br />
                protocols with basic functionalities
              </p>
              <button
                style={{
                  backgroundColor: "cornflowerblue",
                  borderColor: "cornflowerblue",
                  borderRadius: "2px",
                }}
              >
                Get Started →
              </button>
            </div>
            <div className="right">
              <h6>What you'll get</h6>
              <div className="three">
                <CiUser className="icon" />
                <span>Up to 25 Users</span>
                <br />
                <TiCloudStorageOutline className="icon" />
                <span>Up to 25GB Storage</span>
                <br />
                <MdOutlineMail className="icon" />
                <span>Email Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
