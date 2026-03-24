import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ServicesCard = (props) => {
    return (
        <>
            <Card className='shadow-lg d-flex flex-row'>
                <Card.Img className='w-25' variant="top" src={props.data.img} alt={props.data.title + ' Image'} />
                <Card.Body className='w-75'>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.desc}
                    </Card.Text>
                    <Button className='ms-auto' variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default ServicesCard