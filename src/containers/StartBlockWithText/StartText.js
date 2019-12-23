import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Image from '../../components/Image/Funny-People.jpg';

const StartBlock = () => {
  return (
    <div>
      <Card style={{border: 'none'}}>
        <CardImg top width="100%" src={Image} alt="Image" style={{width: '800px'}}/>
        <CardBody>
          <CardTitle>О блоках</CardTitle>
          <CardSubtitle>Для просмотра нужного блока кликните, пожалуйста, на ссылку с нужным названием блока. </CardSubtitle>
          <CardText>Вашему вниманию предоставлены три блока: Movies, Notes, To do List</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StartBlock;