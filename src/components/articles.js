import React from 'react';
import { Card , Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import Img from '../images/bike1.jpg';

const StyledCard = styled(Card)`
    &&&{
        width: 50%;
        margin: 7px;
    }
`


export default function ArticleCard(){
    return(
        <StyledCard>
            <Image src={Img} wrapped ui={false}/>
            <Card.Header>Exploring Baja on a Bike</Card.Header>
            <Card.Meta>
                <span className='date'>Published: {Date.now()}</span>
            </Card.Meta>
            <Card.Description>
                <p>Bacon ipsum dolor amet tri-tip turkey shoulder cupim. Ham hock picanha pig prosciutto. Doner short ribs cupim pastrami. Chislic salami beef filet mignon capicola. Boudin pancetta salami burgdoggen buffalo brisket t-bone turducken capicola pastrami filet mignon. Prosciutto meatball brisket, chislic meatloaf pig pastrami turducken pork chop shoulder beef. Porchetta salami shankle drumstick shank leberkas.

                    Landjaeger pork loin ball tip, pork pork chop ribeye porchetta chicken meatball biltong ham hock hamburger jowl. Hamburger buffalo corned beef leberkas, ground round short loin brisket fatback spare ribs alcatra picanha kevin. Tenderloin filet mignon strip steak chuck. Venison spare ribs shankle pork loin beef ribs, chicken filet mignon chuck ground round hamburger. Spare ribs flank corned beef bacon, pork chop turkey swine kielbasa. Shankle sausage brisket boudin strip steak swine landjaeger doner chicken cupim jowl tri-tip venison.

                    Fatback beef ribs porchetta, frankfurter shankle ribeye rump tenderloin t-bone bresaola short loin ham hock. Landjaeger pork belly cupim, picanha turducken corned beef meatball bresaola alcatra shankle tail. Pancetta sausage bacon ham beef. Ham hock strip steak pastrami prosciutto short loin. Bacon leberkas prosciutto meatloaf ground round ball tip brisket meatball biltong jowl frankfurter t-bone. Porchetta capicola meatloaf sirloin picanha landjaeger jerky prosciutto doner pork belly chuck drumstick bresaola. Capicola drumstick rump corned beef, shankle turducken salami shoulder flank chislic.

                    Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
                </p>
            </Card.Description>
        </StyledCard>
    )
}