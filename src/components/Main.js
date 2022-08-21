import React from 'react'
import Card from 'react-bootstrap/Card';
import list from '../product-category-list.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Main() {

    const res = list.data.detail

    return (
        <>
            <div className="p-5 text-center d-md-flex align-items-center top-color">
                <div className="p-3">
                    <h3 className="p-3 fw-bolder">THE ONE-STOP SHOPPING DESTINATION FOR ALL YOUR NEEDS!</h3>
                    <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt, dignissimos sapiente amet laborum sunt similique velit vero mollitia sequi.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1607083205410-7e6835ffd235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Shopping" width="50%" height="auto" />
            </div>
            <div className="padding-t pb-5" id="products">
                <h2 className="text-center fw-bolder">PRODUCTS</h2>
                <Container>
                    <Row>
                        {res.map((val) => {
                            return (
                                <Col xs={12} md={6} lg={4} key={val.id}>
                                    <Card className="text-center my-3 my-color">
                                        <Card.Img variant="top" src={val.coverImage} alt="Cover Image" width="auto" height="300px" className="p-3" />
                                        <Card.Body>
                                            <Card.Title>{val.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
            <div className="text-center top-color padding-t pb-5 px-5" id="about">
                <h2 className="pb-5 fw-bolder">ABOUT US</h2>
                <div className="d-md-flex align-items-center">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="about" width="50%" height="auto" className="w-50-md" />
                    <p className="p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, at? Enim, veniam, praesentium esse necessitatibus voluptates vero libero magni, saepe aut et unde repudiandae illo quas. Modi quae dolore rerum perspiciatis qui nesciunt officiis nobis autem necessitatibus. Repellat corrupti ducimus explicabo cum laborum, quae, nostrum quaerat, ab eveniet nam maiores!
                    </p>
                </div>
            </div>
            <div className="footer my-color p-5 text-center">
                <a href="https://www.instagram.com"><InstagramIcon fontSize="large" /></a>
                <a href="https://www.twitter.com"><TwitterIcon fontSize="large" /></a>
                <a href="https://www.facebook.com"><FacebookIcon fontSize="large" /></a>
                <p className="pt-4">
                    &copy; 2022 FLIPZON | Made with <FavoriteIcon />
                </p>
            </div>
        </>
    )
}

export default Main