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
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              {/* -----Interior Design Dropdown Group----- */}
              <NavDropdown title="Interior Design" id="basic-nav-dropdown">
                {/* -----Residential Dropdown Sub Group----- */}
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

                {/* -----Commercial Dropdown Sub Group----- */}
                <NavDropdown title="Commercial" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Truffle Poke Bar
                  </NavDropdown.Item>
                </NavDropdown>

                {/* -----School Project Dropdown Sub Group----- */}
                <NavDropdown title="School Project" id="basic-nav-dropdown">
                  {/* ----AAU Residential Project Dropdown Sub Group----- */}
                  <NavDropdown title="Residential" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Ernest's Residence
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* ----AAU Commercial Project Dropdown Sub Group----- */}
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
                {/* AAU GR102- Digital Publishing Projects Dropdown Group */}
                <NavDropdown
                  title="Digital Publishing "
                  id="basic-nav-dropdown"
                >
                  {/* -----Gouache Dropdown Sub Group----- */}
                  <NavDropdown title="Indesign" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Magazine Spread
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Project Booklet
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown title="Flyer Projects" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Magazine Articles
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Cade Estate Winery
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                  <NavDropdown title="Illustrator" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Logo
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Letterhead
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Business Card
                    </NavDropdown.Item>
      
                  </NavDropdown>
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
              </NavDropdown>

              {/* Contact Dropdown Group */}
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
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
