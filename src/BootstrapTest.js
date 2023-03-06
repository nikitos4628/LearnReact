import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";

const BootstrapTest = () => {
	return (
		<Container className="mt-5 mb-5">
			<Row>
				<Col>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
					Submit
					</Button>
				</Form>
				</Col>
				<Col>
					<Carousel>
			<Carousel.Item>
			<img
				className="d-block w-100"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<img
				className="d-block w-100"
				src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
				alt="Second slide"
			/>

			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<img
				className="d-block w-100"
				src="https://media.istockphoto.com/id/843408508/fr/photo/concept-de-lentille-de-cam%C3%A9ra-photographie.jpg?s=170667a&w=0&k=20&c=e975-x_JMPM_EcRA4EiTKWXPJiaBDSPMwL2dMrm1M4s="
				alt="Third slide"
			/>

			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur.
				</p>
			</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
				</Col>
			</Row>
    	</Container>
	)
}

export default BootstrapTest;