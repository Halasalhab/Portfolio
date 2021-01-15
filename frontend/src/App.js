import './App.css';
import axios from 'axios'
// import './scss/_footer.scss'
import React from 'react';
import SocialFollow from "./SocialFollow"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {

    axios.get('http://localhost:8000/api/projects/').then(resp => {
      this.setState({
        projects: resp.data
      })
      // console.log(resp.data);
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="App" >
        {/* {console.log(this.state.projects)} */}
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#page-top">Home</a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">Hala Salhab</h1>
            <h3 className="mb-5">
              <em>I am a fullstack developer </em>
            </h3>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
          <div className="overlay"></div>
        </header>
        {/* <!-- About --> */}
        <section className="content-section bg-light" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                <p className="lead mb-5">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
            <a href="https://unsplash.com/">Unsplash</a>!</p>
                <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Portfolio --> */}
        <section className="content-section" id="portfolio">
          <div className="d-flex flex-wrap justify-content-around ">
            {this.state.projects ? (
            this.state.projects
              .map(
                (
                  element,
                  i
                ) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: "60px",
                      height: "280px",
                      width: "280px",
                      position: "relative",
                      paddingTop: "40px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                  >
                   
                      <img
                        src={element.img}
                        style={{
                          margin: "0",
                          display: "block",
                          height: "100%",
                          width: "100%",
                          position: "relative",
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                          objectFit: 'cover'

                        }}
                        alt="img"
                      // class="imgstyle"
                      ></img>
                      <div
                        style={{
                          backgroundColor: "#e6f0fa",
                          height: "80px",
                          marginTop: "-17px",
                          position: "relative",
                          borderBottomLeftRadius: "15px",
                          borderBottomRightRadius: "15px",
                        }}
                      >
                        <p
                          style={{
                            marginLeft: "10px",
                            color: "#A04D25",
                            fontFamily: "Poly",
                            fontSize: "20px",
                            paddingTop: "10px",
                          }}
                        >
                          {element.tecn}
                        </p>
                        <p
                          style={{
                            marginLeft: "10px",
                            color: "#A04D25",
                            fontFamily: "Poly",
                            fontSize: "15px",
                          }}
                        >
                          description :{element.description}
                        </p>
                      </div>
                  </div>
                )
              )
          ) : (
              <img
                src="https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif"
                alt="theimg"
                style={{ width: "230px" }}
              ></img>
            )}
          </div>
        </section>
            <SocialFollow/>
        {/* footer */}
        <footer >
          <div style={{textAlign:'center'}} >
            <p className="text-muted small mb-0">Copyright &copy; Hala Salhab 2020</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
