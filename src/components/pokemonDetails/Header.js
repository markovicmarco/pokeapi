import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Grid, Segment, Image, Icon } from "semantic-ui-react";

const HeaderApp = () => {

  return (
    <Fragment>
<Grid>
        <Grid.Column floated="left" width={8} textAlign="left">
          <Link to={`/pokedex`}>
            <Icon name="arrow left" color="black" size="large" floated="left" />
          </Link>
        </Grid.Column>

        <Grid.Column floated="right" width={8}>
          
        </Grid.Column>

        <Grid.Column floated="left" width={8} only="computer">
          <Image
            src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png"
            size="medium"
          />
        </Grid.Column>

        <Grid.Column floated="right" width={8} only="computer">

        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column floated="left" width={8} only="mobile">
          <Image
            src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png"
            size="medium"
          />
        </Grid.Column>

        <Grid.Column floated="right" width={8} only="mobile">

        </Grid.Column>

        <Grid.Column width={16} only="mobile">
          <Segment basic padded="very" />
        </Grid.Column>
      </Grid>
      </Fragment>
  )
}

export default HeaderApp
