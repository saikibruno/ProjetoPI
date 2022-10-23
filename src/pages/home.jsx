import React, { useEffect, useState } from "react";
import {
  Col,
  Carousel,
  Row,
  ListGroup,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsNewspaper } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import "../App.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPerPage] = useState(6);
  const [copyy, setCopyy] = useState([]);

  let end = page * totalPerPage;
  let start = end - totalPerPage;
  const paginado = items.slice(start, end);
  const TotalPages = Math.ceil(items.length / totalPerPage);

  function prevPage() {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  }

  function nextPage() {
    if (page >= TotalPages) {
      return null;
    }
    setPage(page + 1);
  }

  useEffect(() => {
    getFeed();
  }, []);

  async function getFeed() {
    const rssUrl = "https://g1.globo.com/rss/g1/politica";
    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
    const { contents } = await res.json();

    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");
    const copyright = feed.querySelectorAll("copyright");

    const feedCopyright = [...copyright].map((el) => ({
      cop: el?.innerHTML,
    }));
    setCopyy(copyright[0].innerHTML);

    const feedItems = [...items].map((el) => ({
      link: el.querySelector("link")?.innerHTML,
      title: el.querySelector("title")?.innerHTML,
      description: el.querySelector("description")?.innerHTML,
      // copyright: el.querySelector("copyright")?.innerHTML,
    }));
    setItems(feedItems);
  }

  return (
  
    <div class="news-background">
                          <br></br>
      <h1 className="text-success">
        <strong>
          <BsNewspaper /> Notícias
        </strong>
      </h1>
      <br></br>
      <div>
        <Row>
          <>
            <Col class="col-md-6">
              <Carousel>
                {items.map((item, index) => (
                  <Carousel.Item key={index}>
                    <a target={"_blank"} href={item.link}>
                      <img
                        className="d-block w-100"
                        src={
                          "https://i.ytimg.com/vi/IG421eoSlEE/maxresdefault.jpg"
                        }
                        href={item.link}
                        alt="First slide"
                      />
                    </a>
                    <Carousel.Caption>

                    </Carousel.Caption>
                    <h2>
                      <strong>
                        <a
                          target={"_blank"}
                          href={item.link}
                          className="text-dark"
                          style={{ textDecoration: 'none' }}
                        >
                          {item.title}
                        </a>
                      </strong>
                    </h2>
                    {copyy}
                  </Carousel.Item>

                ))}

              </Carousel>
            </Col>
          </>
          <>
            <Col class="col-md-6">
              <h4 className="text-danger">
                <strong>
                  <BsNewspaper /> Últimas Notícias
                </strong>
              </h4>
              <br></br>
              <Button className="btn btn-success" onClick={prevPage}>
                <BiSkipPrevious />
              </Button>{" "}
              {page} / {TotalPages}{" "}
              <Button className="btn btn-success" onClick={nextPage}>
                <BiSkipNext />
              </Button>
              <br></br>
              <br></br>
              <div>
              {paginado.map((item, index) => (
                <ListGroup key={index} variant="flush">
                  <ListGroup.Item as="li" className="alinhamento-news">
                    <h5 >
                      <a target={"_blank"} href={item.link} style={{ textDecoration: 'black' , color: 'black'}}>
                        {item.title}
                      </a>
                    </h5>
                  </ListGroup.Item>
                </ListGroup>
              ))}
              </div>
            </Col>
          </>
        </Row>
        <br></br>
        <Link className="btn btn-danger" to={-1}>
          Voltar
        </Link>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Home;

