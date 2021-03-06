import React from "react";
import { Grid, Segment, Image, Label, Divider, Header } from "semantic-ui-react";

const Main = ({ id, name, img, height, weight }) => {
  return (
    <Segment stacked raised>
      <Image src={img} size="medium" centered className="imagefix" />
      <Grid columns="2" textAlign="center">
        <Grid.Column>
          <Header as="h2" content={weight} subheader="Weight" />
        </Grid.Column>

        <Grid.Column>
          <Header as="h2" content={height} subheader="Height" />
        </Grid.Column>
      </Grid>

      <Divider horizontal>
        <Header as="h1" className="cap textshadow">
          {name}
        </Header>

        <Header.Subheader>
          <Label size="large" basic>
            # {id}
          </Label>
        </Header.Subheader>
      </Divider>
    </Segment>
  );
};

export default Main;
