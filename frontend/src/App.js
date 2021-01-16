import './App.css';
import axios from 'axios'
// import './scss/_footer.scss'
import React from 'react';
import SocialFollow from "./SocialFollow"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';

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
        {console.log(this.state.projects)}
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
        <header className="masthead d-flex" id='header'>
            <h1 className="mb-1" style={{color:'red'}}>Hala Salhab</h1>
          <div className="wrapper">
            <h2>I am a <span></span></h2>
            {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
          </div>
        </header>
        {/* <!-- About --> */}
        <section className="content-section bg-light" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>"live your life to the fullest!!"</h2>
                <h1>About me:</h1>
                <p className="lead mb-5">Hi there how are you doing ? it's Hala, i am a A recent graduate from RBK, and i have finished my first year in computer science at Palestine Polytechnic University, with an average of 85</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Portfolio --> */}
     
      
    <section className="content-section" id="portfolio">
    
      <div className="content-section-heading text-center">
        <h3 className="text-secondary mb-0">Portfolio</h3>
        <h2 className="mb-5">Recent Projects</h2>
      </div>
      <div className="col d-flex justify-content-center">

      {this.state.projects ? (
            this.state.projects
              .map(
                (
                  element,
                  i
                ) => (
                  <Card style={{ width: '50rem',margin:'20px',border:'none'}}>
                  <Card.Img variant="top" src={element.img} style={{height:'50%'}}/>
                  <Card.Footer  >
                    <Card.Title>{element.title}:</Card.Title>
                    <Card.Text style={{display: 'flex'}}>
                    {element.description}.
                    </Card.Text>
                  </Card.Footer>
                </Card>
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
  
        {/* <section className="content-section" id="portfolio">
        <div class="container">
      <div class="content-section-heading text-center">
        <h3 class="text-secondary mb-0">Portfolio</h3>
        <h2 class="mb-5">Recent Projects</h2>
      </div>
          <div className="d-flex flex-wrap justify-content-around">
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
          </div>
        </section> */}
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
