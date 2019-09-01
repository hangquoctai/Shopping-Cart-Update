import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export default class Footer extends Component {
  render() {
    return (
      <div class="footer" id="footer-click">
        <div class="footer-content">
            <ul>
            <Row>
              <Col md="4" sm="12">
                <li class="links">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </li>
              </Col>
              <Col md="4" sm="12">
                <li class="links">
                  <ul>
                    <li>
                      <a href="#">Appartements</a>
                    </li>
                    <li>
                      <a href="#">Houses</a>
                    </li>
                    <li>
                      <a href="#">Villas</a>
                    </li>
                    <li>
                      <a href="#">Mansions</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                  </ul>
                </li>
              </Col>
              <Col md="4" sm="12">
                <li class="links">
                  <ul>
                    <li>
                      <a href="#">New York</a>
                    </li>
                    <li>
                      <a href="#">Los Anglos</a>
                    </li>
                    <li>
                      <a href="#">Miami</a>
                    </li>
                    <li>
                      <a href="#">Washington</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                  </ul>
                </li>
              </Col>
              </Row>

                <li class="about">
                  <p>
                    La Casa is real estate minimal html5 website template,
                    designed and coded by pixelhint, tellus varius, dictum erat
                    vel, maximus tellus. Sed vitae auctor ipsum
                  </p>
                  <ul>
                    <li>
                      <a
                        href="http://facebook.com/pixelhint"
                        class="fa fa-facebook"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="http://twitter.com/pixelhint"
                        class="fa fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="http://plus.google.com/+Pixelhint"
                        class="fa fa-google"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a href="#" class="skype"></a>
                    </li>
                  </ul>
                </li>
            </ul>
        </div>
        <div class="copy">
          <p>Copyright © 2015 Pixelhint.com. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}
