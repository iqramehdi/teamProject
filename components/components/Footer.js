import React from 'react';
import "../style.css";
const myStyle = {
    backgroundColor : "black",
    color : "#fff",
    fontFamily: 'Proximanova,sans-serif'
}
const liStyle = {
  fontFamily: 'Proximanova,sans-serif',
  color: '#909398'
}
const ulStyle = {
  TextDecoder : 'none'
}

function Footer() {
  return (
<footer>
    <div className='container'>
      <div className='row'>

        <div className='col-sm-4'><br/>
          <ul>
            
          <li style={liStyle}>Features</li>
          <li style={liStyle}>Extension</li>
          <li style={liStyle}>API Docs</li>
          <li style={liStyle}>FAQ</li>
          <li style={liStyle}>QR Code Generator</li>
          <li style={liStyle}>Recommended Tools</li>
          <li style={liStyle}>Sign Up</li>
          </ul>
        </div>
        <div className='col-sm-4'><br/>
          <ul style={liStyle}>
            
          <li>Features</li>
          <li>Extension</li>
          <li>API Docs</li>
          <li>FAQ</li>
          <li>QR Code Generator</li>
          <li>Recommended Tools</li>
          <li>Sign Up</li>
          </ul>
        </div>
        <div className='col-sm-4'><br/>
          <ul style={liStyle}>
            
          <li>Features</li>
          <li>Extension</li>
          <li>API Docs</li>
          <li>FAQ</li>
          <li>QR Code Generator</li>
          <li>Recommended Tools</li>
          <li>Sign Up</li>
          </ul>
        </div>
    </div>
    </div>
    <div className='footer-botom'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9'>
            <p>Terms & Conditions</p>&nbsp;&nbsp;
<p>Privacy Policy</p>&nbsp;&nbsp;
<p>Cookie Policy</p>&nbsp;&nbsp;
<p>Anti Spam Policy</p>&nbsp;&nbsp;
<p>Report abuse</p>&nbsp;&nbsp;
          </div>
          <div className='col-sm-3'>
<p>Design and Develope by Coders</p>
</div>
  </div>
  </div>
  </div>
    </footer>
  );
}

export default Footer