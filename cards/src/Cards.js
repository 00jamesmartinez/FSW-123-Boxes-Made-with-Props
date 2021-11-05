import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

function Cards() 
{
    return (
        <div class="container">
        <div class="row">
          <div class="col order-last">
        <Card.Body style={{backgroundColor:'red'}}>
            <Card.Title>
                TITLE 1
            </Card.Title>
        <Card.Text>
            Subtitle 1
            <hr/>
            Hello world 1 !
        </Card.Text>
        </Card.Body>
</div>
<div class="col">

        <Card.Body style={{backgroundColor:'orange'}}>
            <Card.Title>
                TITLE 2
            </Card.Title>
        <Card.Text>
            Subtitle 2
            <hr/>
            Hello world 2 !
        </Card.Text>
        </Card.Body>
</div>
<div class="col">

        <Card.Body style={{backgroundColor:'yellow'}}>
            <Card.Title>
                TITLE 3
            </Card.Title>
        <Card.Text>
            Subtitle 3
            <hr/>
            Hello world 3 !
        </Card.Text>
        </Card.Body>
</div>
<div class="col">

        <Card.Body style={{backgroundColor:'green'}}>
            <Card.Title>
                TITLE 4
            </Card.Title>
        <Card.Text>
            Subtitle 4
            <hr/>
            Hello world 4 !
        </Card.Text>

        </Card.Body>
        </div>
        </div>
        </div>
    )
}

export default Cards ;