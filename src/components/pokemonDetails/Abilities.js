import React from "react";
import { upperCase } from "./Pokemon";
import { Grid, Segment, Divider, Header } from "semantic-ui-react";

const Abilities = ({ data }) => {
  return (
    <Segment>
      <Divider horizontal>
        <Header as="h1" className="cap textshadow" content="Abilities" />
      </Divider>
      <Grid stackable columns="equal">
        {data.map((res) => (
          <Grid.Column>
            <Segment textAlign="center">{upperCase(res.ability.name)}</Segment>
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  );
};

export default Abilities;
