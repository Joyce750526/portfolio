import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Hello!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Me</Nav.Link>
              {/* Coding Projects Dropdown Group */}
              <NavDropdown title="Coding Projects" id="basic-nav-dropdown">
                {/* -----Solo Projects Dropdown Sub Group----- */}
                <NavDropdown title="Solo Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.3">
                    Crazy Busy Scheduler
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    OOP-team-profile-generator
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    PWA-Just-Another-Text-Editor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    ORM-Business-Backend-Platform
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Social-Network-APP-with-MangoDB
                  </NavDropdown.Item>
                </NavDropdown>
                {/* -----NavDropdown Divider----- */}
                <NavDropdown.Divider />
                {/* -----Group Projects Dropdown Sub Group----- */}
                <NavDropdown title="Group Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Lyrictionary Music App
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    The Advertising Campaign(TAC)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Mylo Chat- Messaging App
                  </NavDropdown.Item>
                </NavDropdown>

                {/* -----NavDropdown Divider---- */}
                <NavDropdown.Divider />

                {/* -----Leetcode Dropdown Group----- */}
                <NavDropdown title="Leetcode Practice" id="basic-nav-dropdown">
                  {/* -----2 Pointers Dropdown Sub Group----- */}
                  <NavDropdown title="2 Pointers" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Problem 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Problem 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Problem 3
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* -----Silding Windows Dropdown Sub Group----- */}
                  <NavDropdown title="Silding Windows" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Problem 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Problem 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Problem 3
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* -----Single Linked List Dropdown Sub Group----- */}
                  <NavDropdown
                    title="Single Linked List"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Problem 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Problem 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Problem 3
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
              </NavDropdown>

              {/* -----Interior Design Dropdown Group----- */}
              <NavDropdown title="Interior Design" id="basic-nav-dropdown">
                {/* -----Residential Projects Dropdown Sub Group----- */}
                <NavDropdown title="Residential" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    1718 Shoreview Ave
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    340 Camaritas Ave
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    560 Meadows Ave
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                {/* -----NavDropdown Divider----- */}
                <NavDropdown.Divider />
                {/* -----Commercial Projects Dropdown Sub Group----- */}
                <NavDropdown title="Commercial" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Truffle Poke Bar
                  </NavDropdown.Item>
                </NavDropdown>
                {/* -----NavDropdown Divider----- */}
                <NavDropdown.Divider />
                {/* -----AAU School Projects Dropdown Sub Group----- */}
                <NavDropdown title="School Project" id="basic-nav-dropdown">
                  {/* ----AAU Residential Projects Dropdown Sub Group----- */}
                  <NavDropdown title="Residential" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Ernest's Residence
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* ----AAU Commercial Projects Dropdown Sub Group----- */}
                  <NavDropdown title="Commercial" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Urban Escape Market
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      National Geographic
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                {/* -----NavDropdown Divider---- */}
                <NavDropdown.Divider />
                {/* Art Painting Dropdown Group */}
                <NavDropdown title="Art Painting" id="basic-nav-dropdown">
                  {/* -----Gouache Dropdown Sub Group----- */}
                  <NavDropdown title="Gouache" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Portrait
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Hope in the Dark
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Moody Forest
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* -----Watercolor Dropdown Sub Group----- */}
                  <NavDropdown title="Watercolor" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Chair
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Sofa Set
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Living Room
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Kitchen Elevation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Lobby Perspective
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Floor Plan Render
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                {/* -----NavDropdown Divider----- */}
                <NavDropdown.Divider />
                {/* AAU GR102- Digital Publishing Projects Dropdown Group */}
                <NavDropdown
                  title="Digital Publishing "
                  id="basic-nav-dropdown"
                >
                  {/* -----Indesign Dropdown Sub Group----- */}
                  <NavDropdown title="Indesign" id="basic-nav-dropdown">
                    {/* -----Flyers Dropdown Sub Group----- */}

                    <NavDropdown title="Flyer Projects" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Magazine Articles
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Cade Estate Winery
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* -----Booklets Dropdown Sub Group----- */}
                    <NavDropdown
                      title="Booklet Projects"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Magazine Spread
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Portfolio Booklet
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                  {/* -----Illustrator Dropdown Sub Group----- */}
                  <NavDropdown title="Illustrator" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Logo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Letterhead
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Business Card
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* -----Photoshop Dropdown Sub Group----- */}
                  <NavDropdown title="Photoshop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Bedroom Render
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Elevation Render
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Packaging Design(Urban Escape Market)
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
              </NavDropdown>

              {/* Photography Dropdown Group */}
              <NavDropdown title="Photography" id="basic-nav-dropdown">
                {/* -----Canon Camera Photography Dropdown Sub Group----- */}
                <NavDropdown title="Canon" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.3">Travel</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Street</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Kinetic
                  </NavDropdown.Item>
                </NavDropdown>
                {/* -----NavDropdown Divider----- */}
                <NavDropdown.Divider />
                {/* -----iPhone Photography Dropdown Sub Group----- */}
                <NavDropdown title="iPhone" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">People</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              {/* <Nav.Link href="#Photography">Photography</Nav.Link> */}

              {/* Contact Dropdown Group */}
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
                {/* -----NavDropdown Divider----- */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Email Me</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
