import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default class index extends React.Component{
  render() {
    return (

<html>
  <Head>

    <title>Golden Snitch | Job FInding Website</title>


  </Head>

  <body>

 
    <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/index"><h2>Golden<em>Snitch</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/index">Home
                      <span className="sr-only">(current)</span>
                    </a>
                </li> 
                <li className="nav-item float-right">
                  <a className="nav-link" href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/user-registration">Sign in</a>&emsp;
                  <img src="/assets/images/nurse-rabbit.png" alt="User" style={{width: 45, height: 45}}/>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div className="page-heading about-heading header-text" >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h2>Jobs</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
             <div className="contact-form">
                <form action="#">
                 <h5 style={{marginBottom: 15}}>Location</h5>

                 <div>
                      <label>
                        <select id="location" name="location">
                          <option value="none" label="---Select Location---" selected disabled hidden></option>
                          <option value="Hokkaido">Hokkaido (5)</option>
                          <option value="Honshu">Honshu (5)</option>
                          <option value="Shikoku">Shikoku (5)</option>
                          <option value="Kyushu">Kyushu (5)</option>
                          <option value="Okinawa">Okinawa (5)</option>
                      </select>
                      </label>
                 </div>
                 <br/>
                 <h5 style={{marginBottom: 15}}>City</h5>
                 <div>
                      <label>
                        <select id="city" name="city">
                          <option value="none" label="---Select City---" selected disabled hidden></option>
                          <option value="Asahikawa">Asahikawa (5)</option>
                          <option value="Chitose">Chitose (5)</option>
                          <option value="Ebetsu">Ebetsu (5)</option>
                          <option value="Hakodate">Hakodate (5)</option>
                          <option value="Kitami">Kitami (5)</option>
                          <option value="Kushiro">Kushiro (5)</option>
                          <option value="Obihiro">Obihiro (5)</option>
                          <option value="Otaru">Otaru (5)</option>
                          <option value="Sapporo">Sapporo (5)</option>
                          <option value="Tomakomai">Tomakomai (5)</option>
                        </select>
                      </label>
                  </div>

                 <br/>

                 <h5 style={{marginBottom: 15}}>Employment Status</h5>

                 <div>
                      <label>
                           <input type="checkbox"/>
                            &nbsp;
                           <small>Full-Time (5)</small>
                      </label>
                 </div>

                 <div>
                      <label>
                           <input type="checkbox"/>
                           &nbsp;
                           <small>Part-Time (5)</small>
                      </label>
                 </div>

                 <br/>

                 <h5 style={{marginBottom: 15}}>Expected Salary</h5>

                 <div>
                      <label>
                        <small>Minimum (yen): </small>
                           <input type="number" min="1" max="9999999"/>
                      </label>
                 </div>

                 <div>
                  <label>
                    <small>Maximum (yen): </small>
                       <input type="number" min="1" max="9999999"/>
                  </label>
                 </div>

                 <br/>


                 <h5 style={{marginBottom: 15}}>Minimum Japanese Skill</h5>

                 <div>
                      <label>
                           <input type="checkbox"/>
                           &nbsp;
                            <small>N3 (5)</small>
                      </label>
                 </div>

                 <div>
                      <label>
                           <input type="checkbox"/>
                           &nbsp;
                            <small>N2 (5)</small>
                      </label>
                 </div>

                 <div>
                      <label>
                           <input type="checkbox"/>
                           &nbsp;
                            <small>N1 (5)</small>
                      </label>
                 </div>
                 <br/>
                 <div>
                  <button type="submit" className="filled-button">Search</button>
                 </div>
            </form>
             </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <div className="product-item">
                  <div className="down-content">
                    <a href="/job-details">
                      <h4>Nurse<br/>
                        <a style={{fontSize: 11}}>&#62;&#62; Click here for more details &#60;&#60;</a>
                      </h4>
                    </a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6>Yen 160,000</h6>

                    <h4><small><strong><i className="fa fa-building"></i> BMI Kings Park Hospital</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i className="fa fa-file"></i> Part-Time</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i className="fa fa-map-marker"></i> Hakodate</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-item">
                  <div className="down-content">
                  <a href="/job-details">
                      <h4>Nurse<br/>
                        <a style={{fontSize: 11}}>&#62;&#62; Click here for more details &#60;&#60;</a>
                      </h4>
                    </a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6>Yen 160,000</h6>

                    <h4><small><strong><i className="fa fa-building"></i> BMI Kings Park Hospital</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i className="fa fa-file"></i> Part-Time</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i className="fa fa-map-marker"></i> Hakodate</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-item">
                  <div className="down-content">
                  <a href="/job-details">
                      <h4>Nurse<br/>
                        <a style={{fontSize: 11}}>&#62;&#62; Click here for more details &#60;&#60;</a>
                      </h4>
                    </a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6>Yen 160,000</h6>

                    <h4><small><strong><i className="fa fa-building"></i> BMI Kings Park Hospital</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i className="fa fa-file"></i> Part-Time</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i className="fa fa-map-marker"></i> Hakodate</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-item">
                  <div className="down-content">
                  <a href="/job-details">
                      <h4>Nurse<br/>
                        <a style={{fontSize: 11}}>&#62;&#62; Click here for more details &#60;&#60;</a>
                      </h4>
                    </a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6>Yen 160,000</h6>

                    <h4><small><strong><i className="fa fa-building"></i> BMI Kings Park Hospital</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i className="fa fa-file"></i> Part-Time</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i className="fa fa-map-marker"></i> Hakodate</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-item">
                  <div className="down-content">
                  <a href="/job-details">
                      <h4>Nurse<br/>
                        <a style={{fontSize: 11}}>&#62;&#62; Click here for more details &#60;&#60;</a>
                      </h4>
                    </a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6>Yen 160,000</h6>

                    <h4><small><strong><i className="fa fa-building"></i> BMI Kings Park Hospital</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i className="fa fa-file"></i> Part-Time</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i className="fa fa-map-marker"></i> Hakodate</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-item">
                  <div className="down-content">
                  <a href="/job-details">
                      <h4>Nurse<br/>
                        <a style={{fontSize: 11}}>&#62;&#62; Click here for more details &#60;&#60;</a>
                      </h4>
                    </a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6>Yen 160,000</h6>

                    <h4><small><strong><i className="fa fa-building"></i> BMI Kings Park Hospital</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i className="fa fa-file"></i> Part-Time</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i className="fa fa-map-marker"></i> Hakodate</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <ul className="pages" style={{float: "right"}}>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>About Us</h2>
            </div>
          </div>
          <div>
            <div className="left-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.
                Dolor morbi non arcu risus quis varius. Nisi est sit amet facilisis.
                Ac tincidunt vitae semper quis. Odio morbi quis commodo odio aenean sed.
                Lectus mauris ultrices eros in cursus. Sapien nec sagittis aliquam malesuada bibendum. 
                Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Non consectetur a erat nam at.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              <div className="row">
                <div className="col-md-8">
                  <h4>For more information, contact us:</h4>
                  <ul className="featured-list">
                    <li>Phone:&emsp;011-4029082</li>
                    <li>Email:&emsp;consectetur@gmail.com</li>
                    <li>Address:&emsp;aquecorporis nulla aspernatur, Hokkaido, Japan.</li>
                  </ul>
                  </div>

                <div className="col-lg-4 col-md-6 text-right">
                  <a href="/contact" className="filled-button">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              Copyright©2020 GoldenSnitch
            </div>
          </div>
        </div>
      </div>
    </footer>


    
  </body>
</html>
)
  }
}