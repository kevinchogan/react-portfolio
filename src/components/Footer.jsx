import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import facebook from '../assets/icons/facebook.png'

export default function Footer() {
    return (
        <footer>
        <a href="https://www.linkedin.com/in/kevin-hogan-aa53392/" target="_blank">
          {/* <img id='linkedin' src={linkedin}></img> */}
          <div id='linkedin'></div>
        </a>
        <a href="https://github.com/kevinchogan" target="_blank">
          {/* <img id='github' src={github}></img> */}
          <div id='github'></div>
        </a>
        <a href="https://www.facebook.com/kevin.hogan.378" target="_blank">
          {/* <img id='facebook' src={facebook}></img> */}
          <div id='facebook'></div>
        </a>
      </footer>
    );
  }