import React, { useState, useEffect } from "react";
import "../style.css";
import ContentFile from "./ContentFile";

const myStyle = {
  alignItems: 'center',
  background: '#fff',
  border: '1px solid #02af63',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0',
  padding: '12px',
  width: '200%'
};
const liStyle = {
  fontSize:'80px'
}

function Home() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(storedLinks);
    
  }, []);

  function addLink(url, date) {
    const id = links.length ? links[links.length - 1].id + 1 : 0;
    const shortUrl = generateShortUrl();
    const newLink = { id, url, shortUrl, date };
    setLinks([...links, newLink]);
    localStorage.setItem("links", JSON.stringify([...links, newLink]));
    return newLink;
  }
  
  function generateShortUrl() {
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
    let shortUrl = "http://sho.link/";
    for (let i = 0; i < 4; i++) {
      shortUrl += characters[Math.floor(Math.random() * characters.length)];
    }
    return shortUrl;
  }  
  function handleSubmit(event) {
    event.preventDefault();
    const url = event.target.elements.url.value;
    const date = event.target.elements.dateName.value;
    const newLink = addLink(url, date);
    event.target.reset();
    alert(`Short URL: ${newLink.shortUrl}`);
  }

  const Link = ({ link }) => {
    const [copied, setCopied] = useState(false);
    const [showShortLink, setShowShortLink] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(link.shortUrl);
      setCopied(true);
    };

    const toggleShortLink = () => {
      setShowShortLink(!showShortLink);
    };
    const handleRemove = () => {
      const filteredLinks = links.filter((l) => l.id !== link.id);
      setLinks(filteredLinks);
    };

return (
    <div>
      <div style={{ marginBottom: "0.5rem" }}>
        <span style={{ fontWeight: "bold" }}>Short Link:</span>{" "}
        <button className="btn btn-sm btn-primary ml-2" onClick={toggleShortLink}>
          {showShortLink ? "Hide" : "Show"}
        </button>
        {showShortLink && (
          <>
            <a
              href={link.shortUrl}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "blue" }}
            >
              {link.shortUrl}
            </a>{" "}
            <button className="btn btn-sm btn-primary ml-2" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </>
        )}
        
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Date:</span> {link.date}
      </div>
      <hr style={{ marginTop: "0.5rem", marginBottom: "1rem" }} />
    </div>
  );
};

  return (

    <div>
    <div className="container_fluid"><br/>
      <center><h1>Link Shortner App</h1></center>
      <div className="row">
        <div className="col-sm-12">
      <form id="link-form" onSubmit={handleSubmit}>
        <label>
          URL:
          <input
            style={myStyle}
            className="form-control"
            type="text"
            name="url"
            id="url-input"
            placeholder="Enter Your URL"
            required
          />
        </label>
        <label>
          Date:
          <input
            style={myStyle}
            className="form-control"
            type="date"
            name="dateName"
            id="dateName"
            min={new Date().toISOString().split("T")[0]}
            max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
              required
              />
              </label>
              <br />
              <button className="btn btn-primary" type="submit">
              Shorten URL
              </button>
              </form><br/>
              <div id="output"></div>
              <div id="links-list">
  {links.map((link) => (
    <div key={link.id}>
      <div className="link-container text-center">
        <div className="short-link-container">
              <span className="short-link">
                {link.shortUrl} <button className="btn btn-success" onClick={() => copyToClipboard(link.shortUrl)}>Copy</button>
              </span>
        </div>
      </div>
    </div>
  ))}
</div>

              </div>
              </div>
              </div><br/>
              <div className='container'>
        <div class="row">
            <div class="col-md-4 text-center">
                <i aria-hidden="true" class="fa fa-compress fa-5x">
                    </i> 
                    <h2>Shorten Links</h2> 
                    <p>T.LY URL Shortener makes long links look cleaner and easier to share! Add your own
Custom Domains
to personalize your brand!</p>
</div> 
<div class="col-md-4 text-center">
    <i aria-hidden="true" class="fa fa-line-chart fa-5x">
        </i> <h2>Track Clicks</h2> 
        <p>
            With over 15,896,845 links shortened and tracked over 258,752,854
            clicks,
            T.LY lets you know
            where users are coming from. Just add a <strong>+</strong> at the end of any short url to see stats.
</p>
</div> 
<div class="col-md-4 text-center">
    <i style={liStyle} aria-hidden="true" class="fa fa-chrome"></i> 
    <h2>Browser Extension</h2>
     <p>
        Install our free
    <a href="/extension">Browser Extension</a> with over 450,000 users from the extension store to automatically shorten links in one easy click! We support Chrome, Firefox, Edge
    and
    Opera.
</p>
</div>
</div>
</div>
<ContentFile />
</div>
              
              );
              }

              function copyToClipboard(text) {
              navigator.clipboard.writeText(text);
              alert("Copied to clipboard!");
              }

export default Home;





